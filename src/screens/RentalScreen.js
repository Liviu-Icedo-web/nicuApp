import React from 'react';
import { View, Text} from 'react-native';
import { Tab, Tabs } from 'native-base';
import ReceivedRental from '../components/ReceivedRental';



const RentalScreen =  ({ navigation }) => {
    return  ( 

        <Tabs>
            <Tab
                heading='Rezerve Primite'>
                <ReceivedRental/>
            </Tab>
            <Tab heading='Rezerve Facute'>
                <View >
                    <Text>Rezerve FACUTE</Text>
                </View>
            </Tab>
        </Tabs>
 
    ); 
};

RentalScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Masini Rezervate',
        headerTitleStyle: {
            flex: 1,
            //color: '#D3D3D3',
           // fontWeight:'bold'
        },
        
    }     
};

export default RentalScreen;


