import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Anim1 from './Anim1'
import Anim2 from './Anim2'
import Anim3 from './Anim3'
import Anim4 from './Anim4'
import Anim5 from './Anim5'
import Anim6 from './Anim6'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Labanim = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Anim1"
          component={Anim1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anim2"
          component={Anim2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anim3"
          component={Anim3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anim4"
          component={Anim4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anim5"
          component={Anim5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Anim6"
          component={Anim6}
          options={{ headerShown: false }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Labanim

const styles = StyleSheet.create({})