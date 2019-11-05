import React from 'react';
import { View ,Text } from 'react-native';
import {  useContext } from 'react';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import StyleSheet from '../styles';

const CheckLogin = () => {
    const { signout } = useContext(AuthContext);
    return (
        <>
            <View style={StyleSheet.CheckView}>
                <Text style={StyleSheet.CheckText}>Salut Acum Poti cauta si Rezerva Masina dorita!!!!</Text>
                <Button title="Sign Out" onPress={signout} type="outline" /> 
            </View>            
        </> 
    );
};

export default CheckLogin;