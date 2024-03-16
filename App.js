import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './StackNavigator';
import Bai1 from './lab/lab1/Bai1';
import Bai2 from './lab/lab1/Bai2';
import Bai3 from './lab/lab1/Bai3';
import Lab1 from './lab/lab1/Lab1';

export default function App() {
  return (
  <>
  <TabNavigator></TabNavigator>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
