import { Login,Recipe } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs.js';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react';
const Stack=createNativeStackNavigator()
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded, error] =useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Regular':require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold':require('./assets/fonts/Roboto-Bold.ttf')
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
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
