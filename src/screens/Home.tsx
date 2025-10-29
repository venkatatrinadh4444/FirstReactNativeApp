import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { StackParamList } from '../components/RootNavigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../components/DrawerNavigation';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

type NavigationProp = StackNavigationProp<StackParamList, 'Home'>;

// type NavigationProp = DrawerNavigationProp<DrawerParamList, 'Home'>

const screens = [
  {
    id: 1,
    name: "Home"
  },
  {
    id: 2,
    name: "Profile"
  },
  {
    id: 3,
    name: "Contact"
  },
  {
    id: 4,
    name: "About"
  }
]


export default function Home() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1">
          <Text className='text-3xl font-semibold text-center my-3'>Home Component</Text>
          <FlatList
            data={screens}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            renderItem={({ item }) => (
              <View className="bg-black opacity-50 my-10 mx-2 rounded px-4 w-[250px] h-[100px] flex justify-center items-center">
                <Text className="text-white font-semibold text-2xl">{item.name}</Text>
              </View>
            )}
          />
          <Button title="Profile" onPress={() => navigation.navigate('Profile', { userId: 10 })} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
