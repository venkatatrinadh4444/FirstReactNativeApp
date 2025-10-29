import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { StackParamList } from "../components/RootNavigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type NavigationProp = StackNavigationProp<StackParamList,'Profile'>

type RouteParamsProp = RouteProp<StackParamList,'Profile'>

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