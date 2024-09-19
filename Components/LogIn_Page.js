// components/LoginForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


const LogIn_Page = ({ navigation }) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Too short!').required('Required'),
      });


  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Logging in with:', values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Button title="Login" onPress={handleSubmit} />

          <View style={styles.buttons}>
            <Button title="Create Account" onPress={() => navigation.navigate('Register')} />
            <Button title="Forgot Password" onPress={() => navigation.navigate('ForgotPassword')} />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
    input: { borderBottomWidth: 1, marginVertical: 10, padding: 10 },
    buttons: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
    error: { color: 'red', fontSize: 12 },
});

export default LogIn_Page;
