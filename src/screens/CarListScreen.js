import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import AppStyle from '../components/AppStyle';
import { SimpleLineIcons} from '@expo/vector-icons';


const CarListScreen = ({ navigation }) => {
    const { state, fetchCars, token} = useContext(CarContext);
    
    return ( 
        <AppStyle>  
            {!token
                ?  <View style={styles.button}>
                        <Button type="outline" title="Creaza-ti un Perfil si Inchiriaza Masina in Localitatea Ta pentru cate ore ai Nevoie !!" onPress={() => navigation.navigate('Signup')} />
                    </View>  
                : null       
            }    
            <SearchBar />
            <NavigationEvents onWillFocus={fetchCars} />
            

            <FlatList 
                data={state}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => {
                    return ( 
                        <View style={{ flex: 1 }}>                            
                            <Card >                      
                                <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.id })} >
                                    <View style={styles.carView}>
                                        <View style={styles.imageView}>
                                            <Image style={styles.image} source={{ uri: item.images }} />  
                                        </View>
                                        <View style={styles.detailView}>
                                            <Text style={styles.title}>{item.brand},{item.seats} locuri</Text>
                                            <Text style={styles.detailTextCar}>Din {item.year}, {item.doors} usi, {item.hp} cai putere.</Text>
                                            <Text>{item.Town}</Text>
                                        </View>  
                                    </View>
                                </TouchableOpacity>      
                                <View style={styles.bookSectionView}>
                                    <View style={styles.bookSectionView}>
                                        <View style={styles.priceHourView}>
                                            <Text style={styles.priceHourText}>{item.PriceHour} Lei</Text>
                                            <Text style={styles.priceHourText}>Hora</Text>
                                        </View>
                                        <View style={styles.priceDayView}>
                                            <Text style={styles.priceDayText}>{item.PriceDay} Lei</Text> 
                                            <Text style={styles.priceDayText}>Ziua</Text> 
                                        </View>                                                      
                                    </View>
                                    <View style={styles.bookView}>
                                        <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { id: item.id })}>
                                            <Text style={styles.bookText}>Inchiriaza</Text>
                                            <Text style={styles.bookText}>ACUM!!!</Text>
                                        </TouchableOpacity>
                                    </View>                                 
                                </View>                                                                 
                            </Card>                            
                        </View>    
                    );
                }}
            /> 
             
        </AppStyle> 
    );
};

CarListScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight:
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <SimpleLineIcons style={{ margin : 15 }} name="user-follow" size={30} />
                </TouchableOpacity>,                
        title: 'Nicu App',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    };
};

const styles = StyleSheet.create({
    button: {
        marginHorizontal: 10,
        marginTop: 10
    },
    carView: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
      
    },
    imageView: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        height: 50,
        width: 80,
        borderRadius: 5
    },
    detailView: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    bookSectionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    priceHourView: {
        flexDirection: 'column',
        backgroundColor: '#F08080',
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    priceHourText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    priceDayView: {
        flexDirection: 'column',
        backgroundColor: '#FFE4E1',
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    priceDayText: {
        color: '#F08080',
        fontWeight: 'bold'
    },
    bookView: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#3CB371',
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    bookText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    detailTextCar: {
        color: '#D3D3D3',
        fontWeight: 'bold'
    }
});

export default CarListScreen;
