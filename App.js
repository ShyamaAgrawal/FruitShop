import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './Components/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from './Components/ProductScreen';
import CartScreen from './Components/CartScreen';
import Gradient from './Components/Gradient';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      {/* <HomeScreen /> */}
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='product' component={ProductScreen} />
        <Stack.Screen name='cart' component={CartScreen} />
        <Stack.Screen name='grad' component={Gradient} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App