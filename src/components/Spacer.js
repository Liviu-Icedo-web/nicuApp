import React from 'react';
import { View } from 'react-native';
import StyleSheet from '../styles';

const Spacer = ({ children }) => {
    return <View style={StyleSheet.spacer}>{children}</View>
};


export default Spacer;