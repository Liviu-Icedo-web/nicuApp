'use strict';
import {StyleSheet} from 'react-native';

const PRIMARY_COLOR = "#F5FFFA"; 
const SECONDARY_COLOR = '#dadada';
const THIRD_COLOR = '#08ffc8';
const QUART_COLOR = '#204969';

const WHITE = '#fff';
const GRAY = '#D3D3D3';
const BORDER_COLOR = '#ddd';


export default StyleSheet.create({
    //Container
    AppStyle: {
        backgroundColor: PRIMARY_COLOR,
        flex: 1,
    },

    AppSecondaryStyle: {
        backgroundColor: QUART_COLOR,
        flex: 1,
    },

    AppThirdStyle: {
        backgroundColor: THIRD_COLOR,
        flex: 1,
    },

    //Home
    HomeView:{
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 40,

    },
    HomeHeaderView:{
        marginTop: 50,
        marginBottom: 10,
    },
    HomeHeaderText: {
        color: WHITE,
        fontSize: 30,
        fontWeight: 'bold'

    },
    HomeCardView:{
        padding: 5,
    },
    HomeCardSubtitle: {
        color: GRAY,
        padding: 7,
        fontSize: 15,
        fontWeight:'bold'
    },
    HomeCardTitle:{
       color: QUART_COLOR,
        padding: 7,
        fontSize: 27,
        fontWeight:'bold'
    },
    HomeCardImage:{
        height: 200,
        width: null,
    },

    ButtonView:{
        justifyContent: 'center',
        alignItems: 'center',  
    },
    TouchableStyle:{
        backgroundColor: THIRD_COLOR,
        borderRadius: 15,
        marginBottom: -40,
        alignContent: 'center',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    ButtonText:{
        color: QUART_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
    },
    //SearchBar
    backgroundSearchar: {
        marginTop: 10,
        backgroundColor: WHITE,
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
        backgroundColor: SECONDARY_COLOR,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    priceHourText: {
        color: QUART_COLOR ,
        fontWeight: 'bold'
    },
    priceDayView: {
        flexDirection: 'column',
        backgroundColor: THIRD_COLOR ,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    priceDayText: {
        color: QUART_COLOR ,
        fontWeight: 'bold'
    },
    bookView: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: QUART_COLOR,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    bookText: {
        color: WHITE,
        fontWeight: 'bold'
    },
    detailTextCar: {
        color: GRAY,
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
        borderColor: BORDER_COLOR,
        margin: 15
    },
    stars: {
        marginLeft:15,
        flexDirection: 'row',
    },
    star :{
        color: WHITE 
    },
    title: {
        marginLeft:15,
        fontSize: 30,
        color: WHITE,
    },
    info:{
        color: WHITE
    },
    detailCarView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15

    },
    Text: {
        color:  QUART_COLOR ,
        fontWeight: 'bold'
    },
    detailPriceView: {
        backgroundColor: THIRD_COLOR ,
        justifyContent:'space-around',
        borderRadius: 10,
        paddingHorizontal: 15
    },
    bookButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: QUART_COLOR,
        borderRadius: 10,
        margin: 5
    },
    bookDetailView: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: BORDER_COLOR ,
        backgroundColor: PRIMARY_COLOR,
        margin: 15,
        padding:15
    
    },
  
    bookDetailText: {
        color: WHITE,
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
        color: QUART_COLOR ,
        fontSize: 16
    },

    //Card
    containerStyle: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: BORDER_COLOR,
        elevation: 1,
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        minHeight: 90,
        backgroundColor: WHITE,
    
    },

    //Spacer
    spacer: {
        margin: 15,
    
    },

    //Account
    iconColor: {
        color: QUART_COLOR
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: SECONDARY_COLOR,
        borderBottomRightRadius: 20,
        padding: 10
    },
    userDetail:{
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        elevation: 1,
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 20,
        minHeight: 90,
        backgroundColor: WHITE,
    },

    //OwnCar
    OwnControlsView: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: QUART_COLOR,
        margin: 10,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    OwnControlsIcon: {
        color: WHITE
    },



    // Check login
    CheckView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: THIRD_COLOR,
        padding: 10
    },
    CheckText: {
        flex: 9,
        color: QUART_COLOR,
        fontWeight: 'bold',
        marginRight: 5
    },
    CheckIcon:{
        flex: 1,
        color: QUART_COLOR,
        marginRight: 5
    }

});
