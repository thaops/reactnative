import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { CapNhatNguoiDung } from "../../lab/redux/reducers/UpDataSlice";

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const upDataStatus  = useSelector(state => state.upData.upDataStatus);
  const loginData = useSelector(state => state.login);
  useEffect(() => {
    if (loginData.loginData) {
      setName(loginData.loginData.data.name);
      setEmail(loginData.loginData.data.email);
      setPhone(loginData.loginData.data.phone);
    }
  }, [loginData]);

  const luuUpdata = () => {
    const  _id = loginData.loginData.data._id; 
    console.log('valueID',_id)

    const userData = { _id, name, email, phone }; 
    dispatch(CapNhatNguoiDung(userData))
      .then((response) => {
        if (upDataStatus === "succeeded") {
          if(upDataStatus.code = 1){
          ToastAndroid.show('Cap Nhat Nguoi Dung thành công', ToastAndroid.SHORT);
          navigation.goBack();
          }
        } else {
          console.log('lỗi ');
        }
      })
      .catch(error => console.error('Lỗi khi cập nhật hồ sơ:', error));
  };

  const textname = (data) => {
    setName(data);
  };
  const textemail = (data) => {
    setEmail(data);
  };
  const textphone = (data) => {
    setPhone(data);
  };


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
      <View>
        <View style={{ padding: 40, paddingBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "400" }}>
            Thông tin sẽ được lưu cho lần mua kế tiếp. {"\n"}
            Bấm vào thông tin chi tiết để chỉnh sửa.
          </Text>
        </View>

        <View style={styles.view}>
          <TextInput onChangeText={(data) => textname(data)} style={styles.textPhu} value={name} />
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
          <TextInput onChangeText={(data) => textemail(data)} style={styles.textPhu} value={email} />
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
          <TextInput style={styles.textPhu} value="60 Láng Hạ, Ba Đình, Hà Nộiio" />
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
          <TextInput onChangeText={(data) => textphone(data)} style={styles.textPhu} value={phone} />
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={{ height: '33%' }} />
        <TouchableOpacity onPress={luuUpdata} style={{ width: '90%', height: 50, backgroundColor: '#808080', alignSelf: "center", borderRadius: 8 }}>
          <Text style={{ alignSelf: "center", paddingTop: 16, fontWeight: "600", color: '#fff' }}>LƯU THÔNG TIN</Text>
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
  textPhu: {
    fontSize: 14,
    fontWeight: "300"
  }
});
