import React from 'react';
import { View, Text , TouchableOpacity, Image, ScrollView,FlatList } from 'react-native';
import { Entypo ,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as rentalContext } from '../../context/RentalContext';
import Card from '../Utils/Card';
import StyleSheet from '../../styles';


//Aqui tenemos que cargar las rental que hemos recibido para nuestros coche que tenemos en alquiler

const PickUpRental =  ({ userId , rentalDate, navigation, cancel }) => {
  
    console.log('**** PickUpRental ', userId)
    console.log('**** PickUpRental data ', rentalDate)
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
                            <TouchableOpacity onPress={() => navigation.navigate('RentalEdit', { id: item.id })} >   
                                <View style={StyleSheet.carView}>
                                    <View style={StyleSheet.imageView}>
                                        <Image style={StyleSheet.image}   source={{ uri: item.car.images }} />  
                                    </View>
                                    <View style={StyleSheet.detailView}>
                                        <Text style={StyleSheet.detailTextCar}>Din data : </Text>
                                        <Text style={StyleSheet.text}>{getParsedDate(item.start_date)}</Text>
                                        <Text style={StyleSheet.detailTextCar}>Pana in data :</Text>
                                        <Text style={StyleSheet.text}>{getParsedDate(item.end_date)}</Text>
                                    </View>  
                                </View>
                                <View style={StyleSheet.detailView}>
                                    <Text style={StyleSheet.detailTextCar}>Ridicare la adresa :</Text>
                                    <Text>{getLocation(item.car_location,item.pickup_location)}</Text>
                                 </View> 
                                 <View style={StyleSheet.detailView}>
                                    <Text style={StyleSheet.detailTextCar}>Predare la adresa :</Text>
                                    <Text>{getLocation(item.car_location,item.dropoff_location)}</Text>
                                 </View>    
                            </TouchableOpacity>  
                            <View style={StyleSheet.GrayCardView}>
                                <TouchableOpacity onPress={() => cancel(item.id)} >
                                    <Text style={StyleSheet.iconColor}>Anuleaza Rezerva</Text> 
                                </TouchableOpacity>   
                                <TouchableOpacity  onPress={() => cancel(item.id)}>
                                    <Entypo style={StyleSheet.iconColor} name="block" size={20} />                                                                     
                                </TouchableOpacity> 
                            </View> 
                            <View style={StyleSheet.iconView}>
                                <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.car.id })} >  
                                    <Text style={StyleSheet.iconColor}>Vezi detalli masina!!!</Text> 
                                </TouchableOpacity>                              
                                <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.car.id })} >  
                                    <AntDesign style={StyleSheet.iconColor} name="doubleright" size={20} />  
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
    if (hh < 10) {
        hh = '0' + hh;
    }
    if (min < 10) {
        min = '0' + min;
    }
    date =  yyyy + "-" + mm + "-" + dd +" "+hh+":"+min;//min cames like 5 , 3  etc so we have to put 50 min , 30min
    return date.toString();
}

const getLocation = (locData, locId)=>{
   var loc = locData.filter(locData => locData.id == locId); 
   return " Loc: "+loc[0].street +" Ors: "+loc[0].city // We put loc[0] becasue we can a new array on position 0
}

export default PickUpRental;