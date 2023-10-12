import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButtons from '../../components/CustomButtons/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {};
  const onResendPressed = () => {};
  const onSignInPressed = () => {};

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>
      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />

      <CustomButtons 
      text="Confirm"
      onPress={onConfirmPressed}
      type="PRIMARY"
      />
      <CustomButtons
        text="Resend code"
        onPress={onResendPressed}
        type="SECONDARY"
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

export default ConfirmEmailScreen;
