import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Bai1 from "./Bai1";
import Bai2 from "./Bai2";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../../StackNavigator";

const Stack = createNativeStackNavigator();

const Lab1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bai1"
          component={Bai1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bai2"
          component={Bai2}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Lab1;

const styles = StyleSheet.create({});
