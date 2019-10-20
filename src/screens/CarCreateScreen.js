import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet,ScrollView   } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as CarContext } from '../context/CarContext';
import CarForm from '../components/CarForm';
import AppStyle from '../components/AppStyle';
import Card from '../components/Card';

const CarCreateScreen = () => {
   const { state, addCar, clearErrorMessage  } = useContext(CarContext);
   
    return ( 
        <AppStyle>  
            <ScrollView >           
                <View style={styles.container}>
                    <Card>
                        <NavigationEvents onWillBlur={clearErrorMessage} />
                        <CarForm
                            headerText="Adauga o Masina "
                            errorMessage={state.errorMessage}
                            submitButtonText="Salveaza"
                            onSubmit={addCar}
                        />
                    </Card>  
                </View>            
            </ScrollView>                   
        </AppStyle>   
    );
};

CarCreateScreen.navigationOptions = {
    title: 'Adauga Masina',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
      
    }
    
});

export default CarCreateScreen;