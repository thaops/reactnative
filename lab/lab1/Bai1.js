import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Bai1custom from "./Bai1custom";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Bai1 = ({navigation}) => {
  const gobai2 = () => {
    
    navigation.navigate("Bai2")
  };
  return (
    <View>
      <TouchableOpacity onPress={gobai2}>
      <Bai1custom
        left={<Ionicons name="chevron-back" size={24} color="black" />}
        title={"Header"}
        right={<Foundation name="shopping-cart" size={24} color="black" />}
        
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={gobai2}>
      <Bai1custom
        left={<Ionicons name="chevron-back" size={24} color="black" />}
        title={"Header"}
        onPress={gobai2}
        
      />
      </TouchableOpacity>
      

      <Bai1custom
        left={<Ionicons name="chevron-back" size={24} color="black" />}
      />
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({});
