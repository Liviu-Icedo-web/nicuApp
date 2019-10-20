import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import AppStyle from '../components/AppStyle';
import Card from '../components/Card';

const SigninScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
   
    return ( 
        <AppStyle>
            <View style={styles.container}>
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
        </AppStyle>
      
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SigninScreen;
