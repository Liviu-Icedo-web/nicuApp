import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/screens/Home/HomeScreen';
import SigninScreen from './src/screens/Authentification/SigninScreen';
import SignupScreen from './src/screens/Authentification/SignupScreen';
import CarListScreen from './src/screens/Car/CarListScreen';
import CarDetailScreen from './src/screens/Car/CarDetailScreen';
import CarCreateScreen from './src/screens/CarOwn/CarCreateScreen';
import CarLocationsScreen from './src/screens/CarLocation/CarLocationsScreen';
import CarLocationCreateScreen from './src/screens/CarLocation/CarLocationCreateScreen';
import CarLocationEditScreen from './src/screens/CarLocation/CarLocationEditScreen';
import AccountScreen from './src/screens/Account/AccountScreen';
import ProfileScreen from './src/screens/Account/ProfileScreen';
import RentalScreen from './src/screens/CarRental/RentalScreen';
import MessageScreen from './src/screens/Message/MessageScreen';
import RentalEditScreen from './src/screens/CarRental/RentalEditScreen';
import ResolveAuthScreen from './src/screens/Authentification/ResolveAuthScreen';
import CarOwnScreen from './src/screens/CarOwn/CarOwnScreen';
import CarOwnDetailScreen from './src/screens/CarOwn/CarOwnDetailScreen';
import CarEditScreen from './src/screens/CarOwn/CarEditScreen';
import UserEditScreen from './src/screens/Account/UserEditScreen';
import DocumentsScreen from './src/screens/Documents/DocumentsScreen';
import CarUserDetailScreen from './src/screens/Car/CarUserDetailScreen';
import ReceivedOwnRentalScreen from './src/screens/CarRental/ReceivedOwnRentalScreen';
import PublicProfileScreen from './src/screens/Account/PublicProfileScreen';

import { Provider as CarProvider } from './src/context/CarContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as CarLocationProvider } from './src/context/CarLocationContext';
import { Provider as RentalProvider } from './src/context/RentalContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';


const carListFlow = createStackNavigator({
   CarList: CarListScreen,
   CarDetail: CarDetailScreen,
   CarUserDetail: CarUserDetailScreen
});

//const carOwnFlow = createStackNavigator({
   // CarOwn: CarOwnScreen,
   // CarCreate: CarCreateScreen,
    //CarOwnDetail: CarOwnDetailScreen,
    //CarLocations: CarLocationsScreen,
   // CarLocationCreate: CarLocationCreateScreen,
   // CarLocationEdit: CarLocationEditScreen
//});

const accountFlow = createStackNavigator({
    Account: AccountScreen,
    Profile: ProfileScreen,
    Rental: RentalScreen,
    ReceivedOwnRental: ReceivedOwnRentalScreen,
    RentalEdit: RentalEditScreen,
    Message: MessageScreen,
    CarOwn: CarOwnScreen,
    CarCreate: CarCreateScreen,
    CarOwnDetail: CarOwnDetailScreen,
    CarLocations: CarLocationsScreen,
    CarLocationCreate: CarLocationCreateScreen,
    CarLocationEdit: CarLocationEditScreen,
    Documents: DocumentsScreen,
    PublicProfile: PublicProfileScreen
});

//carOwnFlow.navigationOptions = {
 // title: 'Verifica Masinile tale',
  //tabBarIcon: ({tintColor}) => (
   // <FontAwesome
    //    name="car"
      //  color={tintColor}
      //  size={20}
    ///>
  //),
//};

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
    name="car"
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
   // carOwnFlow,
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
      <RentalProvider>
          <AuthProvider>              
            <App ref={(navigator) => { setNavigator(navigator); }} />          
          </AuthProvider>  
        </RentalProvider>
      </CarLocationProvider>
  </CarProvider>   
);


