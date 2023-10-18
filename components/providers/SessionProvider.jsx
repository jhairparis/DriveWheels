import React from "react";
import useStorageState from "@/hooks/useStorageState";

const AuthContext = React.createContext(null);

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
      return Promise.reject();
    }

    setSession(email);
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
