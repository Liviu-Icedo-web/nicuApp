
import React, { useState } from 'react';
import { Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from './Spacer'; 
import StyleSheet from '../styles';

const CarLocationForm = ({ headerText, errorMessage, initialValues, onSubmit, submitButtonText }) => {
    const[street, setStreet] = useState(initialValues.street);
    const[city, setCity] = useState(initialValues.city);
    const[state, setState] = useState(initialValues.state);
    const[country, setCountry] = useState(initialValues.country);

    console.log('*** CarLocationForm',initialValues.id);
    console.log('*** CarLocationForm Car_ID',initialValues.carId);
     
    return (
        <>
            <Spacer>
                <Text style={StyleSheet.headerText}>{headerText}</Text>
            </Spacer>  
            <Input         
                label="Adresa"
                value={street}
                onChangeText={setStreet}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Oras"
                value={city}
                onChangeText={setCity}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Judet"
                value={state}
                onChangeText={setState}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Tara"
                value={country}
                onChangeText={setCountry}
                autoCapitalize="none"
                autoCorrect={false}
            />         
             {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit( initialValues.id,initialValues.carId,street,city,state,country )}
                    type="outline"
                />
            </Spacer>
        </>
    );

};



export default CarLocationForm;