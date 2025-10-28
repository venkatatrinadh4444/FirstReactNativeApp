import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from "../screens/Home"
import Profile from "../screens/Profile"


export type DrawerParamList = {
    Home:undefined,
    Profile:{
        userId:number
    }
}

const Drawer = createDrawerNavigator<DrawerParamList>()
export default function DrawerRootNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}