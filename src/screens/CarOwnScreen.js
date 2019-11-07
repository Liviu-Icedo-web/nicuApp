import React, {  useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign,Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { Context as CarContext } from '../context/CarContext';
import { Context as AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import StyleSheet from '../styles';


const CarOwnScreen = ({ navigation }) => { 
    const usersContext =  useContext(AuthContext); 
    const carsContext = useContext(CarContext);
    const { state } = usersContext; 
      
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>         
            {state.user !== undefined ? UserOwnCars(navigation, carsContext, state.user) : noUser(navigation) }                      
        </SafeAreaView>
       
    );
}

const UserOwnCars = (navigation,carsContext, user) => {
    const { state,  deleteCar} = carsContext;
    const ownCars = state.car.filter(car => car.user_id === user.id);

    return (   
        <ScrollView>
            <View style={StyleSheet.CheckView}>
                <Text style={StyleSheet.CheckText}>ADAUGA, VIZUALIZA/EDITEAZA sau ELIMINA Masinile Publicate Pentru Inchiriere !!!!</Text>
                <View style={StyleSheet.priceHourView}>
                    <TouchableOpacity onPress={() => navigation.navigate('CarCreate')}>
                        <Entypo style={StyleSheet.iconColor} name="plus" size={30} />         
                    </TouchableOpacity> 
                </View>  
            </View>
            {ownCars !='' ?  
                <FlatList 
                    data={ownCars}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return ( 
                            <View>                            
                                <Card >                      
                                    <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: item.id })} >
                                        <View style={StyleSheet.carView}>
                                            <View style={StyleSheet.imageView}>
                                                <Image style={StyleSheet.image} source={{ uri: item.images }} />  
                                            </View>
                                            <View style={StyleSheet.detailView}>
                                                <Text style={StyleSheet.titleCar}>{item.brand},{item.seats} locuri</Text>
                                                <Text style={StyleSheet.detailTextCar}>Din {item.year}, {item.doors} usi, {item.hp} cai putere.</Text>
                                            </View>  
                                        </View>
                                    </TouchableOpacity>      
                                    <View style={StyleSheet.iconView}>                                 
                                        <View style={StyleSheet.priceDayView}>        
                                            <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: item.id })}>
                                                <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={30} />
                                            </TouchableOpacity> 
                                        </View>                                                      
                                        <View style={StyleSheet.bookView}>    
                                            <TouchableOpacity onPress={() => deleteCar(item.id)}>
                                                <AntDesign style={StyleSheet.OwnControlsIcon} name="delete" size={20}/>     
                                            </TouchableOpacity> 
                                        </View>                                                                                
                                    </View>                                                                 
                                </Card>                            
                            </View>    
                        );
                    }}
                />
                ://Aici se termina comporbarea daca are masini sau nu
                <Text>Nu ai masini da o masina de alta</Text>
            } 
        </ScrollView>    
    );
};



const noUser = (navigation) =>{
    return (   
        <ScrollView>
            <View style={StyleSheet.NoUserView}>
                <Card>
                    <View style={StyleSheet.NoUserCardView}>                       
                        <Text style={StyleSheet.NoUserTitle}> Nu ai perfil, creaza unul </Text>
                        <Entypo style={StyleSheet.NoUserIcon} name="user" size={100} /> 
                        <View style={StyleSheet.ButtonView}>
                            <TouchableOpacity style={StyleSheet.TouchableStyle} onPress={() => navigation.navigate('Signup')}>
                                <Text style={StyleSheet.ButtonText}>Creaza</Text>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </Card>
            </View>                   
        </ScrollView>       
    );    
} 


CarOwnScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Masini Publicate',
        headerTitleStyle: {
            flex: 1,
            color: '#112f91',
            fontWeight:'bold'
        },
        
    }     
};



export default CarOwnScreen;
