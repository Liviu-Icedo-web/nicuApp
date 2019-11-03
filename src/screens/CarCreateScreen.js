import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as CarContext } from '../context/CarContext';
import StyleSheet from '../styles';
import CarForm from '../components/CarForm';
import Card from '../components/Card';



const CarCreateScreen = () => {
   const { state, addCar, clearErrorMessage  } = useContext(CarContext);
   
    return ( 
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>  
            <ScrollView >           
                <View style={StyleSheet.CarCreateView}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <CarForm
                            headerText="Adauga o Masina "
                            errorMessage={state.errorMessage}
                            submitButtonText="Salveaza"
                            initialValues ={{brand: '', year: '', hp: '', doors: '', seats: '', insurance: '', images: '', Town: '', PriceDay: '',PriceHour: ''}}
                            onSubmit={addCar}
                        />
                    </Card>  
                </View>            
            </ScrollView>                   
        </SafeAreaView>   
    );
};

CarCreateScreen.navigationOptions = () => {
    return {
        title: 'Adauga Masina',
        tabBarIcon:
            <FontAwesome name="plus" size={20} />
                         
    };
};

export default CarCreateScreen;