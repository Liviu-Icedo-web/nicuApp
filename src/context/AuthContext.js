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
        case 'edit_user':
            return {...state, user:action.payload, errorMessage: ''}; 
        case 'delete_user':
            return state.filter(user => user.id !== action.payload);       
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
        navigate('Home');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};

const signUp = dispatch => async ( email, password, nick_name, first_name, last_name,last_name2, driving_licence_number) => {       
    try {
        const response = await nicuApi.post('/users', { email, password, nick_name, first_name, last_name,last_name2, driving_licence_number });        
        dispatch({ type: 'signUp', payload: response.data });
        navigate('Signin');
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
};

const fetchUserAuth = dispatch => async () => {
    const response = await nicuApi.get(`/user`);
    dispatch({ type: 'fetch_userAuth', payload: response.data });
};

const editUser = dispatch => async (id, email, password, nick_name, first_name, last_name, last_name2, driving_licence_number )=> {
    try {
        const response = await nicuApi.put(`/users/${id}`, { email, password, nick_name, first_name, last_name, last_name2, driving_licence_number });
        dispatch({ type: 'edit_user', payload: response.data });
        navigate('Account',{id});
    } catch (err) {
        dispatch({ 
            type: 'add_error', 
            payload: 'Exista o erroare' });
        }
    };

const deleteUser = dispatch => {
    return async id => {
        await nicuApi.delete(`/users/${id}`);
        dispatch({ type: 'delete_user', payload: id});
        navigate('CarList');
    };
 }

export const { Provider, Context } = createDataContext (
    authReducer,
    { signin, signout, signUp, clearErrorMessage , tryLocalSignin, fetchUserAuth, editUser ,deleteUser},
    { token: null, errorMessage: ''}
);

