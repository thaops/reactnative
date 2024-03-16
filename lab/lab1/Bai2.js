// Bai2.js
import React from "react";
import { StyleSheet, View, ScrollView,Text, TouchableOpacity } from "react-native";
import Bai2costom from "./Bai2costom";
import Bai1 from "./Bai1";


const data = [
  {
    diadiem: "HỒ Tràm, Uvngc tàu",
    thoigian: "09:00-12:00AM,04/04/2024",
    phuongtien: "Xe bus",
    thoigianden: "21:00 - 22:00",
    img: require("../../img/dulich.png"),
  },

  {
    diadiem: "HỒ Tràm, Uvngc tàu",
    thoigian: "09:00-12:00AM,04/04/2024",
    phuongtien: "Xe bus",
    thoigianden: "21:00 - 22:00",
    img: require("../../img/dulich2.png"),
  },
  {
    diadiem: "HCM",
    thoigian: "09:00-12:00AM,04/04/2024",
    phuongtien: "Xe bus",
    thoigianden: "21:00 - 22:00",
    img: require("../../img/dulich3.png"),
  },
];

const data2 = [
  {
    diadiem: "HỒ Tràm, Uvngc tàu",
    thoigian: "09:00-12:00AM,04/04/2024",
    phuongtien: "Xe bus",
    thoigianden: "21:00 - 22:00",
    img: require("../../img/dulich2.png"),
  },
  {
    diadiem: "HCM",
    thoigian: "09:00-12:00AM,04/04/2024",
    phuongtien: "Xe bus",
    thoigianden: "21:00 - 22:00",
    img: require("../../img/dulich3.png"),
  },

  {
    diadiem: "HỒ Tràm, Uvngc tàu",
    thoigian: "09:00-12:00AM,04/04/2024",
    phuongtien: "Xe bus",
    thoigianden: "21:00 - 22:00",
    img: require("../../img/dulich.png"),
  },
];

const Bai2 = ({navigation}) => {
  const gobai1 = () => {
    
    navigation.navigate("Bai1")
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Bai2costom title="Lịch Trình" data={data} />
        
        <View>
          <Text style={styles.title}>Khách Sạn</Text>
          <View style={styles.item}>
            <View>
              <Text style={styles.textMain}>Ten khách sạn</Text>
              <Text style={styles.textItem}> Hồng Quỳnh</Text>
            </View>
            <View style={{height:20}}/>
            <View>
              <Text style={styles.textMain}>Giờ mở cửa</Text>
              <Text style={styles.textItem}> 06:00 AM - 12:00 AM</Text>
            </View>
            <View style={{height:20}}/>
            <View>
              <Text style={styles.textMain}>Địa điểm</Text>
              <Text style={styles.textItem}> 234QUang Trung,Hồ CHi Minh</Text>
            </View>
            <View style={{height:20}}/>
            <TouchableOpacity onPress={gobai1} style={{width:'100%', height:45, backgroundColor:'blue', borderRadius:5}}>
              <Text style={{fontSize:18,fontWeight:"600", color:'#fff',alignSelf:"center", paddingTop:10}}>Chi Tiết</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: "900",
    padding:20
  },
  item: {
    width: '90%',
    backgroundColor: "#EEEEEE",
    margin:20,
    borderRadius: 20,
    padding:20,
  
  },
  textMain: {
    fontSize: 16,
    fontWeight: "300",
    paddingBottom: 2,
  },
  textItem: {
    fontSize: 18,
    fontWeight: "500",
  },
});
