import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { StackPramList } from "../components/RootNavigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type NavigationProp = StackNavigationProp<StackPramList,'Profile'>

type RouteParamsProp = RouteProp<StackPramList,'Profile'>

export default function Profile() {
    const navigation = useNavigation<NavigationProp>()

    const route = useRoute<RouteParamsProp>()

    return (
        <View>
            <Text>Profile Page</Text>
            <Text>User Id : {route.params.userId}</Text>
        </View>
    )
}