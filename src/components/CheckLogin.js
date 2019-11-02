import React from 'react';
import { View ,Text } from 'react-native';
import { useEffect, useContext } from 'react';
import { Button } from 'react-native-elements';
import { FontAwesome} from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';
import StyleSheet from '../styles';

const CheckLogin = () => {
    const { checkLogin, state ,signout,token } = useContext(AuthContext);

    useEffect(() => {
        checkLogin();
        console.log("*** CheckLogin : State", state);
    }, []);

    return (
        console.log("*** CheckLogin Return: State", token),
        <>
            {!state.token ?
            <View style={StyleSheet.HomeView}>
                <Text style={StyleSheet.HomeText}>Creaza-ti un Perfil si Inchiriaza Masina in Localitatea Ta pentru cate ore ai Nevoie !!</Text>
                <FontAwesome style={StyleSheet.homeIcon} name="angle-double-up" size={30} />
            </View>  

            :  <View style={StyleSheet.HomeView}>
                    <Text style={StyleSheet.HomeText}>Salut Acum Poti cauta si Rezerva Masina dorita!!!!</Text>
                    <Button title="Sign Out" onPress={signout} type="outline" /> 
                </View>  
                
            }
        </> 
    );
};

export default CheckLogin;