import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CarListScreen from './src/screens/CarListScreen';
import CarDetailScreen from './src/screens/CarDetailScreen';
import CarCreateScreen from './src/screens/CarCreateScreen';
import CarLocationsScreen from './src/screens/CarLocationsScreen';
import CarLocationCreateScreen from './src/screens/CarLocationCreateScreen';
import CarLocationEditScreen from './src/screens/CarLocationEditScreen';
import AccountScreen from './src/screens/AccountScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RentalScreen from './src/screens/RentalScreen';
import MessageScreen from './src/screens/MessageScreen';
import RentalEditScreen from './src/screens/RentalEditScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import CarOwnScreen from './src/screens/CarOwnScreen';
import CarOwnDetailScreen from './src/screens/CarOwnDetailScreen';
import CarEditScreen from './src/screens/CarEditScreen';
import UserEditScreen from './src/screens/UserEditScreen';

import { Provider as CarProvider } from './src/context/CarContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as CarLocationProvider } from './src/context/CarLocationContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';


const carListFlow = createStackNavigator({
   CarList: CarListScreen,
   CarDetail: CarDetailScreen,
});

const carOwnFlow = createStackNavigator({
    CarOwn: CarOwnScreen,
    CarCreate: CarCreateScreen,
    CarOwnDetail: CarOwnDetailScreen,
    CarLocations: CarLocationsScreen,
    CarLocationCreate: CarLocationCreateScreen,
    CarLocationEdit: CarLocationEditScreen
});

const accountFlow = createStackNavigator({
    Account: AccountScreen,
    Profile: ProfileScreen,
    Rental: RentalScreen,
    RentalEdit: RentalEditScreen,
    Message: MessageScreen
});

carOwnFlow.navigationOptions = {
  title: 'Verifica Masinile tale',
  tabBarIcon: ({tintColor}) => (
    <FontAwesome
        name="car"
        color={tintColor}
        size={20}
    />
  ),
};

accountFlow.navigationOptions =  { 
      title: 'Profil',
      tabBarIcon: ({tintColor}) => (
        <FontAwesome
            name="gear"
            color={tintColor}
            size={25}
        />
    ),
};

carListFlow.navigationOptions = {
  title: 'Cauta Masini',
  tabBarIcon: ({tintColor}) => (
    <FontAwesome
        name="th-list"
        color={tintColor}
        size={20}
    />
  ),
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  Home: HomeScreen,
  mainFlow: createBottomTabNavigator({
    carListFlow,
    carOwnFlow,
    accountFlow
   }),
   CarEdit: CarEditScreen,
   UserEdit: UserEditScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
 
});

const App = createAppContainer(switchNavigator);

export default () => (
  <CarProvider>
    <CarLocationProvider>
      <AuthProvider>              
          <App ref={(navigator) => { setNavigator(navigator); }} />          
        </AuthProvider>  
      </CarLocationProvider>
  </CarProvider>   
);


