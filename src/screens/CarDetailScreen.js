import React, { useContext } from 'react';
import { View, Image, ScrollView, Picker ,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import Spacer from '../components/Spacer';
import Card from '../components/Card';
import { FontAwesome } from '@expo/vector-icons';
import StyleSheet from '../styles';


const CarDetailScreen = ({ navigation }) => {
    const { state } = useContext(CarContext);

    const car = state.find(
        car => car.id === navigation.getParam('id')
    );
 
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                <Image style={StyleSheet.imageDetail} source={{uri: car.images}} />   
                <Text style={StyleSheet.title}>{car.brand}, {car.Town}</Text> 
                <View style={StyleSheet.stars}>
                    <FontAwesome name="star" size={20} />
                    <FontAwesome name="star" size={20} />
                    <FontAwesome name="star" size={20} />
                    <FontAwesome name="star-half-full" size={20} />
                    <Text> (26likes) </Text>
                </View> 
                <View style={StyleSheet.detailCarView}>
                    <View>              
                        <Text>Anul: {car.year}</Text>
                        <Text >Usi: {car.doors}, Locuri: {car.seats}</Text>
                        <Text >Cai Putere: {car.hp}</Text>
                    </View>
                    <View style={StyleSheet.detailPriceView}>
                        <Text style={StyleSheet.Text}>{car.PriceDay} Lei Ziua</Text>
                        <Text style={StyleSheet.Text}>{car.PriceHour} Lei Hora</Text>
                    </View>  
                </View>                
                <Card>
                    <Text h4>Proprietar: {car.user.last_name} {car.user.first_name}</Text>
                    <Text>Mail: {car.user.email}</Text>
                    <Text>Publicada: {car.user.created_at}</Text>
                </Card> 
                <View style={StyleSheet.bookDetailView}>  
                    <Text h4>Completeaza pentru rezerva :</Text> 
                    <Spacer/>
                    <Text style={StyleSheet.Text}>Alege cum vrei sa inchiriezi</Text>          
                    <Picker>  
                        <Picker.Item label = "Hora" value = "" />
                        <Picker.Item label = "Zi" value = "" />
                    </Picker> 
                    <Text style={StyleSheet.Text}>Alege cate hore/zile...</Text>             
                     <Picker>  
                        <Picker.Item label = "1" value = "" />
                        <Picker.Item label = "2" value = "" />
                    </Picker> 
                    <Text h4 style={StyleSheet.Text}>Suma totala rezerva : 250 Lei</Text> 
                    <View style={StyleSheet.bookButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
                            <Text h4 style={StyleSheet.bookDetailText}>REZERVA</Text>
                        </TouchableOpacity>
                    </View>              
                </View>     
            </ScrollView>                       
        </SafeAreaView>
    );
}



CarDetailScreen.navigationOptions = {
    title: 'Rezerva',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
};
export default CarDetailScreen;