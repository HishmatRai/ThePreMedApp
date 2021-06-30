import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Home,
  Login,
  Signup,
  ForgotPassword,
  ConfirmYourInstitutionEmail,
  SettingsMain,
  AccountDetails,
  MyStats,
  Privacy,
  TermsOfService,
  SiriShortcuts,
  SinglePlayer,
  EndlessMode,
  TimedMode,
  ReviewMode,
  OverviewMode,
  Flashcards,
  Multiplayer,
  FriendsList,
  AddFriends,
  CurrentMatches,
  Leaderboard,
  EndlessModePlay,
  GameOver,
  YourAnswers,
  Leaderboards,
  Options,
  EndlessModePlay2,
  GameOver2
} from './../../Screens/index';
const Stack = createStackNavigator();
function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmYourInstitutionEmail" component={ConfirmYourInstitutionEmail} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsMain" component={SettingsMain} options={{ headerShown: false }} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} options={{ headerShown: false }} />
        <Stack.Screen name="MyStats" component={MyStats} options={{ headerShown: false }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
        <Stack.Screen name="TermsOfService" component={TermsOfService} options={{ headerShown: false }} />
        <Stack.Screen name="SiriShortcuts" component={SiriShortcuts} options={{ headerShown: false }} />
        <Stack.Screen name="SinglePlayer" component={SinglePlayer} options={{ headerShown: false }} />
        <Stack.Screen name="EndlessMode" component={EndlessMode} options={{ headerShown: false }} />
        <Stack.Screen name="TimedMode" component={TimedMode} options={{ headerShown: false }} />
        <Stack.Screen name="ReviewMode" component={ReviewMode} options={{ headerShown: false }} />
        <Stack.Screen name="OverviewMode" component={OverviewMode} options={{ headerShown: false }} />
        <Stack.Screen name="Flashcards" component={Flashcards} options={{ headerShown: false }} />
        <Stack.Screen name="Multiplayer" component={Multiplayer} options={{ headerShown: false }} />
        <Stack.Screen name="FriendsList" component={FriendsList} options={{ headerShown: false }} />
        <Stack.Screen name="AddFriends" component={AddFriends} options={{ headerShown: false }} />
        <Stack.Screen name="CurrentMatches" component={CurrentMatches} options={{ headerShown: false }} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} options={{ headerShown: false }} />
        <Stack.Screen name="EndlessModePlay" component={EndlessModePlay} options={{ headerShown: false }} />
        <Stack.Screen name="GameOver" component={GameOver} options={{ headerShown: false }} />
        <Stack.Screen name="YourAnswers" component={YourAnswers} options={{ headerShown: false }} />
        <Stack.Screen name="Leaderboards" component={Leaderboards} options={{ headerShown: false }} />
        <Stack.Screen name="Options" component={Options} options={{ headerShown: false }} />
        <Stack.Screen name="EndlessModePlay2" component={EndlessModePlay2} options={{ headerShown: false }} />
        <Stack.Screen name="GameOver2" component={GameOver2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;