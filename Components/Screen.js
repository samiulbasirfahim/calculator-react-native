import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Screen() {
    return (
        <View style={styles.screen}>
            <Text>Math</Text>
            <Text>Result</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '20%',
        backgroundColor: '#2e3440',
    }
})