import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButtons from '../../components/CustomButtons/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreen = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');

  const onRegisterPressed = () => {
    console.warn('Sign Up');
  };

  const onAlreadySignUp = () => {

  }

  const onTermsOfUsePressed = () => {

  }

  const onPrivacyPressed = () => {

  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create Account</Text>
      <CustomInput
        placeholder="Username"
        value={userName}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Confirm Password"
        value={passwordConfirm}
        setValue={setPasswordConfirm}
        secureTextEntry={true}
      />
      <CustomButtons
        text="Register"
        onPress={onRegisterPressed}
        type="PRIMARY"
      />
      <Text style={styles.termsTextView}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.termsLink} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.termsLink} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>
           
           <SocialSignInButtons />
        <CustomButtons 
       text="Already have an account? Sign In" 
       onPress={onAlreadySignUp}
       type="TERTIARY"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  termsTextView: {
   color: 'grey',
   marginVertical: 10
  },

  termsLink: {
   color: "#FDB085"
  },
});

export default SignUpScreen;
