import React , { useContext } from 'react';
import { View,ScrollView ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

import StyleSheet from '../styles';
import Card from '../components/Card';
import { Context as CarContext } from '../context/CarContext';
import CarForm from '../components/CarForm';


const CarEditScreen = ({ navigation }) => { 
    const { state, editCar, clearErrorMessage  } = useContext(CarContext);

    const car = state.car.find(
        car => car.id === navigation.getParam('_id')
    );

    console.log('*** CAR EDIT', car);

    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>  
        <ScrollView >           
            <View style={StyleSheet.CarCreateView}>
                <Card>
                    <NavigationEvents onWillBlur={clearErrorMessage} />
                    <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: car.id })}>
                        <MaterialIcons name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <CarForm
                        headerText="Editeaza Masina "
                        errorMessage={state.errorMessage}
                         initialValues={{ brand: car.brand, year: car.year, hp: car.hp, doors: car.doors, seats: car.seats, insurance: car.insurance , images: car.images, Town: car.Town, PriceDay: car.PriceDay, PriceHour: car.PriceHour}}
                         onSubmit={(brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour) => {
                            editCar(car.id, car.user_id ,brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour, () => navigation.pop());
                        }}
                        submitButtonText="Editeaza"
                    />
                </Card>  
            </View>            
        </ScrollView>                   
    </SafeAreaView>  
    );
};
    
export default CarEditScreen;