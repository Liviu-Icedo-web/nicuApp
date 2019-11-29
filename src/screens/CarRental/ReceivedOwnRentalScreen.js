import React, { useContext, useEffect } from 'react';
import { View, Text} from 'react-native';
import { Tab, Tabs } from 'native-base';
import ReceivedRental from '../../components/Car/ReceivedRental';
import { Context as RentalContext } from '../../context/RentalContext';
import { Context as CarContext } from '../../context/CarContext';
import { Context as AuthContext } from '../../context/AuthContext';


const ReceivedOwnRentalScreen =  ({ navigation }) => {
    const usersContext =  useContext(AuthContext); 
    const carsContext = useContext(CarContext);
    const rentalContext = useContext(RentalContext);

    const { state : stateU } = usersContext; 
    const { state : stateC } = carsContext; 
    const { state : stateR } = rentalContext;
    const { deleteRental} = rentalContext;

    //intentos de sacar las solicitudes pentru masinile proprii pero.....no consigo
    const userId = stateU.user
    const ownCars = stateC.car.filter(car => car.user_id === stateU.user.id);
    const rentalDate_Intento = ownCars.filter(car => car.id === stateR.rental.car_id);  
    const rentalDate =  stateR.rental;//aqui sale lo mismo que en la pestaña de rezervas de usuarios.
    //finish intentos

    console.log('**** ReceivedOwnRental id ', userId)
    console.log('**** ReceivedOwnRental  masini ce detine ', ownCars)
    console.log('**** ReceivedOwnRental data rezerve solicitate ', rentalDate)

    //aqui tenemos que sacar de alguna forma las reservas que recibe para el coche publicado cuando es proprietario
 
    return  ( 
        
        <Tabs>
            <Tab
                heading='Solicitari Primite'>
                    <ReceivedRental 
                    rentalDate ={rentalDate}
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

ReceivedOwnRentalScreen.navigationOptions = ({ navigation}) => { 
    return {         
        title: 'Solicitari Masini Publicate',
        headerTitleStyle: {
            flex: 1,
            //color: '#D3D3D3',
           // fontWeight:'bold'
        },
        
    }     
};

export default ReceivedOwnRentalScreen;


