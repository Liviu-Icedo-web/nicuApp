import React, { useContext, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Tab, Tabs } from 'native-base';
import ReceivedRental from '../../components/Car/ReceivedRental';
import { Context as rentalContext } from '../../context/RentalContext';


const RentalScreen =  ({ navigation }) => {
    const {state, fetchRentals} = useContext(rentalContext)
    const userId = navigation.getParam('userId')

    useEffect(()=>{
        fetchRentals(userId)
    },[]);
 
    return  ( 

        <Tabs>
            <Tab
                heading='Rezerve Confirmate'>
                <ReceivedRental 
                    userId = {userId}
                    rentalDate ={state.rental}
                    navigation ={navigation}
                />
            </Tab>
            <Tab heading='Rezerve Primite'>
                <View >
                    <Text>Rezerve Primite Pentru Masinile Publicate</Text>
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


