import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens'
const Tab=createBottomTabNavigator()
export default function Tabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Home}/>
        <Tab.Screen name="Bookmark" component={Home}/>
        <Tab.Screen name="Settings" component={Home}/>
    </Tab.Navigator>
  )
}