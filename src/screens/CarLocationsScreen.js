import React , { useContext ,useEffect} from 'react';
import { View ,Text ,ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as CarLocationContext } from '../context/CarLocationContext';
import StyleSheet from '../styles';
import Spacer from '../components/Spacer';
import Card from '../components/Card';



const CarLocationsScreen = ({ navigation}) => {
    const { state, fetchLocationsCar } = useContext(CarLocationContext);
    const carid = navigation.getParam('_id');

    console.log("*** CarLocationsScreen ",carid )

    useEffect(() => {
       fetchLocationsCar(carid) 
    }, []);

    return (
        <SafeAreaView  style={StyleSheet.AppStyle}  forceInset={{ top: 'always' }}>  
            <ScrollView >
                <View style={StyleSheet.detailPriceView}>
                    <TouchableOpacity onPress={() => navigation.navigate('CarLocationCreate',{carid})}>
                        <Spacer>
                            <Text style={StyleSheet.Text}>ADAUGA LOCALIZARE/PICK UP</Text>   
                        </Spacer>         
                    </TouchableOpacity>
                </View>   
                <FlatList 
                    data={state.locationCar}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return ( 
                            <View>                            
                                <Card >                      
                                    <TouchableOpacity onPress="" >
                                        <View >
                                            <View >
                                                <Text >Strada: {item.street}, Orasul: {item.city}</Text>
                                                <Text >Judetul: {item.state}, Tara: {item.country}</Text>
                                            </View>  
                                        </View>
                                    </TouchableOpacity>                                                                    
                                </Card>                            
                            </View>    
                        );
                    }}
                />  
           </ScrollView>    
        </SafeAreaView> 
    );
};

export default CarLocationsScreen;
 
