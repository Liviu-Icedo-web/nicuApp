import React, { useState } from 'react';
import {  Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import ImageUpload from './ImageUpload';
import StyleSheet from '../styles';

const CarForm = ({ headerText, errorMessage, initialValues , onSubmit, submitButtonText, }) => {
    const[brand, setbrand] = useState(initialValues.brand);
    const[year, setyear] = useState(initialValues.year);
    const[hp, sethp] = useState(initialValues.hp);
    const[doors, setdoors] = useState(initialValues.doors);
    const[seats, setseats] = useState(initialValues.seats);
    const[images, setimages] = useState(initialValues.images);
    const[insurance, setinsurance] = useState(initialValues.insurance);
    const[Town, setTown] = useState(initialValues.Town);
    const[PriceDay, setPriceDay] = useState(initialValues.PriceDay);
    const[PriceHour, setPriceHour] = useState(initialValues.PriceHour);

    
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
                value={year}
                onChangeText={setyear}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                label="Cai Putere"          
                type="number"                
                value={hp}
                onChangeText={sethp}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input                         
                label="Usi"
                type="number"
                value={doors}
                onChangeText={setdoors}
                autoCapitalize="none"
                autoCorrect={false}
            />         
            <Input         
                label="Locuri"
                type="number"
                value={seats}
                onChangeText={setseats}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Oras"
                value={Town}
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
                value={PriceDay}
                onChangeText={setPriceDay}
                autoCapitalize="none"
                autoCorrect={false}
            />
             <Input 
                label="Pret/HORA"
                type="number"
                value={PriceHour}
                onChangeText={setPriceHour}
                autoCapitalize="none"
                autoCorrect={false}
            />
             {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit( brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour )}
                    type="outline"
                />
            </Spacer>
        </>
    );

};

CarForm.defaultProps = {
    initialValues: {
        brand: '',
        year: '',
        hp: '',
        doors: '',
        seats: '',
        insurance: '',
        images: '',
        Town: '',
        PriceDay: '',
        PriceHour: ''

    }
};


export default CarForm;