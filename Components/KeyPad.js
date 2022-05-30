import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function KeyPad() {
    return (
        <View style={styles.keyPad}>
            <Text>KeyPad</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    keyPad: {
        height: '80%',
        width: '100%',
        backgroundColor: '#434c5e',
    }
})