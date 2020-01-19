import React, { useContext } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { FontAwesome , AntDesign} from '@expo/vector-icons';
import {  Divider  } from 'react-native-elements';

import { Context as CarContext } from '../../context/CarContext';
import { Context as AuthContext } from '../../context/AuthContext';
import Spacer from '../../components/Utils/Spacer';
import StyleSheet from '../../styles';
import RentalBlock from '../../components/Car/RentalBlock';


const CarBlockScreen = ({ navigation }) => {
    const { state, addRental } = useContext(CarContext);
    
    const user_session = useContext(AuthContext);

    const car = navigation.getParam('car')

    console.log('***  CarBlockScreen', car)

    // const car = state.car.find(
    //     car => car.id === navigation.getParam('id'),
    // );
 
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                <Image style={StyleSheet.imageDetail} source={{uri: car.images}} />   
                <Spacer>
                    <Text style={StyleSheet.titleAzul}>{car.brand}, {car.town}</Text> 
                </Spacer>
                <View style={StyleSheet.stars}>
                    <FontAwesome style={StyleSheet.azul} name="star" size={20} />
                    <FontAwesome style={StyleSheet.azul} name="star" size={20} />
                    <FontAwesome style={StyleSheet.azul} name="star" size={20} />
                    <FontAwesome style={StyleSheet.azul} name="star-half-full" size={20} />
                    <Text style={StyleSheet.azul} > (26likes) </Text>
                </View> 
                <View style={StyleSheet.detailCarView}>
                    <View>              
                        <Text style={StyleSheet.azul}>Anul: {car.year}</Text>
                        <Text style={StyleSheet.azul} >Usi: {car.doors}, Locuri: {car.seats}</Text>
                        <Text style={StyleSheet.azul} >Cai Putere: {car.hp}</Text>
                    </View>
                    <View style={StyleSheet.detailPriceView}>
                        <Text style={StyleSheet.Text}>{car.price_day} Lei Ziua</Text>
                        <Text style={StyleSheet.Text}>{car.price_hour} Lei Hora</Text>
                    </View>  
                </View> 
                <Spacer>
                    <Text style={StyleSheet.azul}>Proprietar: </Text>
                    <Text style={StyleSheet.azul}>{car.user.last_name} {car.user.first_name}</Text>
                    <View style={StyleSheet.iconView}>
                        <TouchableOpacity onPress={() => navigation.navigate('CarUserDetail', { id: car.id })} >  
                            <Text style={StyleSheet.iconColor}>Vezi perfil!!</Text> 
                        </TouchableOpacity>                              
                        <TouchableOpacity onPress={() => navigation.navigate('CarUserDetail', { id: car.id })} >  
                            <AntDesign style={StyleSheet.iconColor} name="doubleright" size={20} />  
                        </TouchableOpacity>   
                    </View>  
                </Spacer>            
                <RentalBlock 
                    headerText="Inchiriaza Acum!!!"
                    errorMessage={state.errorMessage}
                    submitButtonText="Confirma Rezerva!!!"
                    initialValues ={{  
                        car_id: car.id, 
                        user_id: user_session.state.user.id,
                        user_owner_id: car.user_id,
                        start_date: '', 
                        end_date: '', 
                        car_location:car.car_location,
                        pickup_location: '', 
                        dropoff_location: ''
                    }}
                    onSubmit={addRental}
                />
            </ScrollView>                       
        </SafeAreaView>
    );
}



CarBlockScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Rezerva',
        headerTitleStyle: {
            //fontWeight: 'bold',
           // color: '#112f91',
        },
    }     
};
export default CarBlockScreen;