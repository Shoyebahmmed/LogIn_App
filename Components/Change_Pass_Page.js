// components/ForgotPasswordForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Change_Pass = ({ navigation }) => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
      });
    
      const handleForgotPassword = (values) => {
        // Trigger email verification (backend integration here)
        console.log('Forgot Password for:', values.email);
      };

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleForgotPassword}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Forgot Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Registered Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Button title="Send Reset Code" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
    input: { borderBottomWidth: 1, marginVertical: 10, padding: 10 },
    error: { color: 'red', fontSize: 12 },
});

export default Change_Pass;
