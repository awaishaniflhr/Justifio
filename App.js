import React from 'react'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdentityProf from './src/screens/IdentityProf';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="IdentityProf" component={IdentityProf} />
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

