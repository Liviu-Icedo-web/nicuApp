import React from 'react';
import { View, Text , TouchableOpacity, Image, ScrollView,FlatList } from 'react-native';
import { Entypo ,MaterialIcons,AntDesign} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as rentalContext } from '../../context/RentalContext';
import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


//Aqui tenemos que cargar las rental que hemos recibido para nuestros coche que tenemos en alquiler

const ReceivedRental =  ({ userId, rentalDate, navigation, cancel }) => {
  
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
                                <Text>{item.pickup_location}</Text>
                            </View> 
                            <View style={StyleSheet.detailView}>
                                <Text style={StyleSheet.detailTextCar}>Predare la adresa :</Text>
                                <Text>{item.dropoff_location}</Text>
                            </View> 
                            <View style={StyleSheet.rowView}>  
                                <View style={StyleSheet.GreenCardView}>
                                    <TouchableOpacity  >
                                        <Text style={StyleSheet.iconColor}>Accepta!!!</Text> 
                                    </TouchableOpacity>   
                                    <TouchableOpacity >
                                        <MaterialIcons style={StyleSheet.iconColor} name="verified-user" size={20} />                                                                     
                                    </TouchableOpacity> 
                                </View> 
                                    <View style={StyleSheet.GrayCardView}>
                                    <TouchableOpacity onPress={() => cancel(item.id)} >
                                        <Text style={StyleSheet.iconColor}>Refuza!!!</Text> 
                                    </TouchableOpacity>   
                                    <TouchableOpacity  onPress={() => cancel(item.id)}>
                                        <Entypo style={StyleSheet.iconColor} name="block" size={20} />                                                                     
                                    </TouchableOpacity> 
                                </View> 
                            </View>
                            <View style={StyleSheet.iconView}>
                                 <TouchableOpacity onPress={() => navigation.navigate('PublicProfile',{ id: item.user.id })} >  
                                     <Text style={StyleSheet.iconColor}>Vezi perfil persoana interesata!!</Text> 
                                </TouchableOpacity>                              
                                <TouchableOpacity onPress={() => navigation.navigate('PublicProfile',{ id: item.user.id })} >  
                                    <AntDesign style={StyleSheet.iconColor} name="doubleright" size={20} />  
                                </TouchableOpacity>   
                            </View>
                            <View style={StyleSheet.iconView}>
                                <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: item.car.id })} >  
                                    <Text style={StyleSheet.iconColor}>Vezi detalli masina!!!</Text> 
                                </TouchableOpacity>                              
                                <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: item.car.id })} >  
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
    date =  yyyy + "-" + mm + "-" + dd +" "+hh+":"+min+0;//min cames like 5 , 3  etc so we have to put 50 min , 30min
    return date.toString();
}

/*const getLocation = (locData, locId)=>{
   var loc = locData.filter(locData => locData.id == locId); 
   return " Loc: "+loc[0].street +" Ors: "+loc[0].city // We put loc[0] becasue we can a new array on position 0
}*/

export default ReceivedRental;