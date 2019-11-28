import React, { useState } from 'react';
import { View, Picker , Image} from 'react-native';
import { Button } from 'react-native-elements';
import { Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Card from '../Utils/Card';
import Spacer from '../Utils/Spacer';
import StyleSheet from '../../styles';
import {  Entypo} from '@expo/vector-icons';




const Rental = ({ headerText, errorMessage, initialValues, onSubmit, submitButtonText }) => {
    const [start_date, setStartDate] = useState(initialValues.start_date);
    const [end_date, setEndDate] = useState(initialValues.end_date);
    const [car_location] = useState(initialValues.car_location);
    const [pickUpLocation, setPickupLocation] = initialValues.pickup_location != '' ? useState(initialValues.pickup_location) : useState('');
    const [dropOffLocation, setDropOffLocation] = initialValues.dropoff_location != '' ? useState(initialValues.dropoff_location) : useState('');

    console.log('*** Rental pickUpLocation', pickUpLocation)
    console.log('*** Rental dropOffLocation', dropOffLocation)
    console.log('*** Rental initial Value', initialValues)

    return (

        <Card>
            <Text style={StyleSheet.titleAzul}>{headerText}</Text>
            <Spacer/>
            <Text  style={StyleSheet.azul}>Alege perioada in care vrei sa inchiriezi!!!</Text>
            <Spacer/>
            <View style={{   flexDirection: 'row',justifyContent: 'space-between',}}>
                <View style ={{ flex: 0.5 }}>
                    <Text style={StyleSheet.blue}>Din data de:</Text>
                    <DatePicker
                        date={start_date}
                        iconSource={require('../../img/date.png' )}
                        onDateChange={setStartDate}
                        mode="datetime"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={30}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: -8,
                                top: 5,
                                marginRight: -8
                            },
                        }}
                    />
                </View>
                <View  style ={{ flex: 0.5 }}>
                    <Text style={StyleSheet.blue}>Pana in data de :</Text>
                    <DatePicker 
                        date={end_date}
                        iconSource={require('../../img/date.png' )}
                        onDateChange={setEndDate}
                        mode="datetime"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        minuteInterval={30}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: -8,
                                top: 5,
                                marginRight: -8
                            },
                        }}
                    />
                </View>
            </View>
            <Spacer/>
            <Text style={StyleSheet.azul}>Completeaza locul de ridicare/predare !!!</Text>
            <Spacer/>           
            <View style={{ flex: 1}}>
                <View style={StyleSheet.rowView}>
                    <Text style={StyleSheet.blue}>Ridicare in:</Text>
                    <Entypo style={StyleSheet.blue} name="location-pin" size={30} />  
                </View>
                <Picker style={StyleSheet.gray}
                    selectedValue={pickUpLocation}
                    onValueChange={setPickupLocation}
                >
                    {car_location.map((item, key) =>
                        <Picker.Item label={item.street + ' / Ors: ' + item.city} value={item.id} key={key}  />
                    )}
                </Picker>

            </View>
            <View style={{ flex: 1}}>
                <View style={StyleSheet.rowView}>
                    <Text style={StyleSheet.blue} >Predare in:</Text>
                    <Entypo style={StyleSheet.blue} name="location-pin" size={30} />  
                </View>
                <Picker style={StyleSheet.gray}
                    selectedValue={dropOffLocation}
                    onValueChange={setDropOffLocation}
                >
                    {car_location.map((item, key) =>
                        <Picker.Item label={item.street + ' / Ors: ' + item.city} value={item.id} key={key} />
                    )}
                </Picker>
            </View>
            <Spacer/>   
            <Text style={StyleSheet.azul}>Ai rezervat X zile Y hore </Text>
            <Text style={StyleSheet.azul}>Suma totala rezerva : 250 Lei</Text>
            {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit(initialValues.car_id, initialValues.user_id, start_date, end_date, pickUpLocation, dropOffLocation)}
                    type="outline"
                />
            </Spacer>

        </Card>
    );
};

export default Rental;

