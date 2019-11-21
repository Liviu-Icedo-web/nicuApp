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
   
    console.log("*** CarLocationCreateScreen ",navigation.getParam('carid'))
    const locationCar = state.locationCar.find(
        locationCar => locationCar.id === navigation.getParam('carid')
    );

   console.log("*** CarLocationEditScreen ",navigation.getParam('carid'))

   console.log("*** CarLocationEditScreen  Location",locationCar)

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
                            initialValues ={{ id: navigation.getParam('carid'), carId: locationCar.car_id, street: locationCar.street, city: locationCar.city, state: locationCar.state, country: locationCar.country}}
                            onSubmit={( id, carId, street, city, state, country) => {
                                editLocationCar(id, carId, street, city, state, country, () => navigation.pop());
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
