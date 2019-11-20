import React, { useEffect,useContext } from 'react';
import { View, Image, ScrollView, Picker ,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import StyleSheet from '../styles';
import Rental from '../components/Rental';
import IfSignIn from '../components/IfSignIn';



const CarDetailScreen = ({ navigation }) => {
    const { state, addRental } = useContext(CarContext);
    const { fetchUserAuth  } = useContext(AuthContext);

    const car = state.car.find(
        car => car.id === navigation.getParam('id'),
    );

    const user = useEffect(() => {   
        fetchUserAuth()           
    }, []);
 
    //Aici trebuie sa se incarce masina xe am reervato ...id e pus manual in Rental OwnScreen
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                <Image style={StyleSheet.imageDetail} source={{uri: car.images}} />   
                <Spacer>
                    <Text style={StyleSheet.titleAzul}>{car.brand}, {car.town}</Text> 
                    <Text style={StyleSheet.azul}>Anul: {car.year},Usi: {car.doors}, Locuri: {car.seats},Cai Putere: {car.hp}</Text>
                    <Text style={StyleSheet.azul}>Rezervata la data  : 20/11/2019</Text>
                </Spacer>
                <Spacer>
                    <Text style={StyleSheet.azul}>Proprietar: {car.user.last_name} {car.user.first_name}</Text>
                    <Text style={StyleSheet.azul}>Mail: {car.user.email}</Text>
                </Spacer>         
                <Rental 
                    headerText="Editeaza Rezerva :"
                    errorMessage={state.errorMessage}
                    submitButtonText="Confirma noua solicitare!!!"
                    initialValues ={{  car_id: car,user_id: user, pickup_location: '', start_date: '', end_date: ''}}
                    onSubmit={addRental}
                />
            </ScrollView>                       
        </SafeAreaView>
    );
}



CarDetailScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Editeaza Rezerva',
        headerTitleStyle: {
            //fontWeight: 'bold',
            //color: '#D3D3D3',
        },
    }     
};
export default CarDetailScreen;