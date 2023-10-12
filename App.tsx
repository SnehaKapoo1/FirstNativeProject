import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SignInScreen from "./src/screens/SigninScreen/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ConfirmEmailScreen from "./src/screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";

const App = () => {
  return (
    <View style = {styles.main}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      <ForgotPasswordScreen />
      {/* <ResetPasswordScreen /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  }
})

export default App;