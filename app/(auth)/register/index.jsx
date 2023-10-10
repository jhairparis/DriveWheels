import React from "react";
import { TextInput, Text, Button, useTheme } from "react-native-paper";
import { Link } from "expo-router";
import { StyleSheet, View, ScrollView } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";
import Logo from "../../../assets/icon_.png";
import LogoDark from "../../../assets/icon.png";

import CustomView from "../../../components/CustomView";

const initialState = {
  name: "",
  lastName: "",
  legalId: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
};

const LoginScreen = () => {
  const { dark } = useTheme();
  const [FormData, setFormData] = React.useState(initialState);

  const handlerChange = (type, value) => {
    setFormData({ ...FormData, [type]: value });
  };

  return (
    <CustomView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={dark ? LogoDark : Logo}
              contentPosition="bottom"
            />
            <Text variant="displaySmall" style={styles.driveWheels}>
              DriveWheels
            </Text>
            <View style={{ flex: 1 }}></View>
          </View>
          <View style={styles.containerForm}>
            <Text variant="headlineLarge" style={{ textAlign: "center" }}>
              Registro
            </Text>
            <View style={{ flexDirection: "row", gap: 16 }}>
              <TextInput
                label="Nombre"
                placeholder="Juan"
                style={{ flex: 1 }}
                value={FormData.name}
                onChangeText={(text) => handlerChange("name", text)}
              />
              <TextInput
                label="Apellido"
                placeholder="Gomez"
                style={{ flex: 1 }}
                value={FormData.lastName}
                onChangeText={(text) => handlerChange("lastName", text)}
              />
            </View>

            <TextInput
              label="Numero de identificación"
              placeholder="1000728819"
              value={FormData.legalId}
              onChangeText={(text) => handlerChange("legalId", text)}
            />
            <TextInput
              label="Correo electrónico"
              placeholder="juan@dirveWheels.com"
              value={FormData.email}
              onChangeText={(text) => handlerChange("email", text)}
            />
            <TextInput
              label="Contraseña"
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
            <TextInput
              label="Confirmar contraseña"
              placeholder="********"
              value={FormData.confirmPassword}
              onChangeText={(text) => handlerChange("confirmPassword", text)}
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
            <Link href="/login" asChild>
              <Text variant="labelLarge" style={{ textAlign: "right" }}>
                Ya tienes cuenta?
              </Text>
            </Link>
            <Button mode="elevated" onPress={() => router.replace("/")}>
              Ingresar
            </Button>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "10%",
    // backgroundColor: "red",
  },
  image: {
    flex: 1,
    height: "100%",
    // backgroundColor: "green",
  },
  driveWheels: {
    fontFamily: "Pacifico",
    paddingVertical: 8,
    marginTop: 20,
    marginLeft: 10,
    // backgroundColor: "blue",
  },
  containerForm: {
    marginTop: 20,
    flex: 1,
    display: "flex",
    gap: 26,
    // backgroundColor: "blue",
  },
});

export default LoginScreen;
