import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React,{useEffect} from 'react'
import moment from 'moment';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch,useSelector} from "react-redux"
import { GetBill } from '../../lab/redux/reducers/GetBillSlice';


const renderItem = ({ item }) => (
  
  <View style={{ padding:40,paddingTop:10,paddingBottom:10 }}>
    <View style={{paddingTop:30}}>
        <Text style={{fontSize:16,fontWeight:'500'}}>Ngày {moment(item.date).format('DD-MM-YYYY GIờ HH:mm:ss')}</Text>
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
        source={{uri:item.img}}
      />
      <View style={{ paddingLeft: 20, paddingTop:20 }}>
      <Text style={{paddingBottom:10, fontSize:16,fontWeight:"500", color: item.trangthai === 'Đặt hàng Thất bại' ? 'red' : 'green'}}>Đặt hàng Thanh Cong</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize:16,fontWeight:"500"}}>{item.title}</Text>
          <Text style={{ paddingLeft: 5, paddingRight: 5,fontWeight:"900" }}>| |</Text>
          <Text>{item.titlemini}</Text>
        </View>
      </View>
    </View>
  </View>
);
const Notification = () => {
  const dispatch = useDispatch();
  const userBillData = useSelector(state => state.userBill.userBillData);
  const loginData = useSelector(state => state.login);
  const user = loginData.loginData.data._id;
  useEffect(()=>{
    dispatch(GetBill(user));
    
  },[dispatch])
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
        data={userBillData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})