import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin' :
            return { errorMessage: '', token: action.payload }; 
        case 'signUp' :
                return {errorMessage: ''};    
        case 'clear_error_message' :
              return { ...state, errorMessage: '' };  
        case 'signout':
            return { token: null, errorMessage: '' };
        case 'fetch_userAuth':
            return {...state,user:action.payload};       
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('CarList');
    } else {
        navigate('CarList');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

const signUp = dispatch => async ({ email, password, nick_name, first_name, last_name,last_name2, driving_licence_number}) => {       
    try {
        const response = await nicuApi.post('/users', { email, password, nick_name, first_name, last_name,last_name2, driving_licence_number });        
        dispatch({ type: 'signUp', payload: response.data });
        navigate('CarList');
    } catch (err) {
        dispatch({ 
           type: 'add_error', 
            payload: 'Exista o erroare, daca nu ai perfil creaza !!' });
        }
    };

const signin = dispatch => async ({ email, password }) => {       
    try {
        const response = await nicuApi.post('/login', { email, password });
        await AsyncStorage.setItem('token', response.data);
        dispatch({ type: 'signin', payload: response.data});
        navigate('CarList');
    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: 'Exista o erroare' });
        }
    };
    
const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('CarList');
};

const fetchUserAuth = dispatch => async () => {
    const response = await nicuApi.get(`/user`);
    dispatch({ type: 'fetch_userAuth', payload: response.data });
};

export const { Provider, Context } = createDataContext (
    authReducer,
    { signin, signout, signUp, clearErrorMessage , tryLocalSignin, fetchUserAuth },
    { token: null, errorMessage: ''}
);
