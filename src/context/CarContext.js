import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const carsReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_cars':
            return {...state, car:action.payload};
        case 'addCar':
            let newCar = action.payload
            return { ...state, 
                        car:[...state.car,newCar]
                    };          
        case 'edit_car':
            let editCar = action.payload
            return { ...state, 
                        car:[...state.car.filter(car => car.id != editCar.id),editCar]
                    }; 
        case 'fetch_own_cars':
            return state.filter(car => car.user_id == action.payload);     
        case 'delete_car':
            return { ...state, car:state.car.filter( car  => car.id !== action.payload)};   
            
        case 'addRental':
                let newRental = action.payload
                return { ...state, 
                    rental:[...state.rental,newRental]
                };  
        default:
            return state;
    }
};

const fetchCars = dispatch => async () => {
    const response = await nicuApi.get('/cars'); 
    dispatch({ type: 'fetch_cars', payload: response.data });
};

//Esta funccion habria que mirar como meter el id del token conectado  y  aver como hacemos lo del array de imagenes 
const addCar = dispatch => {
    return async ( brand, year, hp, doors, seats, insurance, images, town, price_day, price_hour ) => {
        //Pasamos los datos de string a int asi es como lo necesitamos en la api        
        year = parseInt(year)
        hp = parseInt(hp)
        doors = parseInt(doors)
        seats = parseInt(seats)
        price_day = parseFloat(price_day)
        price_hour = parseFloat(price_hour)  
      

        try {
            const response = await nicuApi.post('/cars', { brand, year, hp, doors, seats, insurance, images, town, price_day, price_hour });
            dispatch({ type: 'addCar', payload: response.data });
            navigate ('CarOwn');
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, daca nu ai perfil creaza !!' });
            }
    }; 
} 
const editCar = dispatch => {
    return async (id, user_id,brand, year, hp, doors, seats, insurance, images, town, price_day, price_hour ) => {
        year = parseInt(year)
        hp = parseInt(hp)
        doors = parseInt(doors)
        seats = parseInt(seats)
        price_day = parseFloat(price_day)
        price_hour = parseFloat(price_hour)  
        
        try {
            const response = await nicuApi.put(`/cars/${id}`, { user_id,brand, year, hp, doors, seats, insurance, images, town, price_day, price_hour });
            dispatch({ type: 'edit_car', payload: response.data });
            navigate('CarOwnDetail',{id:response.data.id}); 
        } catch (error) {
            dispatch({ 
                type: 'add_error', 
                 payload: 'Exista o erroare, editando masina cu ID: `${id}` !!' });
             }         
        };
}
const deleteCar = dispatch => {
    return async id => {
        await nicuApi.delete(`/cars/${id}`);
        dispatch({ type: 'delete_car', payload: id});
        navigate('CarOwn'); 
    };
 }

 const fetchOwnCars = dispatch => {
     return async user_id => {
        await nicuApi.get('/cars'); 
        dispatch({ type: 'fetch_own_cars', payload: user_id });}
};


//apaños en este Context para evitar errores
const addRental = dispatch => {
    return async ( car_id, user_id, pickup_location, start_date, end_date ) => {
        try {
            console.log("*** addRental ",car_id)
            const response = await nicuApi.post('/rental-car/', {car_id,user_id, pickup_location, start_date, end_date});
            dispatch({ type: 'addRental', payload: response.data });
            navigate('CarLocations'); 
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, nu sa creat rezerva pt masina !!' });
            }
    }; 
} 

//...end_Apaños

export const { Context, Provider } = createDataContext(
    carsReducer,
    { fetchCars ,addCar , editCar ,deleteCar, fetchOwnCars, addRental},
    []
);