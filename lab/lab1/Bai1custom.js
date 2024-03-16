import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Bai1custom = ({ left, title, right }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 40,
          paddingBottom: 10,
        }}
      >
        <View>{left}</View>
        <Text style={!!right? styles.title :styles.title2}>{title}</Text>
        <View>{right}</View>
        
      </View>
      <View style={{ width: "100%", height: 0.5, backgroundColor: "black" }} />
    </View>
  );
};

export default Bai1custom;

const styles = StyleSheet.create({
  title:{
    fontSize:16, fontWeight:"500",
    
  },
  title2:{
    fontSize:16, fontWeight:"500",
    marginRight:15
  }
});
