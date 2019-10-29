'use strict';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //Container
    AppStyle: {
        backgroundColor: '#FFF5EE',
        flex: 1,
    },
    //SearchBar
    backgroundSearchar: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    inputSearchStyle: {
        flex: 1,
        fontSize: 18
    },
    iconSearchStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    //CarListScreen
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
    titleCar: {
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
    },

    //CarCreateScreen
    CarCreateView: {
        flex: 1,
        justifyContent: 'center'
      
    },
     
    //CarDetailScreen
    imageDetail: {
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
    bookButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3CB371',
        borderRadius: 10,
        margin: 5
    },
    bookDetailView: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        backgroundColor: '#FFE4E1',
        margin: 15,
        padding:15
    
    },
  
    bookDetailText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    //signIn-UpScreen
    SignView: {
        flex: 1,
        justifyContent: 'center'
    },
    //AccoutScreen
    userView: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    //AuthForm,CarForm,UserForm
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    headerText: {
        fontSize: 30,
        paddingBottom: 10
    },

    //NavLink
    link: {
        color: '#F08080',
        fontSize: 16
    }
});
