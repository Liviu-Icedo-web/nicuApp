import React, { useContext } from 'react';
import { View, StyleSheet ,ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import UserForm from '../components/UserForm';
import NavLink from '../components/NavLink';
import AppStyle from '../components/AppStyle';
import Card from '../components/Card';


const SignupScreen = ({ navigation }) => {
   const { state, signUp,clearErrorMessage  } = useContext(AuthContext);
   
    return ( 
        <AppStyle>  
            <ScrollView>
                <View style={styles.container}>
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
        </AppStyle>   
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      
    }
    
});

export default SignupScreen;