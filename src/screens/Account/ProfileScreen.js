import React , {useContext} from 'react';
import { View, ScrollView , TouchableOpacity} from 'react-native';
import {  Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {Text} from 'react-native-elements';
import {  Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Spacer from '../../components/Utils/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';
import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


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
            <View style={{alignItems: 'center', marginTop: 30 }}>
                <View style={StyleSheet.userView}>
                    <Entypo style={StyleSheet.iconColor} name="user" size={50} /> 
                </View> 
            </View>
            <Spacer>
            <View>
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
                <Spacer>
                    <Divider />
                </Spacer> 
                <Text style={StyleSheet.Text}>Nume:  {user.first_name} </Text>
                <Spacer>
                    <Divider />
                </Spacer> 
                <Text style={StyleSheet.Text}>Prenume:  {user.last_name}</Text>
                <Spacer>
                    <Divider />
                </Spacer> 
                <Text style={StyleSheet.Text}>Prenume2:  {user.last_name2} </Text>
                <Spacer>
                    <Divider />
                </Spacer> 
                <Text style={StyleSheet.Text}>Mail:  {user.email} </Text>
                <Spacer>
                    <Divider />
                </Spacer> 
                <Text style={StyleSheet.Text}>Numar Permis de Condus:  {user.driving_licence_number}</Text>
                <Spacer>
                    <Divider />
                </Spacer> 
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
        title: 'Date Personale',
        headerTitleStyle: {
            //fontWeight: 'bold',
           // color: '#D3D3D3',
        },
    }     
};

export default ProfileScreen;