import React , {useContext} from 'react';
import { View, ScrollView , TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Text} from 'react-native-elements';
import { FontAwesome, Entypo, EvilIcons,SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import StyleSheet from '../styles';


const AccountScreen = ({ navigation }) => {
    const { state } = useContext(AuthContext);  
      
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>         
            {state.user !== undefined ? userCard(state.user,navigation) : noUser(navigation) }                      
        </SafeAreaView>
       
    );
}

const userCard = (user,navigation) => {
    const {deleteUser } = useContext(AuthContext);  
    return (
        <ScrollView >
            <View style={StyleSheet.userView}>
                <Spacer/>
                <Entypo style={StyleSheet.iconColor} name="user" size={100} /> 
            </View> 
            <Spacer>
            <View style={StyleSheet.userDetail}>
                <View style={StyleSheet.iconView}>
                    <TouchableOpacity  onPress={() => navigation.navigate('UserEdit')}>
                        <EvilIcons style={StyleSheet.iconColor} name="pencil" size={50} />          
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deleteUser(user.id)}>
                        <AntDesign style={StyleSheet.iconColor} name="delete" size={30}/>
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
        <View style={StyleSheet.userDetail}>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={StyleSheet.Text}>Nu ai user, creaza unul </Text>
                <SimpleLineIcons style={{ margin : 15 }} name="user-follow" size={30} />
            </TouchableOpacity> 
        </View>        
    );    
} 

AccountScreen.navigationOptions = () => {
    return {    
        title: 'Profil',
        tabBarIcon: <FontAwesome name="gear" size={25} />
    };
};

export default AccountScreen;