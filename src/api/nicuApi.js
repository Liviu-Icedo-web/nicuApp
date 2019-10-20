/* eslint-disable no-param-reassign */
import axios from 'axios';
import { AsyncStorage } from 'react-native';



const instance = axios.create({
    //baseURL: 'http://1bbcb045.ngrok.io',
    baseURL: 'http://localhost:8090',
    headers: {'Content-Type': 'text/plain'},
    withCredentials: false,
    

});


instance.interceptors.request.use(
     async (config) => { 
        const token = await AsyncStorage.getItem('token');
        const noTokenUrl =    ['/cars',
                        '/users' 
                        ]
        console.log(config.url)                
        if(config.method!='get' && noTokenUrl.includes(config.url)) {
            console.log('INTRAAAAA');
        }
        
        if(noTokenUrl.includes(config.url) && config.method!='get'){ //Problema era ca tot timpul se treace tokenul ca si parametru la api,tokenul api il accepta doar pt PUT, POST , DELETE
            console.log(token);
            if (token) {
                axios.defaults.withCredentials = true;
                //config.headers['Accept']= '*/*';           
                config.headers['Content-Type']= 'application/x-www-form-urlencoded';
                config.headers.Authorization = `Bearer ${token}`;
             }
        }        
        console.log("check config send ***", config)
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
