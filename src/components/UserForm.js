
import React, { useState } from 'react';
import { Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from './Spacer'; 
import StyleSheet from '../styles';

const UserForm = ({ headerText, errorMessage, initialValues, onSubmit, submitButtonText }) => {
    const[email, setEmail] = useState(initialValues.email);
    const[password, setPassword] = useState(initialValues.password);
    const[nick_name, setNickName] = useState(initialValues.nick_name);
    const[first_name, setFirstName] = useState(initialValues.first_name);
    const[last_name, setLastName] = useState(initialValues.last_name);
    const[last_name2, setLastName2] = useState(initialValues.last_name2);
    const[driving_licence_number, setDrivingLicenceNumber] = useState(initialValues.driving_licence_number);

    
    return (
        <>
            <Spacer>
                <Text style={StyleSheet.headerText}>{headerText}</Text>
            </Spacer>  
            <Input         
                label="Username"
                value={nick_name}
                onChangeText={setNickName}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Nume"
                value={first_name}
                onChangeText={setFirstName}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Prenume"
                value={last_name}
                onChangeText={setLastName}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Prenume2"
                value={last_name2}
                onChangeText={setLastName2}
                autoCapitalize="none"
                autoCorrect={false}
            />         
            <Input         
                label="Mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input         
                label="Numar Permis de Condus"
                value={driving_licence_number}
                onChangeText={setDrivingLicenceNumber}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                secureTextEntry
                label="Parola"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
             {errorMessage ? <Text style={StyleSheet.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit( email, password, nick_name, first_name, last_name,last_name2, driving_licence_number )}
                    type="outline"
                />
            </Spacer>
        </>
    );

};



export default UserForm;