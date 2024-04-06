import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screnbotap/Home";
import Profile from "./src/screnbotap/Profile";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/scrensolo/Login";
import { useNavigation } from "@react-navigation/native";
import Detail from "./src/homestack/Detail";
import Search from "./src/screnbotap/Search";
import Notification from "./src/screnbotap/Notification";
import Cart from "./src/homestack/Cart";
import Allcaytrong from "./src/homestack/Allcaytrong";
import Dangky from "./src/scrensolo/Dangky";
import BuyProduct from "./src/homestack/BuyProduct";
import UpdateProfile from "./src/profilestack/UpdateProfile";
import QA from "./src/profilestack/QA";
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const HomeStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Detail"
//         component={Detail}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

const StackNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          shadowOpacity: 9,
          shadowRadius: 8,
          elevation: 19,
          shadowOffset: {
            width: 0,
            height: -4,
          },
          borderTopWidth: -1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="home" size={24} color="black" />
            ) : (
              <Feather name="home" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="search1" size={24} color="black" />
            ) : (
              <AntDesign name="search1" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="notifications-outline" size={24} color="black" />
            ) : (
              <Ionicons name="notifications-outline" size={24} color="black" />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person-sharp" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StackNavigator"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Allcaytrong"
          component={Allcaytrong}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dangky"
          component={Dangky}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="BuyProduct"
          component={BuyProduct}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="QA"
          component={QA}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
