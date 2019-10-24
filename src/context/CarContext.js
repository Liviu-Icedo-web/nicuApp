import createDataContext from './createDataContext';
import nicuApi from '../api/nicuApi';



const carsReducer = (state, action) => {
    switch (action.type) { 
        case 'fetch_cars':
            return action.payload;
        case 'addCar' :
                return {errorMessage: ''};        
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
        console.log('Add Car ***')
        try {
            const response = await nicuApi.post('/cars', { brand, year, hp, doors, seats, insurance, images, Town, PriceDay, PriceHour });
            console.log("Add Car ***",response);
           // await AsyncStorage.setItem('token', response.data.token);//esto esta aqui porque se loguaza automatic si ramane cu tokenul dupa ce se creasza perfilul
            dispatch({ type: 'addCar', payload: response.data });
            navigate('CarList');
        } catch (err) {
            console.log("Error URL",err)
            dispatch({ 
               type: 'add_error', 
                payload: 'Exista o erroare, daca nu ai perfil creaza !!' });
            }
    }; 
  

export const { Context, Provider } = createDataContext(
    carsReducer,
    { fetchCars ,addCar },
    []
);