import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';

export default function App() {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: "#4c566a", height: "100%", width: "100%" }}>
      <Screen />
      <KeyPad />
    </SafeAreaView>
  );
}