import React, {  useContext,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign,Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import DatePicker from 'react-native-datepicker';

import { Context as CarContext } from '../../context/CarContext';
import { Context as AuthContext } from '../../context/AuthContext';

import Card from '../../components/Utils/Card';
import StyleSheet from '../../styles';



const CarOwnScreen = ({ navigation }) => { 
    const usersContext =  useContext(AuthContext); 
    const carsContext = useContext(CarContext);
    
    
    const { state } = usersContext;
    
    return (
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>         
            {state.user !== undefined ? UserOwnCars(navigation, carsContext, state.user) : noUser(navigation) }
            
        </SafeAreaView>
       
    );
}

const UserOwnCars = (navigation,carsContext, user) => {
    
    const { state,getUserCars, deleteCar, deleteBlock} = carsContext;
    
    useEffect(() => {   
        getUserCars(user.id);
    }, []);
    
    const ownCars =  state.car_user;
    console.log('*** UserOwncars',ownCars)
    
    
    return (  
        <ScrollView>
            <View style={StyleSheet.DescriptionView}>
                <Text style={StyleSheet.white}>ADAUGA, VIZUALIZEAZA/EDITEAZA, BLOQUEAZA sau ELIMINA Masinile Publicate !!!!</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('CarCreate')}>
                    <Entypo style={StyleSheet.white} name="plus" size={30} />         
                </TouchableOpacity> 
            </View>          
            {ownCars !='' ?  
                <FlatList 
                    data={ownCars}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return ( 
                            <View>                            
                                <Card >       
                                    <View style={StyleSheet.iconView}>                                     
                                        <TouchableOpacity  style={{ marginRight: 10}} onPress={() => navigation.navigate('CarOwnDetail', { id: item.id })}>
                                            <MaterialCommunityIcons style={StyleSheet.iconColor} name="playlist-edit" size={25} />
                                        </TouchableOpacity> 
                                        <TouchableOpacity style={{ marginRight: 10}}  onPress={() => deleteCar(item.id)}>
                                            <AntDesign style={StyleSheet.iconColor} name="delete" size={20}/>     
                                        </TouchableOpacity>                                                                            
                                    </View>                 
                                    <TouchableOpacity onPress={() => navigation.navigate('CarOwnDetail', { id: item.id })} >
                                        <View style={StyleSheet.carView}>
                                            <View style={StyleSheet.imageView}>
                                                <Image style={StyleSheet.image} source={{ uri: item.images }} />  
                                            </View>
                                            <View style={StyleSheet.detailView}>
                                                <Text style={StyleSheet.titleCar}>{item.brand},{item.seats} locuri</Text>
                                                <Text style={StyleSheet.detailTextCar}>Din {item.year}, {item.doors} usi, {item.hp} cai putere.</Text>
                                            </View>  
                                        </View>
                                    </TouchableOpacity>  
                                       
                                
                                    <View style={StyleSheet.GrayCardView}>
                                        <TouchableOpacity onPress={() => navigation.navigate('CarBlock',{car: item})}>
                                             <Text style={StyleSheet.iconColor}>Bloqueza Masina</Text> 
                                        </TouchableOpacity>   
                                        <TouchableOpacity >
                                                <Entypo style={StyleSheet.iconColor} name="block" size={20} />                                                                     
                                        </TouchableOpacity>                                     
                                    </View> 
                                   
                                    <View>
                                    {/** ESTE BLOQUE SACALO A UNA FUNCION */
                                     }  
                                     {item.car_blocked !='' ? <Text>Masina blocata:</Text> :<Text></Text>}
                                            {item.car_blocked.map((blocked, key) =>
                                                <View style={StyleSheet.GrayCardView} key={key}>
                                                    <Collapse style={StyleSheet.GreenCardViewBlock}>
                                                        <CollapseHeader>
                                                            <View style={StyleSheet.rowView}>
                                                                <Text key={key} style={StyleSheet.iconColor}>{getParsedDate(blocked.start_date)} -> {getParsedDate(blocked.end_date)}</Text>
                                                                <AntDesign style={StyleSheet.iconColor} name="down" size={10} />  
                                                                                                                        
                                                            </View>
                                                        </CollapseHeader>
                                                        <CollapseBody>
                                                        <View style={StyleSheet.SombraCardView}>
                                                            <View style={StyleSheet.rowView}>
                                                                <View >
                                                                    <Text style={{ color : 'gray', top: 10}}>Start:</Text>
                                                                </View>
                                                                <DatePicker
                                                                    date={blocked.start_date}
                                                                    iconSource={require('../../img/date.png' )}
                                                                    onDateChange={blocked.start_date}
                                                                    mode="datetime"
                                                                    confirmBtnText="Confirm"
                                                                    cancelBtnText="Cancel"
                                                                    minuteInterval={30}
                                                                    customStyles={{
                                                                        dateIcon: {
                                                                            position: 'absolute',
                                                                            left: -12,
                                                                            top: 5,
                                                                            marginLeft: -12
                                                                        },
                                                                    }}
                                                                />
                                                            </View>
                                                            <View  style={StyleSheet.rowView}>
                                                                <View>
                                                                    <Text style={{ color : 'gray', top: 10}}>Stop:</Text>
                                                                </View>
                                                                <DatePicker 
                                                                    date={blocked.end_date}
                                                                    iconSource={require('../../img/date.png' )}
                                                                    onDateChange={blocked.end_date}
                                                                    mode="datetime"
                                                                    confirmBtnText="Confirm"
                                                                    cancelBtnText="Cancel"
                                                                    minuteInterval={30}
                                                                    customStyles={{
                                                                        dateIcon: {
                                                                            position: 'absolute',
                                                                            left: -12,
                                                                            top: 5,
                                                                            marginLeft: -12
                                                                        },
                                                                    }}
                                                                />
                                                            </View>
                                                        </View>
                                                        
                                                        <View style={StyleSheet.rowView}>
                                                            <Button
                                                                title={'Modifica'}
                                                                onPress={() =>''}
                                                                type="outline"
                                                            />
                                                            <Button
                                                                title={'Elimina'}
                                                                onPress={() =>deleteBlock(blocked.id) }
                                                                type="outline"
                                                            />
                                                        </View>
                                                        
                                                        </CollapseBody>
                                                    </Collapse> 
                                                </View>
                                                )
                                            }
                                    </View>                                                                
                                </Card>                            
                            </View>    
                        );
                    }}
                />
                ://Aici se termina comporbarea daca are masini sau nu
                <Text>Nu ai masini da o masina de alta</Text>
            } 
        </ScrollView>    
    );
};



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


CarOwnScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Masini Publicate',
        headerTitleStyle: {
            flex: 1,
           // color: '#D3D3D3',  
        },
        
    }     
};

const  getParsedDate = (strDate) =>{
    var date = new Date(strDate);
  
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    var months = ['ian','feb','mart','apr','iun','iul','aug','sept','oct','nov','dec'];
    
    var hh = date.getHours();
    var min = date.getMinutes();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm != '') {
        mm = months[mm];
    }
    if (hh < 10) {
        hh = '0' + hh;
    }
    if (min < 10) {
        min = '0' + min;
    }

    date =  dd + " " + mm + " " +yyyy +" "+hh+":"+min;
    
    return date.toString();
}
const checkData = (initialValues, start_date,end_date,pickUpLocation, dropOffLocation,onSubmit)=>{
    var alerta =''; 
    if (start_date == ''){
        alerta ='Data START'+'\n';
    }
    if (end_date == ''){
        alerta = alerta+'Data STOP'+'\n';
    }

    if(alerta ==''){
        return  onSubmit(initialValues.car_id, initialValues.user_id, initialValues.user_owner_id ,start_date, end_date, pickUpLocation, dropOffLocation)     
    }else{
        Alert.alert('Nu ai selectionat',alerta)
    }
    
}

export default CarOwnScreen;
