import React from 'react';
import { View, Text} from 'react-native';
import { Tab, Tabs } from 'native-base';



const MessageScreen =  ({ navigation }) => {
    return  ( 

        <Tabs>
            <Tab
                heading='Mesaje Primite'>
                <View>
                    <Text>Mesaje Primite</Text>
                </View>
            </Tab>
            <Tab heading='Mesaje Trimise'>
                <View >
                    <Text>Mesaje Trimise</Text>
                </View>
            </Tab>
        </Tabs>
 
    ); 
};

MessageScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Mesaje',
        headerTitleStyle: {
            flex: 1,
            //color: '#D3D3D3',
           // fontWeight:'bold'
        },
        
    }     
};

export default MessageScreen;