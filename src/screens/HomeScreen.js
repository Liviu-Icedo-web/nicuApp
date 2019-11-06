import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Card from '../components/Card';
import Spacer from '../components/Spacer';
import StyleSheet from '../styles';


const HomeScreen = ({ navigation }) => {
    return (       
        <SafeAreaView  style={StyleSheet.AppSecondaryStyle} forceInset={{ top: 'always' }}>  
            <ScrollView>
                <View style={StyleSheet.HomeView}>
                    <View style={StyleSheet.HomeHeaderView}>
                        <Text style={StyleSheet.HomeHeaderText}> NicuApp</Text>   
                    </View>
                    <Spacer>
                        <Card>
                            <View style={StyleSheet.HomeCardView}>
                                <Text style={StyleSheet.HomeCardSubtitle}>Foloseste aplicatia pentru a</Text>
                                <Text style={StyleSheet.HomeCardTitle}>INCHIRIA O MASINA</Text>
                                <Text style={StyleSheet.HomeCardSubtitle}>Diferite marci, preturi accesibile pe zi sau pe ora </Text>
                                <Text style={StyleSheet.HomeCardSubtitle}>Alegerea ta de Preferinta CAUTA sau OFERA masina </Text>
                                <Image style={StyleSheet.HomeCardImage} source={require('../img/imageCarHome.png' )} /> 
                                <View style={StyleSheet.ButtonView}>
                                    <TouchableOpacity style={StyleSheet.TouchableStyle} onPress={() => navigation.navigate('CarList')}>
                                        <Text style={StyleSheet.ButtonText}>Cauta</Text>
                                    </TouchableOpacity>
                                </View> 
                            </View>
                        </Card>
                    </Spacer>
                </View>                   
            </ScrollView>    
        </SafeAreaView> 
    );
};

HomeScreen.navigationOptions = () => {
    return {
        header: null
    };
};


export default HomeScreen;
