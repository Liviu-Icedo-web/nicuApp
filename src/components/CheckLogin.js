import React from 'react';
import { View } from 'react-native';
import { useEffect, useContext } from 'react';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import StyleSheet from '../styles';

const CheckLogin = () => {
    const { checkLogin, state ,signout} = useContext(AuthContext);

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <>
            {!state.token ?
            <View style={StyleSheet.button}>
                    <Button type="outline" title="Creaza-ti un Perfil si Inchiriaza Masina in Localitatea Ta pentru cate ore ai Nevoie !!" onPress={() => navigation.navigate('Signup')} />
                </View>  

            :  <Spacer>
                <Button title="Sign Out" onPress={signout} type="outline" /> 
                </Spacer>   
            }
        </> 
    );
};

export default CheckLogin;