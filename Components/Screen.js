import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen({ number, result }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.mathText}>{number}</Text>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '20%',
        backgroundColor: '#2e3440',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    mathText: {
        color: '#5e81ac',
        fontSize: 30,
    },
    resultText: {
        color: '#bf616a',
        fontSize: 60,
        fontWeight: "bold"
    }
})