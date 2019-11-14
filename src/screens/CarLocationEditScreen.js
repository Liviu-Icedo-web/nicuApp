import React, { useContext } from 'react';
import { View,ScrollView ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as CarLocationContext } from '../context/CarLocationContext';
import StyleSheet from '../styles';
import CarLocationForm from '../components/CarLocationForm';
import Card from '../components/Card';



const CarLocationEditScreen = ({ navigation }) => {
    const { state, editLocationCar, clearErrorMessage  } = useContext(CarLocationContext);
    const carId = navigation.getParam('carid')

    
   
    console.log("*** CarLocationCreateScreen ",navigation.getParam('carid'))
    const locationCar = state.locationCar.find(
        locationCar => locationCar.id === navigation.getParam('_id')
    );

   console.log("*** CarLocationEditScreen ",navigation.getParam('locationCar'))

    return ( 
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>  
            <ScrollView >           
                <View style={StyleSheet.CarCreateView}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <TouchableOpacity onPress={() => navigation.navigate('CarLocations')}>
                            <MaterialIcons name="arrow-back" size={30} />
                        </TouchableOpacity>
                        <CarLocationForm
                            headerText="Editeaza Localizare"
                            errorMessage={state.errorMessage}
                            submitButtonText="Editeaza"
                            initialValues ={{ carId:navigation.getParam('carid'),street: locationCar.street, city: locationCar.city, state: locationCar.state, country: locationCar.country}}
                            onSubmit={( carId, street, city, state, country) => {
                                editLocationCar(locationCar.id, carId, street, city, state, country, () => navigation.pop());
                            }}
                        />
                    </Card>  
                </View>            
            </ScrollView>                   
        </SafeAreaView>   
    );
};

CarLocationEditScreen.navigationOptions = () => {
    return {
        header: null
    };
};

export default CarLocationEditScreen;
