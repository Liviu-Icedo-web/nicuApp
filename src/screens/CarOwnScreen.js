import React, {  useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign,Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { Context as CarContext } from '../context/CarContext';
import { Context as AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import StyleSheet from '../styles';

const CarOwnScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext);  
      
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>         
            {state.user !== undefined ? UserOwnCars(navigation) : noUser(navigation) }                      
        </SafeAreaView>
       
    );
}


const UserOwnCars = (navigation) => {
    const { state, fetchCars, deleteCar} = useContext(CarContext); 

    return (   
        <ScrollView>
            <View style={StyleSheet.CheckView}>
                <Text style={StyleSheet.CheckText}>ADAUGA, VIZUALIZA/EDITEAZA sau ELIMINA Masinile Publicate Pentru Inchiriere !!!!</Text>
            </View> 
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
                                        </View>  
                                    </View>
                                </TouchableOpacity>      
                                <View style={StyleSheet.bookSectionView}> 
                                    <View style={StyleSheet.bookSectionView}>                       
                                        <View style={StyleSheet.priceHourView}>
                                            <TouchableOpacity onPress={() => navigation.navigate('CarCreate')}>
                                                <Entypo style={StyleSheet.iconColor} name="plus" size={30} />         
                                            </TouchableOpacity> 
                                        </View>  
                                        <View style={StyleSheet.priceDayView}>        
                                            <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: item.id })}>
                                                <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={30} />
                                            </TouchableOpacity> 
                                        </View>   
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
        </ScrollView>    
    );
};

const noUser = (navigation) =>{
    return (   
        <SafeAreaView  style={StyleSheet.AppSecondaryStyle} forceInset={{ top: 'always' }}>  
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
        </SafeAreaView>        
    );    
} 

CarOwnScreen.navigationOptions = ({navigation}) => {
    return {
        header: null
    };
};


export default CarOwnScreen;
