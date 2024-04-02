import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './StackNavigator';
import Bai2 from './lab/lab1/Bai2';
import Bai3 from './lab/lab1/Bai3';
import Lab1 from './lab/lab1/Lab1';
import Anim1 from './demo/Anim1'
import Anim2 from './demo/Anim2';
import Anim4 from './demo/Anim4';
import Anim5 from './demo/Anim5';
import Anim6 from './demo/Anim6';
import Anim3 from './demo/Anim3';
import Camera from './lab/lab3/Camera';
import Labanim from './demo/Labanim';
import Redux from './lab/Lab5/Redux';







export default function App() {
  return (
    <>
 <TabNavigator/>
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
