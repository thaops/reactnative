import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const UpdateProfile = ({ navigation }) => {
  return (
    <View>
      <View style={{ height: 50 }} />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Ionicons
          style={{ flex: 1, paddingLeft: 40 }}
          name="chevron-back"
          size={24}
          color="black"
        />
        <Text
          style={{
            paddingRight: 110,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          CHỈNH SỬA THÔNG TIN
        </Text>
      </View>
      <View style={{ height: 40 }} />
      <View style={{ alignSelf: "center" }}>
        <Image
          style={{ height: 90, width: 90, borderRadius: 50 }}
          source={require("../../img/avatar.png")}
        />
      </View>
      <View style={{}}>
        <View style={{padding:40,paddingBottom:20}}>
        <Text style={{fontSize:14,fontWeight:"400"}}>
          Thông tin sẽ được lưu cho lần mua kế tiếp. {"\n"}
          Bấm vào thông tin chi tiết để chỉnh sửa.
        </Text>
        </View>
       
        <View style={styles.view}>
          <TextInput style={styles.textPhu}>Trần Minh Trí</TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={styles.view}>
          <TextInput style={styles.textPhu}>tranminhtri@gmail.com</TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={styles.view}>
          <TextInput style={styles.textPhu}>60 Láng Hạ, Ba Đình, Hà Nộiio</TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={styles.view}>
          <TextInput style={styles.textPhu}>0123456789</TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={{height:'33%'}}/>
        <TouchableOpacity style={{width:'90%', height:50, backgroundColor:'#808080',alignSelf:"center", borderRadius:8}}>
        <Text style={{alignSelf:"center", paddingTop:16, fontWeight:"600", color:'#fff'}}>LƯU THÔNG TIN</Text>
      </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
    view: {
        padding: 40,
        paddingBottom: 15,
        paddingTop: 15,
      },
      textPhu:{
        fontSize:14,
        fontWeight:"300"
      }
});
