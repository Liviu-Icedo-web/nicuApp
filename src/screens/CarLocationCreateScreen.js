import React, { useContext } from 'react';
import { View,ScrollView ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as CarLocationContext } from '../context/CarLocationContext';
import StyleSheet from '../styles';
import CarLocationForm from '../components/CarLocationForm';
import Card from '../components/Card';



const CarLocationCreateScreen = ({ navigation }) => {
   const { state, addLocationCar, clearErrorMessage  } = useContext(CarLocationContext);
    const carId = navigation.getParam('carid')

    
   
   console.log("*** CarLocationCreateScreen ",navigation.getParam('carid'))
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
                            headerText="Adauga o Localizare pentru Masina "
                            errorMessage={state.errorMessage}
                            submitButtonText="Salveaza"
                            initialValues ={{carId:navigation.getParam('carid'),street: '', city: '', state: '', country: 'Romania'}}
                            onSubmit={addLocationCar}
                        />
                    </Card>  
                </View>            
            </ScrollView>                   
        </SafeAreaView>   
    );
};

CarLocationCreateScreen.navigationOptions = () => {
    return {
        header: null
    };
};

export default CarLocationCreateScreen;