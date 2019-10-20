import React, { useState } from 'react';
import { StyleSheet, Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from './Spacer'; 

const CarForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const[brand, setbrand] = useState('');
    const[year, setyear] = useState('');
    const[hp, sethp] = useState('');
    const[doors, setdoors] = useState('');
    const[seats, setseats] = useState('');
    const[images, setimages] = useState('');
    const[insurance, setinsurance] = useState('');
    const[Town, setTown] = useState('');
    const[PriceDay, setPriceDay] = useState('');
    const[PriceHour, setPriceHour] = useState('');

    
    return (
        <>
            <Spacer>
                <Text style={styles.headerText}>{headerText}</Text>
            </Spacer>  
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
                label="Imagini"
                value={images}
                onChangeText={setimages}
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
             {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour })}
                    type="outline"
                />
            </Spacer>
        </>
    );

};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    headerText: {
        fontSize: 30,
        paddingBottom: 10
    }
});

export default CarForm;