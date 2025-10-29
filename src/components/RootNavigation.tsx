import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export type StackParamList = {
    Home: undefined,
    Profile: {
        userId:number
    }
}



const Stack = createStackNavigator<StackParamList>();


export default function RootNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

