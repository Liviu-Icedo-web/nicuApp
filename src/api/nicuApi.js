/* eslint-disable no-param-reassign */
import axios from 'axios';
import { AsyncStorage } from 'react-native';



const instance = axios.create({
    baseURL: 'http://8e0122ca.ngrok.io',
   // baseURL: 'http://localhost:8090',
    headers: {'Content-Type': 'text/plain'},
    withCredentials: false,
    
});


instance.interceptors.request.use(
     async (config) => { 
        const token = await AsyncStorage.getItem('token');
        const noTokenUrl =    ['/cars',
                        '/users',
                        '/user',
                        '/cars/1'
                        ]
        console.log('*** Config Before Url: ',config)                
        if(noTokenUrl.includes(config.url)) {
            console.log('*** INTRAAAAA config url:', config.url);
        }
        
        // if(noTokenUrl.includes(config.url)){ //Problema era ca tot timpul se treace tokenul ca si parametru la api,tokenul api il accepta doar pt PUT, POST , DELETE
        //     if (token) {                
        //         config.headers['Content-Type']= 'application/json';
        //         config.headers.Authorization = `Bearer ${token}`;
        //      }
        // }  
        console.log('*** INTRAAAAA method url:', config.method);
        if(config.method == 'get' || config.url == '/user' || config.method== 'post' || config.method== 'delete' || config.method== 'put'){
            if (token) {    
                config.headers['Content-Type']= 'application/json';
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        console.log("*** check config send", config)
         return config;
     },
     (err) => Promise.reject(err),
 
);

//Asta lasa asa comentanta o sa avem nevoie de ea pentru cand o sa facem check la cea ce primm de la ApI
instance.interceptors.response.use(
    async (config) => { 
        console.log("RRRR: ",config)
        return config;
    },
    (err) => Promise.reject(err),
)


export default instance;
