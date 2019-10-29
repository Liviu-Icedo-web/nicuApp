/* eslint-disable arrow-body-style */
import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import StyleSheet from '../styles';

const SearchBar = () => {
    return (
        <View style={StyleSheet.backgroundSearchar}>
            <Feather name="search" style={StyleSheet.iconSearchStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect
                style={StyleSheet.inputSearchStyle} 
                placeholder="Cauta localitate..." 
            />
        </View>
    );
};

export default SearchBar;
