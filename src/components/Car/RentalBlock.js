import React, { useState } from 'react';
import { View, Picker,Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Text } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import Spacer from '../Utils/Spacer';
import StyleSheet from '../../styles';
import {  Entypo} from '@expo/vector-icons';
import {  Divider  } from 'react-native-elements';




const RentalBlock = ({ headerText, errorMessage, initialValues, onSubmit, submitButtonText }) => {
    const [start_date, setStartDate] = useState(initialValues.start_date);
    const [end_date, setEndDate] = useState(initialValues.end_date);
    const [car_location] = useState(initialValues.car_location);
    const [pickUpLocation, setPickupLocation] = initialValues.pickup_location != '' ? useState(initialValues.pickup_location) : useState(initialValues.car_location[0].id);
    const [dropOffLocation, setDropOffLocation] = initialValues.dropoff_location != '' ? useState(initialValues.dropoff_location) : useState(initialValues.car_location[0].id);

    console.log('*** RentalBlock pickUpLocation', pickUpLocation)
    console.log('*** RentalBlock dropOffLocation', dropOffLocation)
    console.log('*** RentalBlock initial Value', initialValues)

    return (

        <View style={StyleSheet.Card}>
            <Text  h4 style={StyleSheet.blue}>{headerText}</Text>
            <Spacer/>
            <View style={StyleSheet.SombraCardView}>
                <View style={StyleSheet.rowView}>
                    <View >
                        <Text style={{ color : 'gray', top: 10}}>Data Ridicare:</Text>
                    </View>
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
                                left: -8,
                                top: 5,
                                marginLeft: -8
                            },
                        }}
                    />
                </View>
                <View  style={StyleSheet.rowView}>
                    <View>
                        <Text style={{ color : 'gray', top: 10}}>Data Predare:</Text>
                    </View>
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
                                left: -8,
                                top: 5,
                                marginLeft: -8
                            },
                        }}
                    />
                </View>
            </View>
            <Divider />       
            <View >
                <View style={StyleSheet.rowView}>
                    <Text style={{ color : 'gray', top: 10}}>Selecteaza locul unde vrei sa ridici masina:</Text>
                    <Entypo style={StyleSheet.blue} name="location-pin" size={35} />  
                </View>
                <View style={StyleSheet.SombraCardView}>
                    <Picker  style={{ color : 'gray'}}
                        selectedValue={pickUpLocation}
                        onValueChange={setPickupLocation}
                    >
                        {car_location.map((item, key) =>
                            <Picker.Item label={item.street + ' / Ors: ' + item.city} value={item.id} key={key}  />
                        )}
                    </Picker>
                 </View>   
            </View>
            <View >
                <View style={StyleSheet.rowView}>
                    <Text style={{ color : 'gray', top: 10}} >Selecteaza locul unde vrei sa predai masina:</Text>
                    <Entypo style={StyleSheet.blue} name="location-pin" size={35} />  
                 </View>
                 <View style={StyleSheet.SombraCardView}>
                    <Picker style={{ color : 'gray'}}
                        selectedValue={dropOffLocation}
                        onValueChange={setDropOffLocation}
                    >
                        {car_location.map((item, key) =>
                            <Picker.Item label={item.street + ' / Ors: ' + item.city} value={item.id} key={key} />
                        )}
                    </Picker>
                </View>
            </View>
            <Spacer />   
            <Text style={StyleSheet.blue}>Ai rezervat X zile Y hore </Text>
            <Text style={StyleSheet.blue}>Suma totala rezerva : 250 Lei</Text>
            {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() =>checkData(initialValues,start_date, end_date, pickUpLocation, dropOffLocation,onSubmit) }
                    type="outline"
                />
            </Spacer>
        </View>
    );
};

const checkData = (initialValues, start_date,end_date,pickUpLocation, dropOffLocation,onSubmit)=>{
    var alerta =''; 
    if (start_date == ''){
        alerta ='Data Ridicare'+'\n';
    }
    if (end_date == ''){
        alerta = alerta+'Data Predare'+'\n';
    }

    if(alerta ==''){
        return  onSubmit(initialValues.car_id, initialValues.user_id, initialValues.user_owner_id ,start_date, end_date, pickUpLocation, dropOffLocation)     
    }else{
        Alert.alert('Nu ai selectionat',alerta)
    }
    
}

export default RentalBlock;

