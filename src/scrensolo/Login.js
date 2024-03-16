import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  const [textinput,settextinput] = useState("");
  const [textinputerr,settextinputerr] = useState("");
  const [pass,setpass] = useState("");
  const [passerr,setpasserr] = useState("");

  const chettext = (data) => {
    console.log(data);
    settextinput(data);
    settextinputerr("");
  };
 
  const checkpass = (data) => {
    console.log(data);
    setpass(data);
    setpasserr("");
  };

  const navigation = useNavigation();
  const handleCheckout = () => {
    let isValid = true;
  
    if (textinput.trim() === "") {
      settextinputerr("Không được để trống!");
      isValid = false;
    } else {
      settextinputerr("");
    }
  
    if (pass.trim() === "") {
      setpasserr("Không được để trống pass!");
      isValid = false;
    } else if (pass.trim().length < 4) {
      setpasserr("Mật khẩu phải có ít nhất 4 ký tự!");
      isValid = false;
    } else {
      setpasserr("");
    }
  
    if (isValid) {
      navigation.navigate("StackNavigator");
    }
  };

  const dangky = (item) => {
    navigation.navigate("Dangky");
  };
  
  return (
    <View>
      <Image
        style={{ width: "100%", height: 340 }}
        resizeMode="stretch"
        source={require("../../img/logo1.png")}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: 30,
          alignSelf: "center",
          fontStyle: "normal",
          
        }}
      >
        Chào mừng bạn
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 18,
          alignSelf: "center",
          fontStyle: "normal",
        }}
      >
        Đăng nhập tài khoản
      </Text>

      <View style={{ height: 30 }} />
      <View>
      <TextInput
      onChangeText={(data) =>  chettext(data)}
      style={!!textinputerr? styles.inputerr:styles.input}
        placeholder="Nhập email hoặc số điện thoại"
        placeholderTextColor="#828282"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {!! textinputerr &&<Text style={styles.texterr}>{textinputerr}</Text>}
      </View>
      
      <View style={{ height: 20 }} />
      <View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TextInput
        onChangeText={(data) =>  checkpass(data)}
          style={!!passerr? styles.inputerr:styles.input}
          placeholder="Pass"
          placeholderTextColor="#828282"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={{ position: "absolute", right: 50, alignSelf: "center" }}>
          <AntDesign name="eye" size={24} color="black" />
        </View>
      </View>
      {!! passerr &&<Text style={styles.texterr}>{passerr}</Text>}
      </View>
     

      <View style={{ height: 10 }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <AntDesign
            style={{ marginLeft: -15 }}
            name="circledowno"
            size={20}
            color="#009245"
          />
          <Text style={{ marginLeft: 10, color: "#009245", fontSize: 11 }}>
            Nhớ tài khoản
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: 10, color: "#009245", marginRight: -20 }}>
            Forgot Password ?{" "}
          </Text>
        </View>
      </View>

      <View style={{ height: 20 }} />

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
          Đăng Nhập
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
     
      <View style={{flexDirection:"row", justifyContent:"space-evenly", padding:90, marginTop:-70}}>
        <Text style={{fontSize:12, fontWeight:"400"}}>Bạn không có tài khoản</Text>
        <TouchableOpacity onPress={dangky}>
        <Text style={{fontSize:12, fontWeight:"400", color:"#009245"}}>Tạo tài khoán</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

export default Login;

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
    borderColor:"red",
    
  },
  texterr:{
    color:'red', 
    fontSize:14,
    fontWeight:"700",
    paddingLeft:40,
  }
});
