import React, { useState } from "react";
import { TextInput, Text, Button, useTheme } from "react-native-paper";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import Logo from "@/assets/icon_.png";
import LogoDark from "@/assets/icon.png";
import CustomView from "@/components/CustomView";
import { useSession } from "@/components/providers/SessionProvider";

const initialState = {
  email: "",
  password: "",
  showPassword: false,
};

const LoginScreen = () => {
  const { dark } = useTheme();
  const { signIn } = useSession();
  const [FormData, setFormData] = useState(initialState);

  const handlerChange = (type, value) => {
    setFormData({ ...FormData, [type]: value });
  };

  const submit = async () => {
    await signIn(FormData.email.trim(), FormData.password.trim());
    router.replace("/");
  };

  return (
    <CustomView>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={dark ? LogoDark : Logo}
            contentFit="contain"
            contentPosition="bottom"
          />
          <Text
            variant="displaySmall"
            style={{
              textAlign: "center",
              fontFamily: "Pacifico",
              paddingVertical: 8,
            }}
          >
            DriveWheels
          </Text>
        </View>
        <View style={styles.containerForm}>
          <TextInput
            label="Email"
            placeholder="juan@dirveWheels.com"
            value={FormData.email}
            onChangeText={(text) => handlerChange("email", text)}
          />
          <TextInput
            label="Password"
            placeholder="********"
            value={FormData.password}
            onChangeText={(text) => handlerChange("password", text)}
            secureTextEntry={!FormData.showPassword}
            right={
              <TextInput.Icon
                icon={FormData.showPassword ? "eye" : "eye-off"}
                onPress={() =>
                  handlerChange("showPassword", !FormData.showPassword)
                }
              />
            }
          />
          <Link href="/register" asChild>
            <Text variant="labelLarge" style={{ textAlign: "right" }}>
              No tienes cuenta?
            </Text>
          </Link>
          <Button mode="elevated" onPress={submit}>
            Ingresar
          </Button>
        </View>
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 26,
    paddingHorizontal: 24,
    height: "100%",
  },
  containerImage: {
    display: "flex",
    height: "40%",
    alignItems: "center",
    paddingBottom: 28,
    // backgroundColor: "red",
  },
  image: {
    flex: 1,
    width: "40%",
    // backgroundColor: "green",
  },
  containerForm: {
    display: "flex",
    gap: 26,
    height: "50%",
    // backgroundColor: "blue",
  },
});

export default LoginScreen;
