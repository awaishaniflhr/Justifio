import { StyleSheet,} from 'react-native'
import React from 'react'
import VerificationReport1 from './src/screens/VerificationReport1'
import VerificationReport2 from './src/screens/VerificationReport2'
import IdentityProf from './src/screens/IdentityProf'
import BillVerification from './src/screens/BillVerification'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})