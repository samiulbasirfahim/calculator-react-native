import { StyleSheet, Text, View, TouchableHighlight, Alert, Button } from 'react-native'
import React from 'react'

export default function KeyPad({ number, setNumber, handleTriggerResult }) {
    const handleNumber = (n) => {
        if (number.length > 50) {
            return Alert.alert("Error", 'You cant insert more than 50 numbers');
        }
        const lastNumber = number.slice(number.length - 1, number.length);

        setNumber(number + "" + n);
    }
    return (
        <View style={{
            height: '70%',
            width: '100%',
            flexDirection: 'row',
        }}>
            <View style={styles.keyPad}>
                <View style={styles.keyPadRow}>
                    {[1, 2, 3].map(num => <TouchableHighlight onPress={() => handleNumber(num)}><Text style={styles.key}>{num}</Text></TouchableHighlight>)}
                </View>
                <View style={styles.keyPadRow}>
                    {[4, 5, 6].map(num => <TouchableHighlight onPress={() => handleNumber(num)}><Text style={styles.key}>{num}</Text></TouchableHighlight>)}
                </View>
                <View style={styles.keyPadRow}>
                    {[7, 8, 9].map(num => <TouchableHighlight onPress={() => handleNumber(num)}><Text style={styles.key}>{num}</Text></TouchableHighlight>)}
                </View>
                <View style={styles.keyPadRow}>
                    {["+", "-", "*", "/"].map(num => <TouchableHighlight onPress={() => handleNumber(num)}><Text style={styles.key}>{num}</Text></TouchableHighlight>)}
                </View>
            </View>
            <View style={styles.keyPadButton}>
                <Text onPress={() => Alert.alert()} style={styles.key}>{"<"}</Text>
                <Text onPress={() => Alert.alert()} style={styles.key}>{"c"}</Text>
                <Text onPress={() => Alert.alert()} style={styles.key}>{"="}</Text>
                <Text onPress={() => Alert.alert()} style={styles.key}>{"0"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    keyPad: {
        flex: 4,
        backgroundColor: '#434c5e',
        flexDirection: 'column',

    },
    keyPadRow: {
        flex: 4,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    keyPadButton: {
        flex: 1,
        flexDirection: "column-reverse",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#a3be8c",


    },
    key: {
        fontSize: 30,
        color: '#5e81ac',
        padding: 15,
    }
})