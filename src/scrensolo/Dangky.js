import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import React, { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { DangKyTaiKhoan } from "../../reduct-toolkit/redux/reducers/RegisterSlice";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Dangky = () => {
  const [name, setname] = useState("");
  const [textinputerrname, settextinputerrname] = useState("");
  const [email, setemail] = useState("");
  const [textinputerr, settextinputerr] = useState("");
  const [phone, setphone] = useState("");
  const [phoneer, setphoneerr] = useState("");
  const [pass, setpass] = useState("");
  const [passerr, setpasserr] = useState("");
  const [nhaplaipass, setnhaplaipass] = useState("");
  const [nhaplaipasserr, setnhaplaipasserr] = useState("");


  const dispatch = useDispatch();
  const {registerData,registerStatus} = useSelector((state)=>state.register)

  useEffect(()=>{
console.log(registerStatus,registerData);
if (registerStatus == "succeeded"){
  if(registerData.code == 1){
    ToastAndroid.show('Đăng Ký thành công', ToastAndroid.SHORT);
  navigation.goBack();
  
}
}else{
  console.log('lỗi đăng nhập ')
}
  },[registerStatus])



  const chettext = (data) => {
    console.log(data);
    setemail(data);
    settextinputerr("");
  };

  const chettextname = (data) => {
    console.log(data);
    setname(data);
    settextinputerrname("");
  };

  const checkpass = (data) => {
    console.log(data);
    setpass(data);
    setpasserr("");
  };
  
  const checkphone = (data) => {
    
    setphone(data);
    setphoneerr("");
  };
  const checknhaplaipass = (data) => {
    console.log(data);
    setnhaplaipass(data);
    setnhaplaipasserr("");
  };
  const navigation = useNavigation();
  const handleCheckout = () => {
    let isValid = true;

    if (email.trim() === "") {
      settextinputerr("Không được để trống!");
      isValid = false;
    } else {
      settextinputerr("");
    }

    if (name.trim() === "") {
      settextinputerrname("Không được để trống!");
      isValid = false;
    } else {
      settextinputerrname("");
    }

    if (phone.trim() === "") {
      setphoneerr("Không được để trống sdt!");
      isValid = false;
    } else {
      setphoneerr("");
    }

    if (pass.trim() === "") {
      setpasserr("Không được để trống pass!");
      isValid = false;
    } else if (pass.trim().length < 0) {
      setpasserr("Mật khẩu phải có ít nhất 4 ký tự!");
      isValid = false;
    } else {
      setpasserr("");
    }


    if (nhaplaipass.trim() === "") {
      setnhaplaipasserr("Không được để trống pass!");
      isValid = false;
    } else if (nhaplaipass.trim().length < 0) {
      setnhaplaipasserr("Mật khẩu phải có ít nhất 4 ký tự!");
      isValid = false;
    } else {
      setnhaplaipasserr("");
    }

    if (isValid) {
      dispatch(DangKyTaiKhoan({name,email,phone,pass}));
      // navigation.navigate("Login");
    }
  };

  const dangky = (item) => {
    navigation.goBack();
  };

  return (
    <View>
      <Image
        style={{ width: "100%", height: 230 }}
        resizeMode="stretch"
        source={require("../../img/logo.png")}
      />
      <View style={{marginTop:-20}}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 30,
          alignSelf: "center",
          fontStyle: "normal",
        }}
      >
        Đăng ký
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 18,
          alignSelf: "center",
          fontStyle: "normal",
        }}
      >
        Tạo tài khoản 
      </Text>
      </View>
      

      <View style={{ height: 30 }} />
      <View>
        <TextInput
          onChangeText={(data) => chettextname(data)}
          style={!!textinputerr ? styles.inputerr : styles.input}
          placeholder="Nhập Tên"
          placeholderTextColor="#828282"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {!!textinputerrname && <Text style={styles.texterr}>{textinputerrname}</Text>}
      </View>

      <View style={{ height: 20 }} />

      <View>
        <TextInput
          onChangeText={(data) => chettext(data)}
          style={!!textinputerr ? styles.inputerr : styles.input}
          placeholder="Nhập email "
          placeholderTextColor="#828282"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {!!textinputerr && <Text style={styles.texterr}>{textinputerr}</Text>}
      </View>
      <View style={{ height: 20 }} />
      <View>
        <TextInput
          onChangeText={(data) => checkphone(data)}
          style={!!phoneer ? styles.inputerr : styles.input}
          placeholder="Nhập số phone"
          placeholderTextColor="#828282"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {!!phoneer && <Text style={styles.texterr}>{phoneer}</Text>}
      </View>

      <View style={{ height: 20 }} />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TextInput
            onChangeText={(data) => checkpass(data)}
            style={!!passerr ? styles.inputerr : styles.input}
            placeholder="Pass"
            placeholderTextColor="#828282"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View
            style={{ position: "absolute", right: 50, alignSelf: "center" }}
          >
            <AntDesign name="eye" size={24} color="black" />
          </View>
        </View>
        {!!passerr && <Text style={styles.texterr}>{passerr}</Text>}
      </View>
      <View style={{ height: 20 }} />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TextInput
            onChangeText={(data) => checknhaplaipass(data)}
            style={!!passerr ? styles.inputerr : styles.input}
            placeholder="Nhap lai Pass"
            placeholderTextColor="#828282"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View
            style={{ position: "absolute", right: 50, alignSelf: "center" }}
          >
            <AntDesign name="eye" size={24} color="black" />
          </View>
        </View>
        {!!nhaplaipasserr && <Text style={styles.texterr}>{nhaplaipasserr}</Text>}
      </View>
      <View style={{ height: 10 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <View style={{alignContent: "center" }}>
          <Text>
            Để đăng ký tài khoản, bạn đồng ý Terms & 
          </Text>
          <Text style={{alignSelf:"center"}}> Conditions and Privacy <Text style={{color:'red'}}>Policy</Text></Text>
        </View>
      </View>

      <View style={{ height: 10 }} />

      <TouchableOpacity
        onPress={handleCheckout}
        style={{
          width: "80%",
          height: 53,
          backgroundColor: "#009245",
          alignSelf: "center",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            marginTop: 10,
            fontSize: 20,
            color: "#fff",
            fontWeight: "700",
          }}
        >
          Đăng ký
        </Text>
      </TouchableOpacity>
      <View style={{ height: 20 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 120,
            height: 2,
            backgroundColor: "#009245",
            marginLeft: 20,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            marginLeft: -20,
            marginRight: -20,
          }}
        >
          {" "}
          Hoặc
        </Text>
        <View
          style={{
            width: 120,
            height: 2,
            backgroundColor: "#009245",
            marginRight: 20,
          }}
        />
      </View>
      <View style={{ height: 30 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingLeft: 120,
          paddingRight: 120,
        }}
      >
        <Image source={require("../../img/google.png")} />
        <Image source={require("../../img/facebook.png")} />
      </View>

     
    </View>
  );
};

export default Dangky;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 53,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 0.5,
    fontWeight: "700",
    paddingHorizontal: 17,
    paddingVertical: 11,
    color: "#828282",
    alignSelf: "center",
    justifyContent: "space-evenly",
  },
  inputerr: {
    width: "80%",
    height: 53,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 0.5,
    fontWeight: "700",
    paddingHorizontal: 17,
    paddingVertical: 11,
    color: "#828282",
    alignSelf: "center",
    justifyContent: "space-evenly",
    borderColor: "red",
  },
  texterr: {
    color: "red",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 40,
  },
});
