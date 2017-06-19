//import libs
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

//make comp
const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>
      {children}
    </Text>
    </TouchableOpacity>
  );
};

//style it
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 4,
  }
};
//make it avai
export default Button;
