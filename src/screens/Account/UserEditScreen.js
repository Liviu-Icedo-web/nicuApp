import React , { useContext } from 'react';
import { View,ScrollView ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { MaterialIcons} from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

import StyleSheet from '../../styles';
import Card from '../../components/Utils/Card';
import { Context as Authcontext } from '../../context/AuthContext';
import UserForm from '../../components/User/UserForm';


const UserEditScreen = ({ navigation }) => { 
    const { state, editUser, clearErrorMessage  } = useContext(Authcontext);

    const user = state.user ;
    
    return (
        <SafeAreaView style={StyleSheet.AppStyle} forceInset={{ top: 'always' }}>  
            <ScrollView >           
                <View style={StyleSheet.CarCreateView}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                            <MaterialIcons name="arrow-back" size={30} />
                        </TouchableOpacity>
                        <UserForm
                            headerText="Editeaza Profil "
                            errorMessage={state.errorMessage}
                            initialValues={{ email: user.email, password: user.password, nick_name: user.nick_name, first_name: user.first_name, last_name: user.last_name, last_name2: user.last_name2, driving_licence_number: user.driving_licence_number }}
                            onSubmit={(email, password, nick_name, first_name, last_name, last_name2, driving_licence_number) => {
                                editUser(user.id, email, password, nick_name, first_name, last_name, last_name2, driving_licence_number, () => navigation.pop());
                            }}
                            submitButtonText="Editeaza"
                        />
                    </Card>  
                </View>            
            </ScrollView>                   
    </SafeAreaView>  
    );
};
    
export default UserEditScreen;
