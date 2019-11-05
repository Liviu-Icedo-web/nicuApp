import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import CarListScreen from './src/screens/CarListScreen';
import CarDetailScreen from './src/screens/CarDetailScreen';
import CarCreateScreen from './src/screens/CarCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import CarOwnScreen from './src/screens/CarOwnScreen';
import CarEditScreen from './src/screens/CarEditScreen';
import UserEditScreen from './src/screens/UserEditScreen';
import HomeScreen from './src/screens/HomeScreen';
import CarOwnDetailScreen from './src/screens/CarOwnDetailScreen';
import { Provider as CarProvider } from './src/context/CarContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const carListFlow = createStackNavigator({
   CarList: CarListScreen,
   CarDetail: CarDetailScreen,
});

const carOwnFlow = createStackNavigator({
    CarOwn: CarOwnScreen,
    CarCreate: CarCreateScreen,
    CarOwnDetail: CarOwnDetailScreen
});

carOwnFlow.navigationOptions = {
  title: 'Verifica Masinile tale',
  tabBarIcon:
    <FontAwesome name="car" size={20} />

};

carListFlow.navigationOptions = {
  title: 'Cauta Masini',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  Home: HomeScreen,
  mainFlow: createBottomTabNavigator({
    carListFlow,
    carOwnFlow,
    Account: AccountScreen,
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
     <AuthProvider>              
        <App ref={(navigator) => { setNavigator(navigator); }} />          
      </AuthProvider>  
  </CarProvider>   
);


