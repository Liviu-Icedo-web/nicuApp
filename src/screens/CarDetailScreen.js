import React, { useContext } from 'react';
import { View, StyleSheet , Image, ScrollView, Picker ,TouchableOpacity} from 'react-native';
import { Text } from 'react-native-elements';
import { Context as CarContext } from '../context/CarContext';
import Spacer from '../components/Spacer';
import AppStyle from '../components/AppStyle';
import Card from '../components/Card';
import { FontAwesome } from '@expo/vector-icons';


const CarDetailScreen = ({ navigation }) => {
    const { state } = useContext(CarContext);

    const car = state.find(
        car => car.id === navigation.getParam('id')
    );
 
    return (
        <AppStyle>
            <ScrollView >
                <Image style={styles.image} source={{uri: car.images}} />   
                <Text style={styles.title}>{car.brand}, {car.Town}</Text> 
                <View style={styles.stars}>
                    <FontAwesome name="star" size={20} />
                    <FontAwesome name="star" size={20} />
                    <FontAwesome name="star" size={20} />
                    <FontAwesome name="star-half-full" size={20} />
                    <Text> (26likes) </Text>
                </View> 
                <View style={styles.detailCarView}>
                    <View>              
                        <Text>Anul: {car.year}</Text>
                        <Text >Usi: {car.doors}, Locuri: {car.seats}</Text>
                        <Text >Cai Putere: {car.hp}</Text>
                    </View>
                    <View style={styles.detailPriceView}>
                        <Text style={styles.Text}>{car.PriceDay} Lei Ziua</Text>
                        <Text style={styles.Text}>{car.PriceHour} Lei Hora</Text>
                    </View>  
                </View>                
                <Card>
                    <Text h4>Proprietar: {car.user.last_name} {car.user.first_name}</Text>
                    <Text>Mail: {car.user.email}</Text>
                    <Text>Publicada: {car.user.created_at}</Text>
                </Card> 
                <View style={styles.bookView}>  
                    <Text h4>Completeaza pentru rezerva :</Text> 
                    <Spacer/>
                    <Text style={styles.Text}>Alege cum vrei sa inchiriezi</Text>          
                    <Picker>  
                        <Picker.Item label = "Hora" value = "" />
                        <Picker.Item label = "Zi" value = "" />
                    </Picker> 
                    <Text style={styles.Text}>Alege cate hore/zile...</Text>             
                     <Picker>  
                        <Picker.Item label = "1" value = "" />
                        <Picker.Item label = "2" value = "" />
                    </Picker> 
                    <Text h4 style={styles.Text}>Suma totala rezerva : 250 Lei</Text> 
                    <View style={styles.bookButton}>
                        <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
                            <Text h4 style={styles.bookText}>REZERVA</Text>
                        </TouchableOpacity>
                    </View>              
                </View>     
            </ScrollView>                       
        </AppStyle>
    );
}



CarDetailScreen.navigationOptions = {
    title: 'Rezerva',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        flex: 1,
        width: null,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 15
    },
    stars: {
        marginLeft:15,
        flexDirection: 'row'
    },
    title: {
        marginLeft:15,
        fontSize: 30
    },
    detailCarView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15

    },
    Text: {
        color: '#F08080',
    },
    detailPriceView: {
        backgroundColor: '#FFE4E1',
        justifyContent:'space-around',
        borderRadius: 10,
        paddingHorizontal: 15
    },
    bookView: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        backgroundColor: '#FFE4E1',
        margin: 15,
        padding:15
    
    },
    bookButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3CB371',
        borderRadius: 10,
        margin: 5
    },
    bookText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

export default CarDetailScreen;