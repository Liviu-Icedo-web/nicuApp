import React, { useContext } from 'react';
import { View ,ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import UserForm from '../components/UserForm';
import NavLink from '../components/NavLink';
import Card from '../components/Card';
import StyleSheet from '../styles';


const SignupScreen = ({ navigation }) => {
   const { state, signUp,clearErrorMessage  } = useContext(AuthContext);
   
    return ( 
        <SafeAreaView style={StyleSheet.AppStyle}  forceInset={{ top: 'always' }} >
            <ScrollView>
                <View style={StyleSheet.SignView}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
                            <MaterialIcons name="arrow-back" size={30} />
                        </TouchableOpacity>
                        <UserForm
                            headerText="Creaza-ti Perfil"
                            errorMessage={state.errorMessage}
                            submitButtonText="Trimite"
                            onSubmit={signUp}
                        />
                        <NavLink
                            routeName="Signin"
                            text="Deja detii un Perfil ? Intra in Perfil Tau!"
                        /> 
                    </Card>  
                </View>        
            </ScrollView>             
        </SafeAreaView>   
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

export default SignupScreen;