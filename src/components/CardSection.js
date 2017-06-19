//import libs
import React from 'react';
import { View } from 'react-native';

//make comp
const CardSection = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
}; 

//style it
const styles = {
  containerStyle: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};
//make it avai
export default CardSection;
