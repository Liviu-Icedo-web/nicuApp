import React, { useContext } from 'react';
import { View ,ScrollView} from 'react-native';
import { SafeAreaView } from 'react-navigation';
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
                        <UserForm
                            headerText="Creaza-ti Perfil"
                            errorMessage={state.errorMessage}
                            submitButtonText="Trimite"
                            initialValues ={{ email: '', password: '', nick_name: '', first_name: '', last_name: '', last_name2: '', driving_licence_number: '' }}
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
