import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from 'react-redux';
import Redux from "./Redux";
import Redux2 from "./Redux2";
import { store } from '../redux/store'; 

const Stack = createNativeStackNavigator();

const ReduxStack = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bai1"
            component={Redux}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bai2"
            component={Redux2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default ReduxStack;
