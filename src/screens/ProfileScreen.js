import React , {useContext} from 'react';
import { View, ScrollView , TouchableOpacity, Image  } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {Text} from 'react-native-elements';
import {  Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import StyleSheet from '../styles';


const ProfileScreen = ({ navigation }) => {
    const usersContext =  useContext(AuthContext); 
    const { state } = usersContext;
      
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>         
            {state.user !== undefined ? userCard(state.user,navigation,usersContext) : noUser(navigation) }                      
        </SafeAreaView>
       
    );
}

const userCard = (user,navigation,usersContext) => { 
    const { deleteUser  } = usersContext;

    return (
        <ScrollView >
            <View style={StyleSheet.userView}>
                <Spacer/>
                <Entypo style={StyleSheet.iconColor} name="user" size={100} /> 
            </View> 
            <Spacer>
            <View style={StyleSheet.userDetail}>
                <View style={StyleSheet.iconView}> 
                    <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('UserEdit')}>
                        <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={25} />
                    </TouchableOpacity> 
                    <TouchableOpacity style={{ marginRight: 10}} onPress={() => deleteUser(user.id)}>  
                        <AntDesign style={StyleSheet.iconColor} name="delete" size={20}/>     
                    </TouchableOpacity> 
                </View>
                <Spacer/>
                <Text style={StyleSheet.Text} >Username:  {user.nick_name}</Text>
                <Spacer/>
                <Text style={StyleSheet.Text}>Nume:  {user.first_name} </Text>
                <Spacer/>
                <Text style={StyleSheet.Text}>Prenume:  {user.last_name}</Text>
                <Spacer/>
                <Text style={StyleSheet.Text}>Prenume2:  {user.last_name2} </Text>
                <Spacer/>
                <Text style={StyleSheet.Text}>Mail:  {user.email} </Text>
                <Spacer/>
                <Text style={StyleSheet.Text}>Numar Permis de Condus:  {user.driving_licence_number}</Text>
                <Spacer/>
            </View> 
            </Spacer>    
        </ScrollView> 
    );
}

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

ProfileScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Actualizeaza-ti Datele',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#112f91',
        },
    }     
};

export default ProfileScreen;