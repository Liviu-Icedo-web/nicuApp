import React , {useContext} from 'react';
import { View, StyleSheet, ScrollView , TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Text} from 'react-native-elements';
import { FontAwesome, Entypo, EvilIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import Card from '../components/Card';
import AppStyle from '../components/AppStyle';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { state,fetchUserAuth } = useContext(AuthContext);        
    
    return (
        <AppStyle>
            <NavigationEvents onWillFocus={fetchUserAuth} />
            <ScrollView >
                <View style={styles.userView}>
                    <Spacer/>
                    <Entypo name="user" size={100} /> 
                </View> 
                <Card>
                    <TouchableOpacity style={{ alignItems: 'flex-end'}} onPress={() => navigation.navigate('Account')}>
                        <EvilIcons name="pencil" size={30} />
                    </TouchableOpacity>
                    <Spacer/>
                    <Text >Username:{state.nick_name}</Text>
                    <Spacer/>
                    <Text >Nume:{state.first_name} </Text>
                    <Spacer/>
                    <Text >Prenume:{state.last_name}</Text>
                    <Spacer/>
                    <Text >Prenume2:{state.last_name2} </Text>
                    <Spacer/>
                    <Text >Mail:{state.email} </Text>
                    <Spacer/>
                    <Text >Numar Permis de Condus: {state.driving_licence_number}</Text>
                    <Spacer/>
                </Card>     
            </ScrollView>                       
        </AppStyle>
    );
}

AccountScreen.navigationOptions = () => {
    return {    
        title: 'Profil',
        tabBarIcon: <FontAwesome name="gear" size={20} />
    };
};

const styles= StyleSheet.create({
    userView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AccountScreen;