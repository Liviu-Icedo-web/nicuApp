import React, { useContext } from 'react';
import { View,ScrollView ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as CarContext } from '../context/CarContext';
import StyleSheet from '../styles';
import CarForm from '../components/CarForm';
import Card from '../components/Card';



const CarCreateScreen = ({ navigation }) => {
   const { state, addCar, clearErrorMessage  } = useContext(CarContext);
   console.log('***state CarCreateScreen', state)
    return ( 
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>  
            <ScrollView >           
                <View style={StyleSheet.CarCreateView}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <TouchableOpacity onPress={() => navigation.navigate('CarOwn')}>
                            <MaterialIcons name="arrow-back" size={30} />
                        </TouchableOpacity>
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
        header: null
    };
};

export default CarCreateScreen;