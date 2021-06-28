import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login,Signup,ForgotPassword} from './../../Screens/index';
const Stack = createStackNavigator();
function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;