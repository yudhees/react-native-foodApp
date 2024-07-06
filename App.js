import { Login,Recipe } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs.js';
import { SafeAreaView } from 'react-native-safe-area-context';
const Stack=createNativeStackNavigator()
export default function App() {
  return (
  <SafeAreaView style={{ flex:1 }}>
   <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false}} initialRouteName='Login'>
           <Stack.Screen name="Login" component={Login}></Stack.Screen>
           <Stack.Screen name="Home" component={Tabs}></Stack.Screen>
           <Stack.Screen name="Recipe" component={Recipe}></Stack.Screen>
       </Stack.Navigator>
   </NavigationContainer>
   </SafeAreaView>
  );
}
