import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButtons = ({onPress, text, type, bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[
          (`container_${type}`)],
          bgColor ? {backgroundColor: bgColor} : {}
      ]}>
      <Text 
      style={[
        styles.textView, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {}
        ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },
  container_TERTIARY: {},
  container_SECONDARY: {
   borderColor: "#3B71F3",
   borderWidth: 2,
  },

  textView: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },
  text_TERTIARY: {
    color: 'grey',
  },
});

export default CustomButtons;
