import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';



const carsReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_cars':
            return action.payload;
        case 'addCar' :
            return {errorMessage: ''};   
        case 'edit_car':
            return state.map((car) => {
                if (car.id === action.payload.id ){
                return action.payload;
                } else {
                    return car;
                }
            });             
        default:
            return state;
    }
};

const fetchCars = dispatch => async () => {
    const response = await nicuApi.get('/cars'); 
    dispatch({ type: 'fetch_cars', payload: response.data });
};

//Esta funccion habria que mirar como meter el id del token conectado  y  aver como hacemos lo del array de imagenes 
const addCar = dispatch => async ({ brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour }) => {
        //Pasalomo los datos de string a int asi es como lo necesitamos en la api        
        year = parseInt(year)
        hp = parseInt(hp)
        doors = parseInt(doors)
        seats = parseInt(seats)
        PriceDay = parseFloat(PriceDay)
        PriceHour = parseFloat(PriceHour)    
               
        console.log('Add Car ***',images);
        try {
            const response = await nicuApi.post('/cars', { brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour });
            console.log("Add Car ***",response);
           // await AsyncStorage.setItem('token', response.data.token);//esto esta aqui porque se loguaza automatic si ramane cu tokenul dupa ce se creasza perfilul
            dispatch({ type: 'addCar', payload: response.data });
            navigate('mainFlow');
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, daca nu ai perfil creaza !!' });
            }
    }; 

const editCar = dispatch => {
    return async (id, brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour, callback ) => {
        await nicuApi.put(`/cars/${id}`, { brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour });

        dispatch({ type: 'edit_car', payload: { id, brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour}});
        if (callback){
            callback();
            }            
     };
}
  

export const { Context, Provider } = createDataContext(
    carsReducer,
    { fetchCars ,addCar , editCar },
    []
);