import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
const Notification = () => {
  return (
    <View>
      <View style={{height:50}}/>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
      <Ionicons style={{ flex:1, paddingLeft:40}} name="chevron-back" size={24} color="black" />
      <Text style={{flex:1, paddingRight:130, fontSize:16, fontWeight:'500'}}>THÔNG BÁO</Text>
      </View>
      <View style={{padding:40}}>
        <Text style={{fontSize:16,fontWeight:'500'}}>Thứ tư, 03/09/2021</Text>
        <View style={{width:'100%', height:0.5, backgroundColor:'black', marginTop:4}}/>
      </View>
      <View style={{ height: 20 }} />
      <View>
        <Text style={{fontSize:14,fontWeight:'500', alignSelf:'center'}}>Hiện chưa có thông báo nào cho bạn</Text>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})