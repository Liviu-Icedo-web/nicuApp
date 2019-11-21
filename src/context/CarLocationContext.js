import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const carLocationReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_locations_car':
            return {...state, locationCar:action.payload};
        case 'addLocationCar':
            let newlocationCar = action.payload
            return { ...state, 
                locationCar:[...state.locationCar,newlocationCar]
            };  
        case 'edit_car_location':
            let editlocationCar = action.payload
            return { ...state, 
                locationCar:[...state.locationCar.filter(locationCar => locationCar.id != editlocationCar.id),editlocationCar]
            }; 
        case 'delete_location':
            return { ...state, locationCar:state.locationCar.filter( locationCar  => locationCar.id !== action.payload)};                 
        default:
            return state;
    }
};
const fetchLocationsCar = dispatch => {
    return async (carid) => {
        const response = await nicuApi.get('/cars-location/'+carid); 
        dispatch({ type: 'fetch_locations_car', payload: response.data });
    };
} 

const addLocationCar = dispatch => {
    return async (id, car_id, street, city, state, country ) => {
        try {
            console.log("*** addLocationCar ",car_id)
            const response = await nicuApi.post('/car-location/', {car_id,street, city, state, country});
            dispatch({ type: 'addLocationCar', payload: response.data });
            navigate('CarLocations'); 
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, nu sa creat localizarea pt masina !!' });
            }
    }; 
} 

const editLocationCar = dispatch => {
    return async (id, car_id, street, city, state, country ) => {   
        console.log('BAAA', id, car_id)     
        try {
            const response = await nicuApi.put(`/car-location/`+id, { id, car_id, street, city, state, country });
            dispatch({ type: 'edit_car_location', payload: response.data });
            navigate('CarLocations',{id:response.data.id}); 
        } catch (error) {
            dispatch({ 
                type: 'add_error', 
                 payload: 'Exista o erroare, editando location cu ID: `${id}` !!' });
             }         
        };
}

const deleteCarLocation = dispatch => {
    return async (id)=> {
        await nicuApi.delete(`/car-location/${id}`);
        dispatch({ type: 'delete_location', payload: id});
        navigate('CarLocations'); 
    };
 }

export const { Context, Provider } = createDataContext(
    carLocationReducer,
    { fetchLocationsCar,addLocationCar, editLocationCar,deleteCarLocation},
    []
);