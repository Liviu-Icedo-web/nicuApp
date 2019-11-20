import React , {useContext} from 'react';
import { View, ScrollView , TouchableOpacity } from 'react-native';
import {  Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {Text} from 'react-native-elements';
import {  Entypo, AntDesign,MaterialIcons} from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import Card from '../components/Card';
import StyleSheet from '../styles';


const AccountScreen = ({ navigation }) => {
    const usersContext =  useContext(AuthContext); 
    const { state } = usersContext;
      
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>         
            {state.user !== undefined ? userCard(state.user,navigation,usersContext) : noUser(navigation) }                      
        </SafeAreaView>
       
    );
}

const userCard = (user,navigation,usersContext) => { 
    const { deleteUser ,signout } = usersContext;

    return (
        <ScrollView >
            <View style={StyleSheet.iconView}>
                <TouchableOpacity style={{ margin: 20}} onPress={signout}>
                        <Text style={StyleSheet.gray}>Deconecteaza-te!!</Text>
                </TouchableOpacity> 
            </View> 
            <Spacer>
                <View style={StyleSheet.userView}>
                    <View style={{ justifyContent:'flex-end', paddingHorizontal:10}}>
                        <Entypo style={StyleSheet.iconColor} name="user" size={50} /> 
                    </View>
                    <View style={{ justifyContent:'flex-end'}}>
                        <Text style={StyleSheet.azul} >Salut: </Text>
                        <Text style={StyleSheet.azul} >{user.email} </Text>
                    </View> 
                </View> 
            </Spacer> 
            <Spacer >  
                <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('Profile')}>
                    <View style={StyleSheet.rowView}>
                        <Text style={StyleSheet.azul}>Datos Personales</Text>
                        <AntDesign style={StyleSheet.iconColor} name="idcard" size={30} /> 
                    </View>
                </TouchableOpacity> 
                <Spacer>
                    <Divider />
                </Spacer> 
                <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('Rental')}>
                    <View style={StyleSheet.rowView}>
                        <Text style={StyleSheet.azul}>Rezervari</Text>
                        <AntDesign style={StyleSheet.iconColor} name="carryout" size={30} /> 
                    </View>
                </TouchableOpacity> 
                <Spacer>
                    <Divider />
                </Spacer> 
                <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('Message')}>
                    <View style={StyleSheet.rowView}>
                        <Text style={StyleSheet.azul}>Mesaje</Text>
                        <AntDesign style={StyleSheet.iconColor} name="message1" size={30} /> 
                    </View>
                </TouchableOpacity>  
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

AccountScreen.navigationOptions = () => {
    return {
        header: null
    };
};


export default AccountScreen;