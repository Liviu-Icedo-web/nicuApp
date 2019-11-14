
import React, { useContext } from 'react';
import { View, Image, ScrollView, Picker ,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import Spacer from '../components/Spacer';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import StyleSheet from '../styles';

const Rental = ({ navigation }) => {
    return (

        <View style={StyleSheet.bookDetailView}>  
            <Text h4>Completeaza pentru rezerva :</Text> 
            <Spacer/>
            <Text style={StyleSheet.Text}>Alege cum vrei sa inchiriezi</Text>          
            <Picker>  
                <Picker.Item label = "Hora" value = "" />
                <Picker.Item label = "Zi" value = "" />
            </Picker> 
            <Text style={StyleSheet.Text}>Alege cate hore/zile...</Text>             
            <Picker>  
                <Picker.Item label = "1" value = "" />
                <Picker.Item label = "2" value = "" />
            </Picker> 
            <Text h4 style={StyleSheet.Text}>Suma totala rezerva : 250 Lei</Text> 
            <View style={StyleSheet.bookButton}>
                <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
                    <Text h4 style={StyleSheet.bookDetailText}>REZERVA</Text>
                </TouchableOpacity>
            </View>   
          
        </View>  
    );
};

export default Rental;