import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './components/HomeScreen';
import RestaurantScreen from './components/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import DeliveringProcessScreen from './screens/DeliveringProcessScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
        <Stack.Screen name="DeliveryProcessScreen" options={{presentation:"fullScreenModal"}} component={DeliveringProcessScreen} />
        <Stack.Screen name="Delivery" options={{presentation:"fullScreenModal"}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation