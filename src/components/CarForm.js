import React, { useState } from 'react';
import {  Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import ImageUpload from './ImageUpload';
import StyleSheet from '../styles';

const CarForm = ({ headerText, errorMessage, initialValues , onSubmit, submitButtonText }) => {
    const[brand, setbrand] = useState(initialValues.brand != '' ? initialValues.brand : '' );
    const[year, setyear] = useState(initialValues.year !== '' ? initialValues.year:'');
    const[hp, sethp] = useState(initialValues.hp);
    const[doors, setdoors] = useState(initialValues.doors);
    const[seats, setseats] = useState(initialValues.seats);
    const[images, setimages] = useState(initialValues.images);
    const[insurance, setinsurance] = useState(initialValues.insurance );
    const[town, setTown] = useState(initialValues.town);
    const[price_day, setPriceDay] = useState(initialValues.price_day );
    const[price_hour, setPriceHour] = useState(initialValues.price_hour);

    return (
        <>
            <Spacer>
                <Text style={StyleSheet.headerText}>{headerText}</Text>
            </Spacer>  
            <ImageUpload/>
            <Input
                label="Marca"
                value={brand}
                onChangeText={setbrand}
                autoCapitalize="none"
                autoCorrect={false}
            />
              <Input        
                label="An Inmatriculare"  
                type="number"                
                value={year.toString()}
                onChangeText={setyear}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                label="Cai Putere"          
                type="number"                
                value={hp.toString()}
                onChangeText={sethp}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input                         
                label="Usi"
                type="number"
                value={doors.toString()}
                onChangeText={setdoors}
                autoCapitalize="none"
                autoCorrect={false}
            />         
            <Input         
                label="Locuri"
                type="number"
                value={seats.toString()}
                onChangeText={setseats}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Oras"
                value={town}
                onChangeText={setTown}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Asigurare"
                value={insurance}
                onChangeText={setinsurance}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Imagini"
                value={images}
                onChangeText={setimages}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Pret/ZI"
                type="number"
                value={price_day.toString()}
                onChangeText={setPriceDay}
                autoCapitalize="none"
                autoCorrect={false}
            />
             <Input 
                label="Pret/HORA"
                type="number"
                value={price_hour.toString()}
                onChangeText={setPriceHour}
                autoCapitalize="none"
                autoCorrect={false}
            />
             {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit( brand, year, hp, doors, seats, insurance, images, town, price_day, price_hour )}
                    type="outline"
                />
            </Spacer>
        </>
    );

};


export default CarForm;