//import lib
import React from 'react';
import { View } from 'react-native';

//make comp
const Card = ({ children }) => {
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderBottomWidth: 0,
    elevation: 1
  }
};
//make it avai
export default Card;
