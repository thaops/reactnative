import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React,{useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const BuyProduct = ({navigation}) => {
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
  
    const handleCheckout = () => {
      let isValid = true;
    
      if (textinput.trim() === "") {
        settextinputerr("Địa Chỉ Không được để trống!");
        isValid = false;
      } else {
        settextinputerr("");
      }
    
      if (pass.trim() === "") {
        setpasserr("Không được để trống Số điện thoại!");
        isValid = false;
      } else {
        setpasserr("");
      }
    
      if (isValid) {
        navigation.navigate("StackNavigator");
      }
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
            flex: 1,
            paddingRight: 110,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          THANH TOÁN
        </Text>
      </View>
      <View>
        <View style={styles.view}>
          <Text style={styles.textMain}>
            Thông tin khách hàng
          </Text>
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
          <Text style={styles.textPhu}>Trần Minh Trí</Text>
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
          <Text style={styles.textPhu}>
            tranminhtri@gmail.com
          </Text>
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
          <TextInput onChangeText={(data) =>  chettext(data)} placeholder="Địa chỉ"
          placeholderTextColor="#828282" style={styles.textPhu}></TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        {!! textinputerr &&<Text style={styles.texterr}>{textinputerr}</Text>}
        <View style={styles.view}>
          <TextInput  onChangeText={(data) =>  checkpass(data)} placeholder="Số điện thoại"
          placeholderTextColor="#828282"  keyboardType="numeric"  style={styles.textPhu}></TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        {!! passerr &&<Text style={styles.texterr}>{passerr}</Text>}
        <View style={styles.view}>
          <Text style={styles.textMain}>
            Phương thức vận chuyển
          </Text>
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
          <Text style={[styles.textMain,{color:'green'}]}>
            Giao hàng Nhanh - 15.000đ
          </Text>
          <Text style={styles.textPhu}>
            Dự kiến giao hàng 5-7/9
          </Text>
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
          <Text style={styles.textPhu}>
            Giao hàng Nhanh - 15.000đ
          </Text>
          <Text style={styles.textPhu}>
            Dự kiến giao hàng 5-7/9
          </Text>
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
          <Text style={styles.textMain}>
            Hình thức thanh toán
          </Text>
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
          <Text style={[styles.textMain,{color:'green'}]}>
            Thẻ VISA/MASTERCARD
          </Text>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={[styles.view,{marginTop:-10}]}>
          <Text style={styles.textMain}>Thẻ ATM</Text>
          
        </View>
      </View>
      <View>
        <View style={styles.viewtt}>
          <Text style={styles.textPhu}>Tạm tính</Text>
          <Text style={styles.textMain}>500.000đ</Text>
        </View>
        <View style={styles.viewtt}>
          <Text style={styles.textPhu}>Phí vận chuyển</Text>
          <Text style={styles.textMain}>15.000đ</Text>
        </View>
        <View style={styles.viewtt}>
          <Text style={styles.textPhu}>Tổng cộng</Text>
          <Text style={[styles.textMain,{color:'green'}]}>515.000đ</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleCheckout} style={{width:'90%', height:50, backgroundColor:'#808080',alignSelf:"center", borderRadius:8}}>
        <Text style={{alignSelf:"center", paddingTop:16, fontWeight:"600", color:'#fff'}}>TIẾP TỤC</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BuyProduct;

const styles = StyleSheet.create({
  view: {
    padding: 40,
    paddingBottom: 14,
    paddingTop: 14,
  },
  viewtt: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: 0,
    paddingBottom: 10,
  },
  textMain:{
    fontSize:16,
    fontWeight:"500"
  },
  textPhu:{
    fontSize:14,
    fontWeight:"300"
  },
  texterr:{
    color:'red', 
    fontSize:14,
    fontWeight:"700",
    paddingLeft:40,
  }
});
