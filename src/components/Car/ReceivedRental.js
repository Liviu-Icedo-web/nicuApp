import React from 'react';
import { View, Text , TouchableOpacity, Image, ScrollView,FlatList } from 'react-native';
import { Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';

import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


//Aqui tenemos que cargar las rental que hemos recibido para nuestros coche que tenemos en alquiler

const ReceivedRental =  ({ userId , rentalDate, navigation }) => {

    console.log('**** ReceivedRental ', userId)
    console.log('**** ReceivedRental data ', rentalDate)
    return  ( 

        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>               
            <ScrollView>         
            <FlatList 
                data={rentalDate}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return ( 
                    <View>                            
                        <Card >       
                            <View style={StyleSheet.iconView} >                                     
                                <TouchableOpacity  style={{ marginRight: 10}} onPress={() => navigation.navigate('RentalEdit', { id: item.id })}>
                                    <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={25} />
                                </TouchableOpacity>                                                                        
                            </View>                 
                            <TouchableOpacity onPress={() => navigation.navigate('RentalEdit', { id: 1 })} >
                                <View style={StyleSheet.carView}>
                                    <View style={StyleSheet.imageView}>
                                        <Image style={StyleSheet.image}   source={{ uri: item.car.images }} />  
                                    </View>
                                    <View style={StyleSheet.detailView}>
                                        <Text style={StyleSheet.text}>Din data : {getParsedDate(item.start_date)}</Text>
                                        <Text style={StyleSheet.text}>Pana in data : {getParsedDate(item.end_date)}</Text>
                                        <Text style={StyleSheet.detailTextCar}>Loc de Ridicare {getLocation(item.car_location,item.pickup_location)}</Text>
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
                    );
                }}
            />           
            </ScrollView>                                                                     
        </SafeAreaView>  
    );
}


const  getParsedDate = (strDate) =>{
    var date = new Date(strDate);
  
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();
    
    var hh = date.getHours();
    var min = date.getMinutes();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  yyyy + "-" + mm + "-" + dd +" "+hh+":"+min+0;//min cames like 5 , 3  etc so we have to put 50 min , 30min
    return date.toString();
}

const getLocation = (locData, locId)=>{
   var loc = locData.filter(locData => locData.id == locId); 
   return " Loc: "+loc[0].street +" Ors: "+loc[0].city+" Jud: "+loc[0].state // We put loc[0] becasue we can a new array on position 0
}

export default ReceivedRental;