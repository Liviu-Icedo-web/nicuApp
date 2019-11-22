import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Spacer from '../Utils/Spacer';
import { withNavigation } from 'react-navigation';
import StyleSheet from '../../styles';

const NavLink = ({navigation, text, routeName}) => {
    return (
         <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={StyleSheet.link}>
                     {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
};

export default withNavigation(NavLink);