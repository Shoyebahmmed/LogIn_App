// components/ForgotPasswordForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const Change_Pass = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleForgotPassword = () => {
    // Trigger email verification (backend integration)
    console.log('Forgot Password for:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Registered Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Send Reset Code" onPress={handleForgotPassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  input: { borderBottomWidth: 1, marginVertical: 10, padding: 10 },
});

export default Change_Pass;
