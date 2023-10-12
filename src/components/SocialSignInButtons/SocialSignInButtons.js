import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import CustomButtons from "../CustomButtons/CustomButton";

const SocialSignInButtons = () => {

    const onSignUpFacebook = () => {

    }
  
    const onSignUpGoogle = () => {
  
    }
  
    const onSignUpApple = () => {
  
    }

 return (
    <>
        <CustomButtons 
       text="Sign In with facebook" 
       onPress={onSignUpFacebook}
       bgColor="#E7EAF4"
       fgColor="#4765A9"
        />
        <CustomButtons 
       text="Sign In with google" 
       onPress={onSignUpGoogle}
       bgColor="#FAE9EA"
       fgColor="#DD4D44"
        />
        <CustomButtons 
       text="Sign In with apple" 
       onPress={onSignUpApple}
       bgColor="#e3e3e3"
       fgColor="#363636"
        />
    </>
 )
}

export default SocialSignInButtons;