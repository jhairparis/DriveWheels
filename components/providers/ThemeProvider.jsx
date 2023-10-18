import { PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme } from "react-native";

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
};

export default ThemeProvider;
