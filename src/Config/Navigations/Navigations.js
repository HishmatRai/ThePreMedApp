import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Login,Signup,ForgotPassword,ConfirmYourInstitutionEmail,SettingsMain,AccountDetails,MyStats,Privacy,TermsOfService,SiriShortcuts,SinglePlayer} from './../../Screens/index';
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
        <Stack.Screen name="SettingsMain" component={SettingsMain} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }}/>
        <Stack.Screen name="MyStats" component={MyStats} options={{ headerShown: false }}/>
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }}/>
        <Stack.Screen name="TermsOfService" component={TermsOfService} options={{ headerShown: false }}/>
        <Stack.Screen name="SiriShortcuts" component={SiriShortcuts} options={{ headerShown: false }}/>
        <Stack.Screen name="SinglePlayer" component={SinglePlayer} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;