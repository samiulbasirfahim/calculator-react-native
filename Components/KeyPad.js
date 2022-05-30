import { StyleSheet, Text, View, TouchableHighlight, Alert, Button } from 'react-native'
import React from 'react'

export default function KeyPad({ number, setNumber, handleTriggerResult }) {
    const handleNumber = (n) => {
        if (number.length > 50) {
            return Alert.alert("Error", 'You cant insert more than 50 numbers');
        }
        if (number.length > 0) {
            const lastNumber = number.slice(number.length - 1, number.length);
            const mathSign = ['+', '-', '*', '/']
            if (mathSign.includes(lastNumber) && mathSign.includes(n)) {
                return setNumber(number.slice(0, number.length - 1) + n);
            }
        }

        setNumber(number + "" + n);
    }


    const handleBackspace = () => {
        if (number.length > 0) {
            setNumber(number.slice(0, number.length - 1));
            if (number.length === 1) {
                setNumber(0);
            }
        }

    }
    const handleAllClear = () => {
        setNumber(0);
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
                <Text onPress={handleBackspace} style={styles.keyButton}>{"<"}</Text>
                <Text onPress={handleAllClear} style={styles.keyButton}>{"c"}</Text>
                <Text onPress={handleTriggerResult} style={styles.keyButton}>{"="}</Text>
                <Text onPress={() => handleNumber(0)} style={styles.keyButton}>{"0"}</Text>
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
        padding: 40,
    },
    keyButton: {
        fontSize: 30,
        padding: 20,
    }
})