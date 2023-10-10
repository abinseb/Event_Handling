import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider}></View>;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,       
    backgroundColor: '#000', 
    marginVertical: 10,    
  },
});

export default Divider;
