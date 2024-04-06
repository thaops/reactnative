import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import { store } from './lab/redux/store';







export default function App() {
  return (
    <>
    <Provider store={store}>
    <TabNavigator/>
    </Provider>

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
