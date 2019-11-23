import React, {  useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign,Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';

import { Context as CarContext } from '../../context/CarContext';
import { Context as AuthContext } from '../../context/AuthContext';
import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


const CarOwnScreen = ({ navigation }) => { 
    const usersContext =  useContext(AuthContext); 
    const carsContext = useContext(CarContext);
    const { state } = usersContext; 
      
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>         
            {state.user !== undefined ? UserOwnCars(navigation, carsContext, state.user) : noUser(navigation) }                      
        </SafeAreaView>
       
    );
}

const UserOwnCars = (navigation,carsContext, user) => {
    const { state,  deleteCar} = carsContext;
    const ownCars = state.car.filter(car => car.user_id === user.id);

    return (   
        <ScrollView>
            <View style={StyleSheet.DescriptionView}>
                <Text style={StyleSheet.white}>ADAUGA, VIZUALIZEAZA/EDITEAZA, BLOQUEAZA sau ELIMINA Masinile Publicate !!!!</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('CarCreate')}>
                    <Entypo style={StyleSheet.white} name="plus" size={30} />         
                </TouchableOpacity> 
            </View>
            {ownCars !='' ?  
                <FlatList 
                    data={ownCars}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return ( 
                            <View>                            
                                <Card >       
                                    <View style={StyleSheet.iconView}>                                     
                                        <TouchableOpacity  style={{ marginRight: 10}} onPress={() => navigation.navigate('CarOwnDetail', { id: item.id })}>
                                            <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={25} />
                                        </TouchableOpacity> 
                                        <TouchableOpacity style={{ marginRight: 10}}  onPress={() => deleteCar(item.id)}>
                                            <AntDesign style={StyleSheet.iconColor} name="delete" size={20}/>     
                                        </TouchableOpacity>                                                                            
                                    </View>                 
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
                                       
                                
                                    <View style={StyleSheet.GrayCardView}>
                                        <TouchableOpacity >
                                             <Text style={StyleSheet.iconColor}>Bloqueza Masina</Text> 
                                        </TouchableOpacity>   
                                        <TouchableOpacity >
                                                <Entypo style={StyleSheet.iconColor} name="block" size={20} />                                                                     
                                        </TouchableOpacity> 
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
           // color: '#D3D3D3',  
        },
        
    }     
};



export default CarOwnScreen;