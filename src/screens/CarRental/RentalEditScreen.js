import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation';
import {  View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { Context as RentalContext } from '../../context/RentalContext';
import StyleSheet from '../../styles';
import Rental from '../../components/Car/Rental';


const RentalEditScreen = ({ navigation }) => {
    const { state, editRental,clearErrorMessage  } = useContext(RentalContext);
    
    const rental = state.rental.find(
        rental => rental.id === navigation.getParam('id')
    );

    console.log('*** RentalEditScreen',rental) 

    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                <View>
                    <NavigationEvents onWillBlur={clearErrorMessage} />
                    <Rental 
                            headerText="Editeaza Acum :"
                            errorMessage={state.errorMessage}
                            submitButtonText="Confirma Noua Rezerva!!!"
                            initialValues ={{ 
                                car_id: typeof (rental.car) != 'undefined' ?rental.car.id:rental.Car_id, 
                                user_id: rental.user_id,
                                user_owner_id:rental.user_owner_id,
                                start_date: rental.start_date, 
                                end_date: rental.end_date,
                                car_location: rental.car_location,  
                                pickup_location: rental.pickup_location, 
                                dropoff_location: rental.dropoff_location
                            }}
                            onSubmit={(car_id, user_id,user_owner_id,start_date, end_date, pickup_location, dropoff_location) => {
                                editRental(rental.id, car_id, user_id, user_owner_id,start_date, end_date, pickup_location, dropoff_location, () => navigation.pop());
                            }}
                    />
                </View>
            </ScrollView>                       
        </SafeAreaView>
    );
}


RentalEditScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Editeaza Rezerva',
        headerTitleStyle: {
            //fontWeight: 'bold',
            //color: '#D3D3D3',
        },
    }     
};
export default RentalEditScreen;
