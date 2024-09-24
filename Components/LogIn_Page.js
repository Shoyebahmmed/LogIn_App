// components/LoginForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


import * as WebBrowser from "expo-web-browser";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();
// android : 59895812859-gdmmkvso6maqvsbjepjfbacl9ic38ta8.apps.googleusercontent.com




const LogIn_Page = ({ navigation }) => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [req, res, promtAsync] = Google.useAuthRequest({
    androidClientId : "59895812859-gdmmkvso6maqvsbjepjfbacl9ic38ta8.apps.googleusercontent.com"
  })


  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Do login logic here (backend integration)
    console.log('Logged in:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.buttons}>
        <Button title="Create Account" onPress={() => navigation.navigate('Register')} />
        <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
      </View>

          <View>
        <Button style={styles.container} title='click' onPress={promtAsync} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  input: { borderBottomWidth: 1, marginVertical: 10, padding: 10 },
  buttons: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
});

export default LogIn_Page;
