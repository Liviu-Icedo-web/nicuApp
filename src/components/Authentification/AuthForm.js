import React, { useState } from 'react';
import {  Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from '../Utils/Spacer'; 
import StyleSheet from '../../styles';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    return (
        <>  
            <Spacer>
                <Text style={StyleSheet.headerText}>{headerText}</Text>
            </Spacer>    
            <Input         
                label="Mail"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
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
                    onPress={() => onSubmit({ email, password })}
                    type="outline"
                />
            </Spacer>
        </>
    );

};

export default AuthForm;