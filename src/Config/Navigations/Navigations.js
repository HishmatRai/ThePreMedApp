import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login,Signup,ForgotPassword,ConfirmYourInstitutionEmail} from './../../Screens/index';
const Stack = createStackNavigator();
function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{ headerShown: false }}/>
        <Stack.Screen name="ConfirmYourInstitutionEmail" component={ConfirmYourInstitutionEmail}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;