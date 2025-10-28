import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export type StackPramList = {
    Home: undefined,
    Profile: undefined
}


const Stack = createStackNavigator<StackPramList>();


export default function RootNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

