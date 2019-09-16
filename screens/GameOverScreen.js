import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const GameOverScreen = (props) => {

    return (
        <View style={styles.screen}>
           <Text>The game is over!</Text>
           <Text>Number of rounds: {props.roundsNumber}</Text>
           <Text>Number was: {props.userNumber}</Text>
           <Button title="New Game" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameOverScreen;