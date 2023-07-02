import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import Home from './Components/Home';
import Movie from './Components/Movie';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome'
import Search from './Components/Search';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import { store } from './Components/redux/store';

const Tab=createBottomTabNavigator()
const App = () => {
  return (
    <Provider store={store}>
   <NavigationContainer>
   <Tab.Navigator screenOptions={{
   
    tabBarStyle:{
      backgroundColor:"black"
    },
    tabBarActiveTintColor:"orange",
    
    headerStyle:{
      backgroundColor:"orange"
    },
    headerTintColor:"white",
    headerTitle:"Ecommerce App",
   
    
   }}
   >
    
   <Tab.Screen name="Home" component={Home} options={{
     tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={size} />
    ),
   }}/>
   <Tab.Screen name="Cart" component={Cart} options={{
    tabBarBadge:10,
     tabBarIcon: ({ color, size }) => (
      <Icon1 name="cart" color={color} size={size} />
    ),
   }}/>
   <Tab.Screen name="Account" component={Search} options={{
     tabBarIcon: ({ color, size }) => (
      <Icon2 name="account" color={color} size={size} />
    ),
   }}/>
   
  




   </Tab.Navigator>
   </NavigationContainer>
   </Provider>
  
  );
}

export default App;
