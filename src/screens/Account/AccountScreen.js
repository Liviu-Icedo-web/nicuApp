import React , {useContext} from 'react';
import { View, ScrollView , TouchableOpacity, Image } from 'react-native';
import {  Divider  } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Tab, Tabs } from 'native-base';
import {Text} from 'react-native-elements';
import {  Entypo, Ionicons,AntDesign, Feather,FontAwesome,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';


import Spacer from '../../components/Utils/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';
import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';


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
    const { signout } = usersContext;

    return (
            <Tabs>
                <Tab
                    heading='Utilizator'>
                    <ScrollView >
                        <View style={StyleSheet.iconView}>
                            <TouchableOpacity style={{ margin: 5}} onPress={signout}>
                                <Text style={StyleSheet.gray}>Deconecteaza-te!!</Text>
                            </TouchableOpacity> 
                            <TouchableOpacity style={{ marginRight: 5, marginTop:5 }} onPress={signout}>
                                <AntDesign style={StyleSheet.iconColorGreen} name="logout" size={20} />  
                            </TouchableOpacity> 
                        </View> 
                        <Spacer>
                            <View style={StyleSheet.userView}>
                                <View style={{ justifyContent:'flex-end', paddingHorizontal:10 }}>
                                    <Image style={StyleSheet.imgUser} source={require("../../img/imgUser.jpg" )} /> 
                                </View>
                                <View style={{ justifyContent:'space-around'}}>
                                    <Text style={StyleSheet.titleAzul} >Salut: </Text>
                                    <Text style={StyleSheet.Text} >{user.email} </Text>
                                </View> 
                            </View> 
                        </Spacer>
                        <Spacer>
                            <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('Profile')}>
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Date Personale</Text>
                                    <Entypo style={StyleSheet.iconColor} name="user" size={30} /> 
                                </View>
                            </TouchableOpacity> 
                            <Spacer>
                                <Divider />
                            </Spacer> 
                            <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('Rental',{userId:user.id})}>
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Rezervari</Text>
                                    <MaterialCommunityIcons style={StyleSheet.iconColor} name="file-document-box" size={30} /> 
                                </View>
                            </TouchableOpacity> 
                            <Spacer>
                                <Divider />
                            </Spacer> 
                            <TouchableOpacity style={{ marginRight: 10}} >
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Documente</Text>
                                    <MaterialIcons style={StyleSheet.iconColor} name="verified-user" size={30} /> 
                                </View>
                            </TouchableOpacity> 
                            <Spacer>
                                <Divider />
                            </Spacer> 
                            <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('Message')}>
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Mesaje</Text>
                                    <MaterialIcons style={StyleSheet.iconColor} name="message" size={30} /> 
                                </View>
                            </TouchableOpacity>
                            <Spacer>
                                <Divider />
                            </Spacer>  
                            <TouchableOpacity style={{ marginRight: 10}} >
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Notificari</Text>
                                    <Ionicons style={StyleSheet.iconColor} name="ios-notifications" size={30} /> 
                                </View>
                            </TouchableOpacity>    
                        </Spacer>
                     </ScrollView> 
                </Tab>
                <Tab heading='Proprietar'>
                    <ScrollView >
                        <View style={StyleSheet.CheckView}>
                            <Text style={StyleSheet.CheckText}>Vrei sa publici o Masina pentru Inchiriere?? Aici o poti face...In fereastra ta de Porprietar !!</Text>
                            <FontAwesome style={StyleSheet.CheckIcon} name="angle-double-down" size={30} />
                        </View>  
                        <Spacer>
                            <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('CarCreate')}>
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Publica Masina</Text>
                                    <Entypo style={StyleSheet.iconColor} name="squared-plus" size={30} /> 
                                </View>
                            </TouchableOpacity>  
                            <Spacer>
                                <Divider />
                            </Spacer> 
                            <TouchableOpacity style={{ marginRight: 10}} onPress={() => navigation.navigate('CarOwn')}>
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Lista  Masini Publicate</Text>
                                    <MaterialIcons style={StyleSheet.iconColor}  name="view-list" size={30}/>
                                </View>
                            </TouchableOpacity>
                            <Spacer>
                                <Divider />
                            </Spacer>  
                            <TouchableOpacity style={{ marginRight: 10}} >
                                <View style={StyleSheet.rowView}>
                                    <Text style={StyleSheet.azul}>Solicitari Primite</Text>
                                    <Ionicons style={StyleSheet.iconColor} name="ios-notifications" size={30} /> 
                                </View>
                            </TouchableOpacity>  
                        </Spacer> 
                    </ScrollView> 
                </Tab>
            </Tabs>
     );
}        

const noUser = (navigation) =>{
    return (   
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
                <MaterialIcons name="arrow-back" size={30} />
            </TouchableOpacity>
            <View style ={{ margin: 10}}>
                <View style ={{ marginTop: 50}}>
                    <Text h1 style={StyleSheet.titleAzul}>Bine ai venit </Text>
                    <Text h3 style={StyleSheet.titleAzul}>NicuApp</Text>
                </View>    
                <View style={StyleSheet.AUTHView}>
                     <TouchableOpacity style={StyleSheet.greenView} onPress={() => navigation.navigate('Signin')}>
                        <Text style={StyleSheet.white}>LOGUEAZA-TE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleSheet.blueView} onPress={() => navigation.navigate('Signup')}>
                        <Text style={StyleSheet.white}>CREAZA PERFIL</Text>
                    </TouchableOpacity>
                </View> 
            </View>  
             
        </Spacer>        
     
    );    
} 


AccountScreen.navigationOptions = ({ navigation}) => { 
    return {         
        header: null
    }     
};



export default AccountScreen;