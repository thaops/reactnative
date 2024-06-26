import { StyleSheet, Text, TextInput, TouchableOpacity, View ,ToastAndroid} from "react-native";
import React, { useState, useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ThanhToan } from "../../reduct-toolkit/redux/reducers/BuySlice";

const BuyProduct = ({ route, navigation }) => {
  const { totalQuantity,ids,selectedProduct } = route.params;
  const [diaChi, setdiaChi] = useState("");
  const [textinputerr, settextinputerr] = useState("");
  const [selectedShipping, setSelectedShipping] = useState(null); 
  const [tongcong, setTongcong] = useState(0);
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);
  const buyData = useSelector((state)=>state.buy.buyData);
  const buyStatus = useSelector((state)=>state.buy.buyStatus)
  const name = loginData.loginData.data.name;
  const email = loginData.loginData.data.email;
  const phone = loginData.loginData.data.phone;
  const user = loginData.loginData.data._id;
  const products =ids;
  const total = tongcong;
  const img = selectedProduct.img;
  const title =  selectedProduct.title;
  const titlemini =  selectedProduct.titlemini;
  const gia =  selectedProduct.gia;
  const quantity =  selectedProduct.quantity;
  
  console.log('valuid',diaChi)

  useEffect(() => {
    // Tính tổng cộng dựa trên phương thức vận chuyển và số lượng sản phẩm
    let shippingCost = selectedShipping === "Nhanh" ? 15 : selectedShipping === "COD" ? 20 : 0;
    let total = totalQuantity * 1 + shippingCost;
    setTongcong(total);
  }, [selectedShipping, totalQuantity]);

  useEffect(()=>{
    console.log(buyStatus,buyData);
    if (buyStatus == "failed"){
      const status = 0
      dispatch(ThanhToan({user,products,total,img,title,titlemini,status}))
      ToastAndroid.show('Thanh Toán Thất Bại', ToastAndroid.SHORT);
    }else{
      console.log('lỗi thanh toán')
    }
      },[handleCheckout])
    
  const chettext = (data) => {
    console.log(data);
    setdiaChi(data);
    settextinputerr("");
  };



  const handleShippingSelect = (shippingMethod) => {
    setSelectedShipping(shippingMethod);
  };

  const handleCheckout = () => {
    let isValid = true;

    if (diaChi.trim() === "") {
      settextinputerr("Địa Chỉ Không được để trống!");
      isValid = false;
    } else {
      settextinputerr("");
    }

    if (!selectedShipping) {
  
      isValid = false;
    }

    if (isValid) {
      const status = 1
      dispatch(ThanhToan({user,products,total,img,title,titlemini,status,name,email,phone,gia,quantity,diaChi}))
      ToastAndroid.show('Thanh Toán Thành công', ToastAndroid.SHORT);
      navigation.goBack();
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
          <Text style={styles.textMain}>Thông tin khách hàng</Text>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        {/* Các trường nhập thông tin khách hàng */}
        <View style={styles.view}>
          <Text style={styles.textPhu}>{name}</Text>
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
          <Text style={styles.textPhu}>{email}</Text>
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
          <TextInput onChangeText={(data) => chettext(data)} placeholder="Địa chỉ" placeholderTextColor="#828282" style={styles.textPhu}></TextInput>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        {!!textinputerr && <Text style={styles.texterr}>{textinputerr}</Text>}
        <View style={styles.view}>
          <Text   placeholderTextColor="#828282" keyboardType="numeric" style={styles.textPhu}>{phone}</Text>
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
          <Text style={styles.textMain}>Phương thức vận chuyển</Text>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>

        {/* Lựa chọn phương thức vận chuyển */}
        <TouchableOpacity onPress={() => handleShippingSelect("Nhanh")} style={selectedShipping === "Nhanh" ? styles.selectedShipping : styles.view}>
          <Text style={[styles.textMain, selectedShipping === "Nhanh" ? { color: "green" } : null]}>Giao hàng Nhanh - 15.000đ</Text>
          <Text style={styles.textPhu}>Dự kiến giao hàng 5-7/9</Text>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleShippingSelect("COD")} style={selectedShipping === "COD" ? styles.selectedShipping : styles.view}>
          <Text style={[styles.textMain, selectedShipping === "COD" ? { color: "green" } : null]}>Giao hàng COD - 20.000đ</Text>
          <Text style={styles.textPhu}>Dự kiến giao hàng 4-8/9</Text>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </TouchableOpacity>

        {/* Hình thức thanh toán */}
        <View style={styles.view}>
          <Text style={styles.textMain}>Hình thức thanh toán</Text>
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
          <Text style={[styles.textMain, { color: "green" }]}>Thẻ VISA/MASTERCARD</Text>
          <View
            style={{
              width: "100%",
              height: 0.5,
              backgroundColor: "black",
              marginTop: 4,
            }}
          />
        </View>
        <View style={[styles.view, { marginTop: -10 }]}>
          <Text style={styles.textMain}>Thẻ ATM</Text>
        </View>
      </View>

      {/* Hiển thị tổng cộng */}
      <View>
        <View style={styles.viewtt}>
          <Text style={styles.textPhu}>Tạm tính</Text>
          <Text style={styles.textMain}>{totalQuantity}.000đ</Text>
        </View>
        <View style={styles.viewtt}>
          <Text style={styles.textPhu}>Phí vận chuyển</Text>
          <Text style={styles.textMain}>{selectedShipping === "Nhanh" ? "15.000đ" : selectedShipping === "COD" ? "20.000đ" : "0đ"}</Text>
        </View>
        <View style={styles.viewtt}>
          <Text style={styles.textPhu}>Tổng cộng</Text>
          <Text style={[styles.textMain, { color: "green" }]}>{tongcong}.000đ</Text>
        </View>
      </View>
      {/* Nút tiếp tục */}
      <TouchableOpacity onPress={handleCheckout} style={{ width: "90%", height: 50, backgroundColor: "#808080", alignSelf: "center", borderRadius: 8 }}>
        <Text style={{ alignSelf: "center", paddingTop: 16, fontWeight: "600", color: "#fff" }}>TIẾP TỤC</Text>
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
  textMain: {
    fontSize: 16,
    fontWeight: "500",
  },
  textPhu: {
    fontSize: 14,
    fontWeight: "300",
  },
  texterr: {
    color: "red",
    fontSize: 14,
    fontWeight: "700",
    paddingLeft: 40,
  },
  selectedShipping: {
    padding: 40,
    paddingBottom: 14,
    paddingTop: 14,
    backgroundColor: "#E0F2F1", // Màu nền xanh
  },
});
