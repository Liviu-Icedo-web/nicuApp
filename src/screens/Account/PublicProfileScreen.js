import React, { useContext,useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import {  Button, Input } from 'react-native-elements';
import { FontAwesome , Entypo} from '@expo/vector-icons';
import { Context as AuthContext } from '../../context/AuthContext';
import Spacer from '../../components/Utils/Spacer';
import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';



const PublicProfileScreen = ({ navigation}) => {
    const { state,fetchUser } = useContext(AuthContext); //WE creat user_client wich will be in the STATE
    const userId = navigation.getParam('user_id');
   
    useEffect(()=>{
        fetchUser(userId)
    },[])
   
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>
            <ScrollView>
                    <Spacer/>
                    <View style={StyleSheet.userView}>
                        <View style={{ justifyContent:'flex-end', paddingHorizontal:10 }}>
                            <Image style={StyleSheet.imgUser} source={require("../../img/imgUser.jpg" )} /> 
                        </View>
                        <View style={{ justifyContent:'space-around'}}>
                            <Text style={StyleSheet.titleAzul}>
                                {state.user_client != undefined ? state.user_client.last_name :' '}
                                {state.user_client != undefined ? ' '+state.user_client.first_name :' '}                            
                            </Text>
                            <Text style={StyleSheet.Text} >Tlf: 999 999 999 </Text>
                            <Text style={StyleSheet.Text} >Mail: {state.user_client != undefined ? state.user_client.email :''}  </Text>
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
                        <Text style={StyleSheet.Text} >Comentarii de alti proprietari:</Text>
                        <View style={StyleSheet.rowView}>
                            <View style={{ marginRight: 10}}>
                                <Entypo style={StyleSheet.iconColor} name="user" size={30} /> 
                            </View>
                           <View style={{flex: 1}}>
                                <Text style={StyleSheet.azul}>Interesat f punctual , masina in buna stare la intoarcere , totul correct!!</Text>
                           </View>
                        </View>
                        <View style={StyleSheet.rowView}>
                            <View style={{ marginRight: 10}}>
                                <Entypo style={StyleSheet.iconColor} name="user" size={30} /> 
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={StyleSheet.azul}>Interesat f punctual , masina in buna stare la intoarcere , totul correct!!</Text>
                           </View>
                        </View>
                    </Spacer>      
            </ScrollView>                       
        </SafeAreaView>
    );
}



PublicProfileScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Profil Interesat',
        headerTitleStyle: {
            //fontWeight: 'bold',
           // color: '#112f91',
        },
    }     
};
export default PublicProfileScreen;