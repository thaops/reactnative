import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {useDispatch,useSelector} from "react-redux"

const Profile = ({navigation}) => {

  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);
  console.log('value:',loginData.loginData.data.name)
  const name = loginData.loginData.data.name;
  const email = loginData.loginData.data.email;

  const btnUpData = (item) => {
    navigation.navigate("UpdateProfile");
  };
  const btnQA = (item) => {
    navigation.navigate("QA");
  };
  return (
    <View>
      <View style={{ height: 50 }} />
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>PROFILE</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          padding: 40,
          alignItems: "center",
          paddingTop: 30,
          paddingBottom:10
        }}
      >
        <Image
          style={{ height: 39, width: 39, borderRadius: 50 }}
          source={require("../../img/avatar.png")}
        />
        <View style={{ marginLeft: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {name}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "300" }}>
            {email}
          </Text>
        </View>
      </View>
      <View style={{padding:40, }}>
        <Text style={{fontSize:16, fontWeight:"300"}}>Chung</Text>
        <View style={{width:'100%',height:0.5,backgroundColor:'black',marginTop:4}}/>
        <TouchableOpacity onPress={btnUpData}>
        <Text style={styles.text}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        
        <Text style={styles.text}>Cẩm nang trồng cây</Text>
        <Text style={styles.text}>Lịch sử giao dịch</Text>
        <TouchableOpacity onPress={btnQA}>
        <Text style={styles.text}>Q & A</Text>
        </TouchableOpacity>
        
        <View style={{height:40}}/>
        <Text style={{fontSize:16, fontWeight:"300"}}>Bảo mật và Điều khoản</Text>
        <View style={{width:'100%',height:0.5,backgroundColor:'black',marginTop:4}}/>

        <Text style={styles.text}>Điều khoản và điều kiện</Text>
        <Text style={styles.text}>Chính sách quyền riêng tư</Text>
        <Text style={[styles.text,{color:'red'}]}>Đăng xuất</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text:{
    fontSize:16, fontWeight:"500", paddingTop:25
  }
});
