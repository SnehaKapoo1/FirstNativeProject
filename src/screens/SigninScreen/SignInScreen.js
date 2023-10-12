import React, {useState} from "react";
import {View, Image, StyleSheet, useWindowDimensions, ScrollView} from "react-native";
import Logo from "../../../assets/images/Logo_1.png";
import CustomInput from "../../components/CustomInputs/CustomInput";
import CustomButtons from "../../components/CustomButtons/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";

const SignInScreen = () => {
    
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //customButton onpress function
    const onSignInPressed = () =>{
      console.warn("signin");
    }

    const onForgotPasswordPressed = () =>{
      console.warn("signin");
    }
  
    const onSignUpPressed =() => {
      console.warn('Sign up')
    }

    const {height} = useWindowDimensions();
  return(
    <ScrollView showsVerticalScrollIndicator= {false}>
    <View 
    style = {styles.root}
    >
        <Image 
        source={Logo} 
        style = {[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
        />
       <CustomInput 
       placeholder="Username"
       value={userName}
       setValue={setUsername}
       />
       <CustomInput 
       placeholder="Password"
       value={password}
       setValue={setPassword}
       secureTextEntry={true}
       />
       <CustomButtons 
       text="Sign In"
       onPress={onSignInPressed}
       type="PRIMARY"
        />
       <CustomButtons 
       text="Forgot password?" 
       onPress={onForgotPasswordPressed}
       type="TERTIARY"
        />
       <SocialSignInButtons />
        <CustomButtons 
       text="Don't have an account? Create one" 
       onPress={onSignUpPressed}
       type="TERTIARY"
        />
    </View>
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen;