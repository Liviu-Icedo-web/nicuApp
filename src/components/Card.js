import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};


const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ddd',
        elevation: 1,
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        minHeight: 90,
        backgroundColor: '#ffff',
    
    }

});

export default Card;
