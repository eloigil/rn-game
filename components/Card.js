import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: .26,
        backgroundColor: '#fff',
        elevation: 5, // shadow for android (not supporting shadows)
        padding: 20,
        borderRadius: 10,
    },
});

export default Card;