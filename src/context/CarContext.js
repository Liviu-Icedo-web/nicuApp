import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const carsReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_cars':
            return {...state, car:action.payload};
        case 'addCar' :
            /* Asta o lasam aici pe cand o sa avem list by cars, acuma nu gaseste masina pentru ca nu este in lista principala de la CarDetail
            let id = action.payload.id
            return  navigate('CarDetail',{id});*/
            return {erroMessage:''} ; 
        case 'edit_car':
                return {...state, car1:action.payload};          
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
    return async ( brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour ) => {
        //Pasamos los datos de string a int asi es como lo necesitamos en la api        
        year = parseInt(year)
        hp = parseInt(hp)
        doors = parseInt(doors)
        seats = parseInt(seats)
        PriceDay = parseFloat(PriceDay)
        PriceHour = parseFloat(PriceHour)    

        try {
            const response = await nicuApi.post('/cars', { brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour });
            dispatch({ type: 'addCar', payload: response.data });
            navigate ('CarList')
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, daca nu ai perfil creaza !!' });
            }
    }; 
} 
const editCar = dispatch => {
    return async (id, user_id,brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour ) => {
        year = parseInt(year)
        hp = parseInt(hp)
        doors = parseInt(doors)
        seats = parseInt(seats)
        PriceDay = parseFloat(PriceDay)
        PriceHour = parseFloat(PriceHour)  
        
        try {
            const response = await nicuApi.put(`/cars/${id}`, { user_id,brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour });
            dispatch({ type: 'edit_car', payload: response.data });
            navigate('CarDetail',{id});   
        } catch (error) {
            dispatch({ 
                type: 'add_error', 
                 payload: 'Exista o erroare, editando masina cu ID: `${id}` !!' });
             }         
        };
}
  

export const { Context, Provider } = createDataContext(
    carsReducer,
    { fetchCars ,addCar , editCar },
    []
);