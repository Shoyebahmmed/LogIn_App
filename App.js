import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn_Page from './Components/LogIn_Page';
import Registration_Page from './Components/Registration_Page';
import Change_Pass from './Components/Change_Pass_Page';

import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();
// android : 59895812859-gdmmkvso6maqvsbjepjfbacl9ic38ta8.apps.googleusercontent.com



const Stack = createStackNavigator();


export default function App() {

  const [userInfo, setUserInfo] = React.useState(null);
  const [req, res, promtAsync] = Google.useAuthRequest({
    androidClientId : "59895812859-gdmmkvso6maqvsbjepjfbacl9ic38ta8.apps.googleusercontent.com"
  })


  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LogIn_Page} />
      <Stack.Screen name="Register" component={Registration_Page} />
      <Stack.Screen name="ForgotPassword" component={Change_Pass} />
    </Stack.Navigator>
  </NavigationContainer>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
});
