import React from 'react';
import { View } from 'react-native';
import StyleSheet from '../../styles';

const Card = (props) => {
    return (
        <View style={StyleSheet.containerStyle}>
            {props.children}
        </View>
    );
};
export default Card;
