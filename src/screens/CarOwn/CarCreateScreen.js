import React, { useContext } from 'react';
import { View,ScrollView ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as CarContext } from '../../context/CarContext';
import StyleSheet from '../../styles';
import CarForm from '../../components/Car/CarForm';
import Card from '../../components/Utils/Card';



const CarCreateScreen = ({ navigation }) => {
   const { state, addCar, clearErrorMessage  } = useContext(CarContext);
    return ( 
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>  
            <ScrollView >           
                <View style={StyleSheet.CarCreateView}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialIcons name="arrow-back" size={30} />
                        </TouchableOpacity>
                        <CarForm
                            headerText="Adauga o Masina "
                            errorMessage={state.errorMessage}
                            submitButtonText="Salveaza"
                            initialValues ={{brand: '', year: '', hp: '', doors: '', seats: '', insurance: '', images: '', town: '', price_day: '',price_hour: ''}}
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
        header: null
    };
};

export default CarCreateScreen;