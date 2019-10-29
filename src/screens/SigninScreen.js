import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { NavigationEvents } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Card from '../components/Card';
import StyleSheet from '../styles';

const SigninScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
   
    return ( 
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>
            <View style={StyleSheet.SignView}>
                 <Card>
                    <NavigationEvents onWillBlur={clearErrorMessage} />
                    <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
                        <MaterialIcons name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <AuthForm
                        headerText="Intra in Perfilul Tau!!"
                        errorMessage={state.errorMessage}
                        submitButtonText="Intra"
                        onSubmit={signin}
                    />
                    <NavLink
                        routeName="Signup"
                        text="Nu ai inca un Perfil ? Creaza-ti Acum!"
                    /> 
                </Card>      
            </View>        
        </SafeAreaView>
      
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};


export default SigninScreen;
