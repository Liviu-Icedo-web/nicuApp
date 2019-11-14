
import React from 'react';
import { View, Picker } from 'react-native';
import {  Button } from 'react-native-elements';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import DatePickerRental from './DatePickerRental';
import StyleSheet from '../styles';

const Rental = ({ navigation }) => {
    return (

        <View style={StyleSheet.bookDetailView}>  
            <Text h4 style={StyleSheet.azul}>Completeaza pentru rezerva :</Text> 
            <Spacer/>
            <Text style={StyleSheet.Text}>Alege perioada in care vrei sa inchiriezi</Text>          
            <View style={StyleSheet.rowView}>
                <View style={{flex: 0.45}}>
                    <Text >Din data de:</Text>
                    <DatePickerRental /> 
                </View>
                <View style={{flex: 0.45}}>
                    <Text>Pana in data de :</Text>   
                    <DatePickerRental /> 
                </View>     
            </View>     
            <Text style={StyleSheet.Text}>Completeaza hora de ridicare/predare </Text>             
            <View style={StyleSheet.rowView}>
                <View style={{flex: 0.45}}>
                    <Text>De la hora:</Text>  
                    <Picker>  
                        <Picker.Item label = "1" value = "" />
                        <Picker.Item label = "2" value = "" />
                        <Picker.Item label = "3" value = "" />
                    </Picker> 
                </View> 
                <View style={{flex: 0.45}}>
                    <Text>Pana la hora:</Text>  
                    <Picker>  
                        <Picker.Item label = "2" value = "" />
                        <Picker.Item label = "3" value = "" />
                        <Picker.Item label = "4" value = "" />
                    </Picker> 
                </View>      
            </View> 
            <Text style={StyleSheet.Text}>Completeaza locul de ridicare/predare </Text>             
            <View style={StyleSheet.rowView}>
                <View style={{flex: 0.45}}>
                    <Text>Ridicare in:</Text>
                    <Picker>  
                        <Picker.Item label = "Aeroport" value = "" />
                        <Picker.Item label = "Centru" value = "" />
                        <Picker.Item label = "Domiciliu" value = "" />
                    </Picker> 
                </View> 
                <View style={{flex: 0.45}}>
                    <Text>Predare in:</Text>
                    <Picker>  
                        <Picker.Item label = "Aeroport" value = "" />
                        <Picker.Item label = "Centru" value = "" />
                        <Picker.Item label = "Domiciliu" value = "" />
                    </Picker> 
                </View> 
            </View>
            <Text style={StyleSheet.Text}>Ai rezervat X zile Y hore </Text>      
            <Text style={StyleSheet.Text}>Suma totala rezerva : 250 Lei</Text> 
            <Spacer>
                <Button
                    title="Confirma Rezerva!!!"
                    onPress=""
                    type="outline"
                />
            </Spacer> 
              
        </View>  
    );
};

export default Rental;