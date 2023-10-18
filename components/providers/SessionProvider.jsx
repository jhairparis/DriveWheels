import React from "react";
import useStorageState from "@/hooks/useStorageState";

const AuthContext = React.createContext(null);
const url = process.env.EXPO_PUBLIC_API_URL;

export function useSession() {
  const value = React.useContext(AuthContext);

  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props) {
  const [[isLoading, session], setSession] = useStorageState();

  const signIn = async (email, password) => {
    if (
      email === undefined ||
      password === undefined ||
      email === "" ||
      password === ""
    ) {
      return Promise.reject("Invalid credentials");
    }

    const csrf = await fetch(`${url}/api/auth/csrf`);
    let csrfToken = await csrf.json();
    csrfToken = csrfToken.csrfToken;

    const dataForm = new URLSearchParams();
    dataForm.append("email", email);
    dataForm.append("password", password);
    dataForm.append("csrfToken", csrfToken);
    dataForm.append("json", true);

    const res = await fetch(`${url}/api/auth/callback/credentials`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: dataForm.toString(),
    });

    const cookie = res.headers.get("set-cookie");

    if (!res.ok && cookie === null) {
      return Promise.reject("Invalid credentials");
    }

    const res2 = await fetch(`${url}/api/auth/session`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie,
      },
    });

    const data = await res2.json();

    if (data.expires === undefined) {
      return Promise.reject("Invalid credentials");
    }

    setSession(data.user);
    return Promise.resolve();
  };

  const signOut = () => {
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
