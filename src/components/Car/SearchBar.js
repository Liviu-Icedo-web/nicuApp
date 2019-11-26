/* eslint-disable arrow-body-style */
import React from 'react';
import { View, TextInput, TouchableOpacity ,Picker} from 'react-native';
import { Feather } from '@expo/vector-icons';
import StyleSheet from '../../styles';
import {  Divider } from 'react-native-elements';
import Spacer from '../../components/Utils/Spacer';

const SearchBar = () => {
    return (
        <View style={StyleSheet.backgroundSearch}>
            <View style={StyleSheet.RowSearch}>
                <View style={StyleSheet.backgroundInput}>
                    <TextInput 
                        autoCapitalize="none"
                        autoCorrect
                        style={StyleSheet.inputSearchStyle} 
                        placeholder="ex.Alba Iulia"
                        placeholderTextColor="#112f91"  
                    />
                </View>
                <View style={StyleSheet.backgroundInput}>
                    <TextInput 
                        autoCapitalize="none"
                        autoCorrect
                        style={StyleSheet.inputSearchStyle} 
                        placeholder="ex.Opel" 
                        placeholderTextColor="#112f91" 
                    />
                </View>
            </View>
            <View style={StyleSheet.RowSearch}>
                 <Picker  style={StyleSheet.picker}>
                     <Picker.Item label = "Usi" value = "" />
                    <Picker.Item label = "2" value = "" />
                    <Picker.Item label = "5" value = "" />
                    <Picker.Item label = "8" value = "" />
                    <Picker.Item label = "Indiferent" value = "" />
                </Picker> 
                <Picker  style={StyleSheet.picker}>
                     <Picker.Item label = "Locuri" value = "" />
                    <Picker.Item label = "2" value = "" />
                    <Picker.Item label = "5" value = "" />
                    <Picker.Item label = "8" value = "" />
                    <Picker.Item label = "Indiferent" value = "" />
                </Picker> 
                <Picker  style={StyleSheet.picker}>
                     <Picker.Item label = "Berlina" value = "" />
                    <Picker.Item label = "MonoVolume" value = "" />
                    <Picker.Item label = "Break" value = "" />
                    <Picker.Item label = "Coupe" value = "" />
                    <Picker.Item label = "Indiferent" value = "" />
                </Picker>    
            </View>
            <Divider />
            <View style={StyleSheet.RowSearch}>
                <Picker style={StyleSheet.picker}>
                    <Picker.Item label = "Manuala" value = "" />
                    <Picker.Item label = "Automatica" value = "" />
                    <Picker.Item label = "Indiferent" value = "" />
                </Picker> 
                 <Picker style={StyleSheet.picker}>  
                    <Picker.Item label = "Benzina" value = "" />
                    <Picker.Item label = "Diesel" value = "" />
                    <Picker.Item label = "Indiferent" value = "" />
                </Picker>  
                <View style={StyleSheet.search}>
                     <TouchableOpacity onPress={() => navigation.navigate('Rental')}>  
                        <Feather name="search" style={StyleSheet.iconSearchStyle} />     
                    </TouchableOpacity> 
                </View>    
            </View> 
            <Divider /> 
        </View>
    );
};

export default SearchBar;
