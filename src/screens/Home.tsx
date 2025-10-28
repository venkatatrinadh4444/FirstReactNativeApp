import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { StackPramList } from '../components/RootNavigation';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../components/DrawerNavigation';

// type NavigationProp = StackNavigationProp<StackPramList, 'Home'>;

type NavigationProp = DrawerNavigationProp<DrawerParamList,'Home'>

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className=''>
      <Text>Home Component</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile',{userId:10})} />
    </View>
  );
}
