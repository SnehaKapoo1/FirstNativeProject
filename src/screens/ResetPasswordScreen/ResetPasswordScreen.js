import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButtons from '../../components/CustomButtons/CustomButton';

const ResetPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSubmitPressed = () => {};
  const onSignInPressed = () => {};

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput
        placeholder="Enter your verification code"
        value={code}
        setValue={setCode}
      />
      <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
      />

      <CustomButtons 
      text="Submit"
      onPress={onSubmitPressed}
      type="PRIMARY"
      />
      
      <CustomButtons
        text="Back to Sign In"
        onPress={onSignInPressed}
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
});

export default ResetPasswordScreen;
