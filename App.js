import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./components/TabNavigator";

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
