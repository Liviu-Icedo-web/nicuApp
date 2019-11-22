import React from 'react';
import { View, Text , TouchableOpacity, Image, ScrollView } from 'react-native';
import { Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';

import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


//Aqui tenemos que cargar las rental que hemos recibido para nuestros coche que tenemos en alquiler

const ReceivedRental =  ({ navigation }) => {
    return  ( 

        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>               
            <ScrollView>         
                <View>                            
                    <Card >       
                        <View style={StyleSheet.iconView} >                                     
                            <TouchableOpacity  style={{ marginRight: 10}} onPress={() => navigation.navigate('RentalEdit', { id: 1 })}>
                                <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={25} />
                            </TouchableOpacity>                                                                        
                        </View>                 
                        <TouchableOpacity onPress={() => navigation.navigate('RentalEdit', { id: 1 })} >
                            <View style={StyleSheet.carView}>
                                <View style={StyleSheet.imageView}>
                                    <Image style={StyleSheet.image}   source={require('../../img/imageCarHome.png' )}/>  
                                </View>
                                <View style={StyleSheet.detailView}>
                                    <Text style={StyleSheet.text}>Din data : ......</Text>
                                    <Text style={StyleSheet.text}>Pana in data : ......</Text>
                                    <Text style={StyleSheet.detailTextCar}>Loc de Ridicare .....</Text>
                                    <Text style={StyleSheet.detailTextCar}>Hora.....</Text>
                                </View>  
                            </View>
                        </TouchableOpacity>  
                            <View style={StyleSheet.GrayCardView}>
                                <TouchableOpacity onPress="">
                                    <Text style={StyleSheet.iconColor}>Anuleaza Rezerva</Text> 
                                </TouchableOpacity>   
                                <TouchableOpacity onPress="">
                                    <Entypo style={StyleSheet.iconColor} name="block" size={20} />                                                                     
                                </TouchableOpacity> 
                            </View>                                                                 
                    </Card>                            
                </View>         
            </ScrollView>                                                                     
        </SafeAreaView>  
    );
}


export default ReceivedRental;