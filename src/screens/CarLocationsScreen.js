import React , { useContext ,useEffect} from 'react';
import { View ,Text ,ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { AntDesign,Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { Context as CarLocationContext } from '../context/CarLocationContext';
import StyleSheet from '../styles';
import Spacer from '../components/Spacer';
import Card from '../components/Card';



const CarLocationsScreen = ({ navigation}) => {
    const { state, fetchLocationsCar, deleteCarLocation } = useContext(CarLocationContext);
    const carid = navigation.getParam('_id');

    console.log("*** CarLocationsScreen ",carid )

    useEffect(() => {
       fetchLocationsCar(carid) 
    }, []);

    return (
        <SafeAreaView  style={StyleSheet.AppStyle}  forceInset={{ top: 'always' }}>  
            <ScrollView >
                <View style={StyleSheet.DescriptionView}>
                    <Text style={StyleSheet.white}>ADAUGA O LOCALIZARE (ex: aeroport, centru, domicili etc...)</Text> 
                    <TouchableOpacity onPress={() => navigation.navigate('CarLocationCreate',{carid})}>
                        <Entypo style={StyleSheet.white} name="plus" size={30} />             
                    </TouchableOpacity>
                </View>  
                <Spacer>
                    <Text  style={StyleSheet.gray}>Urmatoarele localizari vor aparea ca optiuni de puncte de intalnire pentru Ridicare/Intoarcere MASINA .</Text>
                </Spacer>
                <FlatList 
                    data={state.locationCar}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return ( 
                            <View>                            
                                <Card >   
                                    <View style={StyleSheet.iconView}>                                     
                                        <TouchableOpacity  style={{ marginRight: 10}} onPress={() => navigation.navigate('CarLocationEdit', { id: item.id })}>
                                            <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={25} />
                                        </TouchableOpacity> 
                                        <TouchableOpacity style={{ marginRight: 10}}  onPress={() => deleteCarLocation(item.id)}>
                                            <AntDesign style={StyleSheet.iconColor} name="delete" size={20}/>     
                                        </TouchableOpacity>                                                                            
                                    </View>                     
                                    <View >
                                        <Text style={StyleSheet.azul}>Adresa: {item.street}</Text>
                                        <Text style={StyleSheet.azul}>Orasul: {item.city}</Text>
                                        <Text style={StyleSheet.azul}>Judetul: {item.state}, Tara: {item.country}</Text>
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


CarLocationsScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Localizari Publicate ',
        headerTitleStyle: {
            flex: 1,
            color: '#112f91',
            fontWeight:'bold'
        },
        
    }     
};

export default CarLocationsScreen;
 
