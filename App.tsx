import { Text, View } from "react-native";

import './global.css'

import RootNavigation from "./src/components/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabRootNavigation from "./src/components/BottomTabNavigation";
import DrawerRootNavigation from "./src/components/DrawerNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
        {/* <BottomTabRootNavigation/> */}
        {/* <DrawerRootNavigation/> */}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}