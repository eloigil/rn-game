import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import Colors from '../constants/Colors';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) { 
        return generateRandomBetween(min, max, exclude);
    }

    return randomNum;
}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props. userChoice));
    
    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    
    const {userChoice, onGameOver} = props

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)
            ) {
            Alert.alert("Don't lie", 'You know that this is wrong!', [{text: 'sorry', style: 'cancel'}] )
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }
    return (
        <View style={styles.screen}>
            <Text>Oponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={() => {nextGuessHandler('lower')}}></Button>
                <Button title="GREATER" onPress={() => {nextGuessHandler('greater')}}></Button>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

export default GameScreen;