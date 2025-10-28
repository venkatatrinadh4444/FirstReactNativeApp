import { Text, View } from "react-native";

import './global.css'

import RootNavigation from "./src/components/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  )
}