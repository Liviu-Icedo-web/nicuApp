
import React  from 'react';
import { View, Text  } from 'react-native';
import {  Button, Input } from 'react-native-elements';
import Spacer from '../Utils/Spacer'; 
import StyleSheet from '../../styles';

const CreditCardForm = () => {
    return (
        <>
            <View style= {{ flex: 1}}>
                <Spacer/>
                <Input         
                    label="Numar Card"
                    value=''
                    onChangeText=''
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer/>
                <Input         
                    label="Nume Card"
                    value=''
                    onChangeText=''
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer/>
            </View>
            <View style={StyleSheet.rowViewCard}>
                <View>
                    <Input         
                        label="Data de Expirare"
                        value=''
                        onChangeText=''
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
                <View>
                    <Input         
                        label="Nr. de securitate"
                        value=''
                        onChangeText=''
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                </View>
            </View>
            <Spacer/>
            <Button
                title='Salveaza'
                type="outline"
            />
           
        </>
       
    );

};


export default CreditCardForm;