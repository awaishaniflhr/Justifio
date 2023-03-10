import React from 'react'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdentityProf from './src/screens/IdentityProf';
import Splash from './src/screens/Splash';
import OTPScreen from './src/screens/OTPScreen';
import Dashboard from './src/screens/Dashboard';
import Camera from './src/screens/Camera';
import PictureModal from './src/screens/PictureModal';
import VerificationReport1 from './src/screens/VerificationReport1';
import CameraPassport from './src/screens/CameraPassport';
import CameraLicence from './src/screens/CameraLicence';
import SelfieCamera from './src/screens/SelfieCamera';
import MyDashboard from './src/screens/MyDashboard';






const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Splash" component={Splash}  />
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="PictureModal" component={PictureModal} />
      <Stack.Screen name="CameraLicence" component={CameraLicence} />
      <Stack.Screen name="VerificationReport1" component={VerificationReport1} />
      <Stack.Screen name="CameraPassport" component={CameraPassport} />
      <Stack.Screen name="OTPScreen" component={OTPScreen}  />
      <Stack.Screen name="SelfieCamera" component={SelfieCamera}  />
      <Stack.Screen name="IdentityProf" component={IdentityProf} />
      <Stack.Screen name="MyDashboard" component={MyDashboard} />
    
      
      
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

