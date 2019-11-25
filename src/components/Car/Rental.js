import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import {  Button } from 'react-native-elements';
import { Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';

import Card from '../Utils/Card';
import Spacer from '../Utils/Spacer';
import StyleSheet from '../../styles';




const Rental = ({ headerText, errorMessage, initialValues , onSubmit, submitButtonText })  => {
    const[start_date, setStartDate] = useState(initialValues.start_date);
    const[end_date, setEndDate] = useState(initialValues.end_date);
    const[pickup_location] = useState(initialValues.pickup_location);
    const[dropoff_location] = useState(initialValues.dropoff_location);
    const[pickUpLocation, setPickupLocation] = useState('');
    const[dropOffLocation, setDropOffLocation] = useState('');
  

    console.log('*** Rental pickup_location',pickup_location) 
    console.log('*** Rental selectedLocation',pickUpLocation) 

    //console.log('*** Rrenatl Date', new Date('2019-11-24 23:30').toISOString())

    return (

        <Card>  
            <Text style={StyleSheet.titleAzul}>{headerText}</Text> 
            <Spacer/>
            <Text style={StyleSheet.Text}>Alege perioada in care vrei sa inchiriezi</Text>          
            <View style={StyleSheet.rowView}>
                <View style={{flex: 0.45}}>
                    <Text >Din data de:</Text>
                    <DatePicker  
                        date={start_date}                
                        onDateChange={setStartDate}
                        mode="datetime"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={30}
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
                        mode="datetime"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={30}
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
            <Text style={StyleSheet.Text}>Completeaza locul de ridicare/predare </Text>             
            
                <View style={{flex: 0.45}}>
                    <Text>Ridicare in:</Text>
                    <Picker
                        selectedValue={pickUpLocation}
                        onValueChange={setPickupLocation} 
                    >    
                            { pickup_location.map((item, key)=>
                                <Picker.Item label={item.street +' / Ors: '+item.city } value={item.id} key={key} />
                              )}     
                    </Picker> 
                 
                </View> 
                <View style={{flex: 0.45}}>
                    <Text>Predare in:</Text>
                    <Picker
                        selectedValue={dropOffLocation}
                        onValueChange={setDropOffLocation} 
                    >    
                            { dropoff_location.map((item, key)=>
                                <Picker.Item label={item.street +' / Ors: '+item.city } value={item.id} key={key} />
                              )}     
                    </Picker> 
                </View> 
          
            <Text style={StyleSheet.Text}>Ai rezervat X zile Y hore </Text>      
            <Text style={StyleSheet.Text}>Suma totala rezerva : 250 Lei</Text> 
            {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit(initialValues.car_id,initialValues.user_id,  start_date, end_date, pickUpLocation, dropOffLocation )}
                    type="outline"
                />
            </Spacer> 
              
        </Card>  
    );
};

export default Rental;
