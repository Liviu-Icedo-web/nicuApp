import React, { useContext } from 'react';
import { View, Image, ScrollView,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import { Context as CarContext } from '../../context/CarContext';
import Spacer from '../../components/Utils/Spacer';
import StyleSheet from '../../styles';
import IfSignIn from '../../components/Authentification/IfSignIn';




const CarDetailScreen = ({ navigation }) => {
    const { state } = useContext(CarContext);
        
    const car = state.car.find(
        car => car.id === navigation.getParam('id')
    );

 
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                <Image style={StyleSheet.imageDetail} source={{uri: car.images}} /> 
                <View style={StyleSheet.rowView}>
                    <Text style={StyleSheet.titleAzul}>{car.brand},{car.town}</Text> 
                    <View style={StyleSheet.AzulCardView}>
                        <Text style={StyleSheet.white}>{car.price_day} Lei Ziua</Text>
                        <Text style={StyleSheet.white}>{car.price_hour} Lei Hora</Text>
                    </View>  
                </View> 
                <Spacer>              
                    <Text style={StyleSheet.azul}>Anul: {car.year}</Text>
                    <Text style={StyleSheet.azul} >Usi: {car.doors}, Locuri: {car.seats}</Text>
                    <Text style={StyleSheet.azul} >Cai Putere: {car.hp}</Text>
                    <Text style={StyleSheet.azul} >Combustibil: Diesel </Text>
                    <Text style={StyleSheet.azul} >Tip de Schimb: Automatic </Text>
                    <Text style={StyleSheet.azul} >Categorie Masina: Jeep </Text>
                </Spacer>       
                <View style={StyleSheet.GrayCardView}>
                    <TouchableOpacity onPress={() => navigation.navigate('CarLocations',{_id:navigation.getParam('id')})}>
                        <Text style={StyleSheet.azul}>Verifica punctele de pickUp/Return del coche!!! </Text>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => navigation.navigate('CarLocations',{_id:navigation.getParam('id')})}>
                       <Octicons style={StyleSheet.azul} name="unverified" size={20}/>
                    </TouchableOpacity> 

                </View>        
            </ScrollView>                       
        </SafeAreaView>
    );
}



CarDetailScreen.navigationOptions = ({ navigation}) => { 
    return {
        headerRight:
                <IfSignIn>
                    <TouchableOpacity onPress={() => navigation.navigate('CarEdit',{_id:navigation.getParam('id')})}>
                        <MaterialCommunityIcons style={{ padding:5 }} name="playlist-edit" size={30} />
                    </TouchableOpacity>
                </IfSignIn> ,           
        title: 'Editeaza Masina',
        headerTitleStyle: {
            //color: '#D3D3D3',
        },
    }     
};
export default CarDetailScreen;