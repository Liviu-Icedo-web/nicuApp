import React from 'react';
import { View, Text} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import StyleSheet from '../styles';

const RentalOwn =  ({ navigation }) => {
    return  ( 
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>              
             <View >
                <Text>Hola aici tre sa apara toate rezervele</Text>
            </View>                                                                    
        </SafeAreaView>      
    ); 
};


RentalOwn.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Masini Rezervate',
        headerTitleStyle: {
            flex: 1,
            color: '#112f91',
            fontWeight:'bold'
        },
        
    }     
};



export default RentalOwn;
