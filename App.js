import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import KeyPad from './Components/KeyPad';
import Screen from './Components/Screen';
import useMath from './hooks/useMath';

export default function App() {
  const { number, setNumber, result, handleTriggerResult } = useMath();
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: "#4c566a", height: "100%", width: "100%" }}>
      <Screen number={number} result={result} />
      <KeyPad setNumber={setNumber} number={number} handleTriggerResult={handleTriggerResult} />
    </SafeAreaView>
  );
}