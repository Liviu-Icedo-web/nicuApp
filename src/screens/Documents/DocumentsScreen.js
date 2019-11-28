import React from 'react';
import { View ,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Text} from 'react-native-elements';
import ImageUpload from '../../components/Utils/ImageUpload';
import WebCamCapture from '../../components/Utils/WebCamCapture';
import CreditCardForm from '../../components/CreditCard/CreditCardForm';
import Spacer from '../../components/Utils/Spacer';
import StyleSheet from '../../styles';


const DocumentsScreen = ({ navigation }) => {
      
    return (   
        <SafeAreaView  style={StyleSheet.AppStyle} forceInset={{ top: 'never' }}>  
            <ScrollView>
                <Spacer>
                    <View >
                        <View style ={{ marginTop: 20}}>
                            <Text style={StyleSheet.titleAzul}>Incarca Permisul de Conducere: </Text>
                            <Text  style={StyleSheet.gray}>Noi o sal verificam si o sal acceptam in cazul in care totul este correct </Text>
                        </View>    
                        <View style={StyleSheet.docView}>
                            <ImageUpload/>
                            <WebCamCapture/>
                        </View> 
                    </View>  
                    <View >
                        <View style ={{ marginTop: 30}}>
                            <Text style={StyleSheet.titleAzul}>Incarca Datele Bancare: </Text>
                            <Text  style={StyleSheet.gray}>Acesta va fi cardul de unde se va face plata pentru rezerve sau primi in cazul in care esti proprietar!!</Text>
                        </View> 
                        <CreditCardForm/>
                    </View>  
                </Spacer>  
            </ScrollView>
        </SafeAreaView>       
     
    );    
} 


//no borres esto !!!
DocumentsScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Documente',
        //headerStyle: {
          //  backgroundColor: '#08ffc8',
          //  borderBottomColor: 'white',
          //  borderBottomWidth: 0,
        //},
        //headerTitleStyle: {
            /* this only styles the title/text (font, color etc.)  */
            //color: '#112f91',
        //},
        //tintColor: {
            /* this will color your back and forward arrows or left and right icons */
           // color: '#112f91',

        //}
    }     
};



export default DocumentsScreen;