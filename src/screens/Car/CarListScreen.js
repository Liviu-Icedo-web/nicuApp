import React, {  useContext , useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { SimpleLineIcons } from '@expo/vector-icons';

import { Context as CarContext } from '../../context/CarContext';
import { Context as AuthContext} from '../../context/AuthContext';
import Card from '../../components/Utils/Card';
import SearchBar from '../../components/Car/SearchBar';
import StyleSheet from '../../styles';
import CheckLogin from '../../components/Authentification/CheckLogin';
import IfSignOut from '../../components/Authentification/IfSignOut';




const CarListScreen = ({ navigation }) => {
    const { state, fetchCars} = useContext(CarContext); 
    const { fetchUserAuth } = useContext(AuthContext);
    /* We run Fecth User to have the user data Like this is the Home page*/
        useEffect(() => {   
            fetchUserAuth();
        }, []);
    
   
    return (         
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>  
        <ScrollView >
            <CheckLogin />
            <SearchBar />
            <NavigationEvents onWillFocus={fetchCars} />    
            <FlatList 
                data={state.car}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return ( 
                        <View>                             
                            <Card>                      
                                <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.id })} >
                                    <View style={StyleSheet.carView}>
                                        <View style={StyleSheet.imageView}>
                                            <Image style={StyleSheet.image} source={{ uri: item.images }} />  
                                        </View>
                                        <View style={StyleSheet.detailView}>
                                            <Text style={StyleSheet.titleCar}>{item.brand},{item.seats} locuri</Text>
                                            <Text style={StyleSheet.detailTextCar}>Din {item.year}, {item.doors} usi, {item.hp} cai putere.</Text>
                                            <Text>{item.town}</Text>
                                        </View>  
                                    </View>
                                </TouchableOpacity>      
                                <View style={StyleSheet.bookSectionView}>
                                    <View style={StyleSheet.bookSectionView}>
                                        <View style={StyleSheet.priceHourView}>
                                            <Text style={StyleSheet.priceHourText}>{item.price_hour} Lei</Text>
                                            <Text style={StyleSheet.priceHourText}>Hora</Text>
                                        </View>
                                        <View style={StyleSheet.priceDayView}>
                                            <Text style={StyleSheet.priceDayText}>{item.price_day} Lei</Text> 
                                            <Text style={StyleSheet.priceDayText}>Ziua</Text> 
                                        </View>                                                      
                                    </View>
                                    <View style={StyleSheet.bookView}>
                                        <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.id })}>
                                            <Text style={StyleSheet.bookText}>Inchiriaza</Text>
                                            <Text style={StyleSheet.bookText}>ACUM!!!</Text>
                                        </TouchableOpacity>
                                    </View>                                 
                                </View>                                                                 
                            </Card>                            
                        </View>    
                    );
                }}
            /> 
        </ScrollView>    
        </SafeAreaView> 
    );
};

CarListScreen.navigationOptions = ({ navigation}) => { 

    return {
        headerRight:
                <IfSignOut>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <SimpleLineIcons style={{ margin : 15,color: '#112f91' }} name="user-follow" size={30} />
                    </TouchableOpacity>  
                </IfSignOut>  ,           
        title: 'NicuApp',
        headerTitleStyle: {
           // fontWeight: 'bold',
            color: '#112f91'
        },
    };    
};


export default CarListScreen;
