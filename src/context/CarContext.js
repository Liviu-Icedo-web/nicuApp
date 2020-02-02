import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';
import { navigate } from '../navigationRef';

const carsReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_cars':
            return {...state, car:action.payload};
        case 'fetch_user_cars':
            return {...state, car_user:action.payload};    
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
        case 'delete_car':
            return { ...state, car:state.car.filter( car  => car.id !== action.payload)};      
        case 'add_Rental':
                let newRental = action.payload
                return { ...state, 
                    rental:[...state.rental,newRental]
                };
        case 'delete_block':
                        console.log('**** deleteBLOCK',state.car_user[0].id)
                        // const array = [['hellow','pastas'],['travel', 'militarie'],['oranges','mint']];
                        // const result = array.flatMap(x => x.filter(y => y.length > 6));
            return {...state,
                        car_user:state.car_user
                            .map(
                                    (car)=>{
                                        car.car_blocked.map((blocked,item) =>{ 
                                            if(blocked.id == action.payload){
                                                return delete car.car_blocked[item] 
                                            }
                                            return car.car_blocked
                                         })
                                         return car
                                    }
                                )   
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

const getUserCars = dispatch => {
    return async user_id => {
                const response = await nicuApi.get('/cars-user/'+user_id); 
                dispatch({ type: 'fetch_user_cars', payload: response.data })
        
        }
}

//apaños en este Context para evitar errores
const addRental = dispatch => {
    return async ( car_id, user_id, user_owner_id,start_date, end_date ,pickup_location, dropoff_location) => {
        start_date = new Date(start_date.replace(' ', 'T'));
        end_date = new Date(end_date.replace(' ', 'T'));
        
        try {
            const response = await nicuApi.post('/rental-car/', {car_id,user_id, user_owner_id,start_date, end_date,pickup_location, dropoff_location});
            //dispatch({ type: 'add_Rental', payload: response.data });
            navigate('Rental'); 
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, nu sa creat rezerva pt masina !!' });
            }
       
    }; 
} 

//...end_Apaños

const deleteBlock = dispatch => {
    return async (id)=> {
        try {
           await nicuApi.delete(`/rental-user/${id}`);              
            dispatch({type: 'delete_block', payload:id})
        } catch (error) {
            dispatch({ 
                type: 'add_error', 
                 payload: 'Exista o erroare, nu se a eliminat rezerva cu id: '+id+' !!' })
        }
    };
 }

export const { Context, Provider } = createDataContext(
    carsReducer,
    { fetchCars ,addCar , editCar ,deleteCar,getUserCars, addRental,deleteBlock},
    []
);