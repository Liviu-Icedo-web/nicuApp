import React from 'react';
import { View, StyleSheet } from 'react-native';

const AppStyle = (props) => (
        <View style={styles.AppStyle}>
            {props.children}
        </View>
    );

const styles = StyleSheet.create({
    AppStyle: {
        backgroundColor: '#FFF5EE',
        flex: 1,
        paddingBottom: 20
    }
});

export default AppStyle;

