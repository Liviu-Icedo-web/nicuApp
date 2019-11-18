import React, { useContext } from 'react';
import { View, Image, ScrollView, Picker ,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import Spacer from '../components/Spacer';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import StyleSheet from '../styles';
import Rental from '../components/Rental';
import IfSignIn from '../components/IfSignIn';



const CarDetailScreen = ({ navigation }) => {
    const { state, addRental } = useContext(CarContext);

    const car = state.car.find(
        car => car.id === navigation.getParam('id'),
    );

    const user = state.user
 
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
                    <Text style={StyleSheet.azul}>Proprietar: {car.user.last_name} {car.user.first_name}</Text>
                    <Text style={StyleSheet.azul}>Mail: {car.user.email}</Text>
                    <Text style={StyleSheet.azul}>Publicada: {car.user.created_at}</Text>
                </Spacer> 
                <Rental 
                    headerText="Inchiriaza Acum :"
                    errorMessage={state.errorMessage}
                    submitButtonText="Confirma Rezerva!!!"
                    initialValues ={{  car_id: car, user_id: user, pickup_location: '', start_date: '', end_date: ''}}
                    onSubmit={addRental}
                />
            </ScrollView>                       
        </SafeAreaView>
    );
}



CarDetailScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Rezerva',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }     
};
export default CarDetailScreen;