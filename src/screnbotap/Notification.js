import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    key: "1",
    img: require("../../img/imgitem1.png"),
    img2: require("../../img/imgitem1new2.png"),
    title: "Spider Plant",
    titlemini: "Ưa sáng",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Nhỏ",
    xuatxu: "Việt Nam",
    tinhtrang: " 100 ",
    trangthai:"Đặt hàng Thành công"
  },
  {
    key: "2",
    img: require("../../img/imgitem2.png"),
    img2: require("../../img/imgitem2new.png"),
    title: "Rose ",
    titlemini: "Ưa sáng",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Lớn",
    xuatxu: "Châu phi",
    tinhtrang: " 153 ",
    trangthai:"Đặt hàng Thất bại"
  },
  
];

const renderItem = ({ item }) => (
  <View style={{ padding:40,paddingTop:10,paddingBottom:10 }}>
    <View style={{paddingTop:30}}>
        <Text style={{fontSize:16,fontWeight:'500'}}>Thứ tư, 03/09/2021</Text>
      </View>
      <View>
      <View style={{height:0.5, backgroundColor:'#000', marginTop:6,marginBottom:6}}/>
      </View>
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{
          width: 77,
          height: 77,
          borderRadius: 8,
          backgroundColor:'#EEEEEE',
        }}
        source={item.img}
      />
      <View style={{ paddingLeft: 20 }}>
      <Text style={{paddingBottom:10, fontSize:16,fontWeight:"500", color: item.trangthai === 'Đặt hàng Thất bại' ? 'red' : 'green'}}>{item.trangthai}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize:16,fontWeight:"500"}}>{item.title}</Text>
          <Text style={{ paddingLeft: 5, paddingRight: 5,fontWeight:"900" }}>| |</Text>
          <Text>{item.titlemini}</Text>
        </View>
        <Text style={{paddingTop:10,fontSize:14,fontWeight:"400"}}>còn{item.tinhtrang}sp</Text>
      </View>
    </View>
  </View>
);
const Notification = () => {
  return (
    <View>
      <View style={{height:50}}/>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
      <Ionicons style={{ flex:1, paddingLeft:40}} name="chevron-back" size={24} color="black" />
      <Text style={{ paddingRight:130, fontSize:16, fontWeight:'500'}}>LỊCH SỬ GIAO DỊCH</Text>
      </View>
      
      <View style={{ height: 0 }} />
      <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}

      />
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})