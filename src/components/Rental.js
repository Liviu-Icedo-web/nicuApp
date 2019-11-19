
import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import {  Button } from 'react-native-elements';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';
import StyleSheet from '../styles';
import DatePicker from 'react-native-datepicker';



const Rental = ({ headerText, errorMessage, initialValues , onSubmit, submitButtonText })  => {
    const[pickup_location, setPickupLocation] = useState(initialValues.pickup_location);
    const[start_date, setStartDate] = useState(initialValues.start_date);
    const[end_date, setEndDate] = useState(initialValues.end_date);


    return (

        <View style={StyleSheet.bookDetailView}>  
            <Text style={StyleSheet.titleAzul}>{headerText}</Text> 
            <Spacer/>
            <Text style={StyleSheet.Text}>Alege perioada in care vrei sa inchiriezi</Text>          
            <View style={StyleSheet.rowView}>
                <View style={{flex: 0.45}}>
                    <Text >Din data de:</Text>
                    <DatePicker  
                        date={start_date}                
                        onDateChange={setStartDate}
                        format="DD-MM-YYYY"
                        customStyles={{
                            dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                            },
                        }}
                    /> 
                </View>
                <View style={{flex: 0.45}}>
                    <Text>Pana in data de :</Text>   
                    <DatePicker 
                        date={end_date} 
                        onDateChange={setEndDate}
                        format="DD-MM-YYYY"
                        customStyles={{
                            dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                            },
                        }}
                    /> 
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
                        <Picker.Item label = "Aeroport" value = {pickup_location} onValueChange={setPickupLocation} />
                        <Picker.Item label = "Centru" value = {pickup_location} onValueChange={setPickupLocation} />
                        <Picker.Item label = "Domiciliu" value = {pickup_location} onValueChange={setPickupLocation} />
                    </Picker> 
                 
                </View> 
                <View style={{flex: 0.45}}>
                    <Text>Predare in:</Text>
                    <Picker>  
                        <Picker.Item label = "Aeroport" />
                        <Picker.Item label = "Centru"  />
                        <Picker.Item label = "Domiciliu"  />
                    </Picker> 
                </View> 
            </View>
            <Text style={StyleSheet.Text}>Ai rezervat X zile Y hore </Text>      
            <Text style={StyleSheet.Text}>Suma totala rezerva : 250 Lei</Text> 
            {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit(initialValues.car_id,initialValues.user_id,pickup_location, start_date, end_date )}
                    type="outline"
                />
            </Spacer> 
              
        </View>  
    );
};

export default Rental;

