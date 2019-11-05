import React, {  useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as CarContext } from '../context/CarContext';
import { Context as AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import StyleSheet from '../styles';




const CarOwnScreen = ({ navigation }) => {
    const { state, fetchCars, deleteCar} = useContext(CarContext); 
    const { fetchUserAuth } = useContext(AuthContext);

    /* We run Fecth User to have the user data Like this is the Home page*/
    useEffect(() => {   
        fetchUserAuth();
    }, []);

    return (   
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>  
        <ScrollView>
            <NavigationEvents onWillFocus={fetchCars} /> 
            <FlatList 
                data={state.car}
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
                                            <Text>{item.Town}</Text>
                                        </View>  
                                    </View>
                                </TouchableOpacity>      
                                <View style={StyleSheet.bookSectionView}>
                                    <View style={StyleSheet.bookSectionView}>
                                        <View style={StyleSheet.priceHourView}>
                                            <Text style={StyleSheet.priceHourText}>{item.PriceHour} Lei</Text>
                                            <Text style={StyleSheet.priceHourText}>Hora</Text>
                                        </View>
                                        <View style={StyleSheet.priceDayView}>
                                            <Text style={StyleSheet.priceDayText}>{item.PriceDay} Lei</Text> 
                                            <Text style={StyleSheet.priceDayText}>Ziua</Text> 
                                        </View>                                                      
                                    </View>
                                    <View style={StyleSheet.OwnControlsView}>
                                        <TouchableOpacity onPress={() => deleteCar(item.id)}>
                                            <AntDesign style={StyleSheet.OwnControlsIcon} name="delete" size={30}/>
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


CarOwnScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
            <View style={{ alignItems:'center', padding: 10 }}>          
                <TouchableOpacity onPress={() => navigation.navigate('CarCreate')}>
                    <FontAwesome name="plus" size={20} />         
                </TouchableOpacity> 
                <Text>Adauga Masina</Text>
            </View> , 
        title: 'Lista Masini Proprii',
        tabBarIcon:
            <FontAwesome name="car" size={20} />
                         
    };
};

export default CarOwnScreen;
