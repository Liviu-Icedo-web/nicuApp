import React, { useContext } from 'react';
import { View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import {  Button, Input } from 'react-native-elements';
import { FontAwesome , Entypo} from '@expo/vector-icons';
import { Context as CarContext } from '../../context/CarContext';
import Spacer from '../../components/Utils/Spacer';
import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


const CarUserDetailScreen = ({ navigation }) => {
    const { state } = useContext(CarContext);

    const car = state.car.find(
        car => car.id === navigation.getParam('id'),
    );

     //Aici daca nu vrem sa apra toate masinile trebuie sa filtram doar pe cele care le are proprietarul masini respective
 
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                    <Spacer/>
                    <View style={StyleSheet.userView}>
                        <View style={{ justifyContent:'flex-end', paddingHorizontal:10 }}>
                            <Image style={StyleSheet.imgUser} source={require("../../img/imgUser.jpg" )} /> 
                        </View>
                        <View style={{ justifyContent:'space-around'}}>
                            <Text style={StyleSheet.titleAzul}>{car.user.last_name} {car.user.first_name}</Text>
                            <Text style={StyleSheet.Text} >Tlf: 999 999 999 </Text>
                            <Text style={StyleSheet.Text} >Mail: {car.user.email} </Text>
                        </View> 
                    </View> 
                    <Spacer/>
                    <View style={StyleSheet.stars}>
                        <FontAwesome style={StyleSheet.azul} name="star" size={20} />
                        <FontAwesome style={StyleSheet.azul} name="star" size={20} />
                        <FontAwesome style={StyleSheet.azul} name="star" size={20} />
                        <FontAwesome style={StyleSheet.azul} name="star-half-full" size={20} />
                        <Text style={StyleSheet.azul} > (26likes) </Text>
                    </View> 
                    <Spacer/>
                    <Input         
                        label="Lasa un comentario:"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Spacer>
                        <Text style={StyleSheet.Text} >Comentarii de alti utilizatori</Text>
                        <View style={StyleSheet.rowView}>
                            <View style={{ marginRight: 10}}>
                                <Entypo style={StyleSheet.iconColor} name="user" size={30} /> 
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={StyleSheet.azul}>Proprietarul f punctual , masina in buna stare , totul correct!!</Text>
                           </View>
                        </View>
                        <View style={StyleSheet.rowView}>
                            <View style={{ marginRight: 10}}>
                                <Entypo style={StyleSheet.iconColor} name="user" size={30} /> 
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={StyleSheet.azul}>Proprietarul f punctual , masina in buna stare , totul correct!!</Text>
                           </View>
                        </View>
                    </Spacer>
                    <Spacer>
                        <Text style={StyleSheet.Text} >Te-ar mai putea inteersa ?¿</Text>
                    </Spacer>
                    <FlatList 
                        data={state.car}
                        horizontal={true}
                        style={StyleSheet.flatlist} 
                        contentContainerStyle={StyleSheet.content}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            return ( 
                                    <Card>                                   
                                        <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.id })} >
                                            <View style={StyleSheet.imageView}>
                                                <Image style={StyleSheet.image} source={{ uri: item.images }} />  
                                            </View>
                                            <View style={StyleSheet.detailView}>
                                                <Text style={StyleSheet.Text}>{item.brand}</Text>
                                                <Text style={StyleSheet.gray}>{item.seats} locuri</Text>
                                                <Text style={StyleSheet.gray}>Din {item.year}, {item.doors} usi</Text>
                                                <Text style={StyleSheet.gray}>{item.hp} cai putere.</Text>
                                            </View>  
                                        </TouchableOpacity>                                                                                         
                                    </Card>   
                                );
                            }}
                    />       
            </ScrollView>                       
        </SafeAreaView>
    );
}



CarUserDetailScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Profil Proprietar',
        headerTitleStyle: {
            //fontWeight: 'bold',
           // color: '#112f91',
        },
    }     
};
export default CarUserDetailScreen;