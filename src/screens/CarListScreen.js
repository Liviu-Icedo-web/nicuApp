import React, { useContext,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import { Context as AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import Spacer from '../components/Spacer';
import SearchBar from '../components/SearchBar';
import { SimpleLineIcons} from '@expo/vector-icons';
import StyleSheet from '../styles';



const CarListScreen = ({ navigation }) => {
    const { state, fetchCars} = useContext(CarContext);  
    const { token ,signout } = useContext(AuthContext);  
    

    
    return ( 
        
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>  
        <ScrollView>
            {!token
                ?  <View style={StyleSheet.button}>
                        <Button type="outline" title="Creaza-ti un Perfil si Inchiriaza Masina in Localitatea Ta pentru cate ore ai Nevoie !!" onPress={() => navigation.navigate('Signup')} />
                    </View>  

                :  <Spacer>
                      <Button title="Sign Out" onPress={signout} type="outline" /> 
                    </Spacer>   
            }  

            <SearchBar />
            <NavigationEvents onWillFocus={fetchCars} />    
            <FlatList 
                data={state}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return ( 
                        <View>                            
                            <Card >                      
                                <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.id })} >
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

CarListScreen.navigationOptions = ({ navigation }) => { 
    return {
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <SimpleLineIcons style={{ margin : 15 }} name="user-follow" size={30} />
                </TouchableOpacity> ,     
        title: 'Nicu App',
        headerTitleStyle: {
            textAlign:'center',
            flex: 1
        },
    }     
};


export default CarListScreen;
