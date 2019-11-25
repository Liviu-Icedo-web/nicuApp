import React, { useContext, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Tab, Tabs } from 'native-base';
import ReceivedRental from '../../components/Car/ReceivedRental';
import { Context as rentalContext } from '../../context/RentalContext';


const RentalScreen =  ({ navigation }) => {
    const {state, fetchRentals, deleteRental} = useContext(rentalContext)
    const userId = navigation.getParam('userId')

    useEffect(()=>{
        fetchRentals(userId)
    },[]);
 
    return  ( 
        
        <Tabs>
            <Tab
                heading='Rezerve Disponibile'>
                <ReceivedRental 
                    userId = {userId}
                    rentalDate ={state.rental}
                    navigation ={navigation}
                    cancel={deleteRental}
                />
            </Tab>
            <Tab heading='Historial'>
                <View >
                    <Text>Eu zic aici sa incarcam rezervele care sau incheiat adica din trecut si in ailalta alea care inca nu leai facut...adika daca suntem in noiembrie si 
                        rezervarea e pentru decembrie pana nu trece decembrie nu apare in historial ...ramane in prima
                    </Text>
                </View>
            </Tab>
        </Tabs>
 
    ); 
};

RentalScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Masini Rezervate',
        headerTitleStyle: {
            flex: 1,
            //color: '#D3D3D3',
           // fontWeight:'bold'
        },
        
    }     
};

export default RentalScreen;


