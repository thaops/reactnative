import { StyleSheet, Text, View, Image, TouchableOpacity,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { LayThongTinNguoiDUng } from "../../reduct-toolkit/redux/reducers/GetUserSlice";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.login);
  const getUserData = useSelector((state) => state.getUser.getUserData);
  const _id = loginData.loginData.data._id;

  useEffect(() => {
    dispatch(LayThongTinNguoiDUng(_id));
  }, [dispatch, _id]);

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 
  useEffect(() => {
    if (getUserData.length > 0) {
      setName(getUserData[0].name);
      setEmail(getUserData[0].email);
    }
  }, [getUserData]);

  const btnUpData = (item) => {
    navigation.navigate("UpdateProfile");
  };
  const btnQA = (item) => {
    navigation.navigate("QA");
  };

  const handleLogout = () => {

    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn đăng xuất?",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
        { text: "OK", onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Dangky' }] }) },
      ],
      { cancelable: false }
    );
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
          paddingBottom: 10,
        }}
      >
        <Image
          style={{ height: 39, width: 39, borderRadius: 50 }}
          source={require("../../img/avatar.png")}
        />
        <View style={{ marginLeft: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>{name}</Text>
          <Text style={{ fontSize: 14, fontWeight: "300" }}>{email}</Text>
        </View>
      </View>
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 16, fontWeight: "300" }}>Chung</Text>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "black", marginTop: 4 }}
        />
        <TouchableOpacity onPress={btnUpData}>
          <Text style={styles.text}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Cẩm nang trồng cây</Text>
        <Text style={styles.text}>Lịch sử giao dịch</Text>
        <TouchableOpacity onPress={btnQA}>
          <Text style={styles.text}>Q & A</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
        <Text style={{ fontSize: 16, fontWeight: "300" }}>Bảo mật và Điều khoản</Text>
        <View
          style={{ width: "100%", height: 0.5, backgroundColor: "black", marginTop: 4 }}
        />

        <Text style={styles.text}>Điều khoản và điều kiện</Text>
        <Text style={styles.text}>Chính sách quyền riêng tư</Text>
        <TouchableOpacity onPress={handleLogout}>
        <Text style={[styles.text, { color: "red" }]}>Đăng xuất</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 25,
  },
});
