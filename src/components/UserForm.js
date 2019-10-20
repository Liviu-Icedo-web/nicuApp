import React, { useState } from 'react';
import { StyleSheet, Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from './Spacer'; 

const UserForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[nick_name, setNickName] = useState('');
    const[first_name, setFirstName] = useState('');
    const[last_name, setLastName] = useState('');
    const[last_name2, setLastName2] = useState('');
    const[driving_licence_number, setDrivingLicenceNumber] = useState('');

    
    return (
        <>
            <Spacer>
                <Text style={styles.headerText}>{headerText}</Text>
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
             {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({  email, password, nick_name, first_name, last_name,last_name2, driving_licence_number })}
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

export default UserForm;