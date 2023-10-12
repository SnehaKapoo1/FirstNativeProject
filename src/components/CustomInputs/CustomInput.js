import React from "react";
import {View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    
    return (
      <View style = {styles.main}>
        <TextInput 
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        style = {styles.textInput}
        secureTextEntry = {secureTextEntry}
        />
      </View>
    )
}

const styles = StyleSheet.create({
main: {
 backgroundColor: "white",
 width: '100%',
 borderColor: '#e8e8e8',
 borderRadius: 5,
 borderWidth: 1,
 paddingHorizontal: 10,
 marginVertical: 5
},
textInput: {

}
})

export default CustomInput;