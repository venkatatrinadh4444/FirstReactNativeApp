import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

export type BottomTabParamList = {
    Home:undefined,
    Profile:{
        userId:number
    }
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabRootNavigation() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home}/>
            <BottomTab.Screen name="Profile" component={Profile}/>
        </BottomTab.Navigator>
    )
}