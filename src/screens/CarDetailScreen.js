import React, { useContext } from 'react';
import { View, Image, ScrollView, Picker ,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import Spacer from '../components/Spacer';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import StyleSheet from '../styles';
import IfSignIn from '../components/IfSignIn';



const CarDetailScreen = ({ navigation }) => {
    const { state } = useContext(CarContext);
    console.log('***state CarDetailScreen', state)
    const car = state.car.find(
        car => car.id === navigation.getParam('id')
    );
 
    return (
        <SafeAreaView style={StyleSheet.AppSecondaryStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                <Image style={StyleSheet.imageDetail} source={{uri: car.images}} />   
                <Text style={StyleSheet.title}>{car.brand}, {car.Town}</Text> 
                <View style={StyleSheet.stars}>
                    <FontAwesome style={StyleSheet.star} name="star" size={20} />
                    <FontAwesome style={StyleSheet.star} name="star" size={20} />
                    <FontAwesome style={StyleSheet.star} name="star" size={20} />
                    <FontAwesome style={StyleSheet.star} name="star-half-full" size={20} />
                    <Text style={StyleSheet.star} > (26likes) </Text>
                </View> 
                <View style={StyleSheet.detailCarView}>
                    <View>              
                        <Text style={StyleSheet.info}>Anul: {car.year}</Text>
                        <Text style={StyleSheet.info} >Usi: {car.doors}, Locuri: {car.seats}</Text>
                        <Text style={StyleSheet.info} >Cai Putere: {car.hp}</Text>
                    </View>
                    <View style={StyleSheet.detailPriceView}>
                        <Text style={StyleSheet.Text}>{car.PriceDay} Lei Ziua</Text>
                        <Text style={StyleSheet.Text}>{car.PriceHour} Lei Hora</Text>
                    </View>  
                </View>                
                <Spacer>
                    <Text style={StyleSheet.info}>Proprietar: {car.user.last_name} {car.user.first_name}</Text>
                    <Text style={StyleSheet.info}>Mail: {car.user.email}</Text>
                    <Text style={StyleSheet.info}>Publicada: {car.user.created_at}</Text>
                </Spacer> 
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



CarDetailScreen.navigationOptions = ({ navigation}) => { 
    return {
       /*// headerRight:
               // <IfSignIn>
                   // <TouchableOpacity onPress={() => navigation.navigate('CarEdit',{_id:navigation.getParam('id')})}>
                     //   <MaterialCommunityIcons style={{ padding:5 }} name="playlist-edit" size={30} />
                    //</TouchableOpacity>
               // </IfSignIn> , */          
        title: 'Rezerva',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
    }     
};
export default CarDetailScreen;