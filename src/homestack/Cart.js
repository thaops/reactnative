import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Cart = ({ navigation }) => {
  const [soluong, setsoluong] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const soluongtang = () => {
    setsoluong(soluong + 1);
  };

  const giamluongtang = () => {
    if (soluong > 1) setsoluong(soluong - 1);
  };
  const tamtinh = parseFloat(200.000 * soluong).toLocaleString('vi-VN');
  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };
  const btnback = (item) => {
    navigation.navigate("Home");
  };
  return (
    <View>
        <View style={{height:30}}/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 30,
          paddingBottom: 0,
        }}
      >
        <Ionicons onPress={btnback} name="chevron-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>GIỎ HÀNG</Text>
        <AntDesign name="delete" size={24} color="black" />
      </View>
      <View style={{ height: 20 }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 40,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={toggleChecked}
          style={[styles.checkBox, isChecked && styles.checked]}
        >
          {/* Thêm biểu tượng hoặc văn bản cho nút tích vào đây */}
        </TouchableOpacity>
        <View>
          <Image
            style={{ backgroundColor: "#EEEEEE", width: 77, height: 77 }}
            source={require("../../img/imgitem1.png")}
          />
        </View>
        <View style={{ marginRight: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 3,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Spider Plant |{" "}
            </Text>
            <Text style={{ fontWeight: "300" }}>Ưa bóng</Text>
          </View>
          <View style={{ height: 10 }} />
          <Text style={{ fontSize: 16, fontWeight: "500", color: "green" }}>
          {tamtinh}.000đ
          </Text>
          <View style={{ height: 10 }} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flex: 1,
                paddingRight: 35,
              }}
            >
              <Octicons
                onPress={giamluongtang}
                name="diff-removed"
                size={24}
                color="black"
              />
              <Text>{soluong}</Text>
              <Octicons
                onPress={soluongtang}
                name="diff-added"
                size={24}
                color="black"
              />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "500" }}> Xoa</Text>
          </View>
        </View>
      </View>
      <View style={{height:'59%'}}/>
      <View>
        {/* Các phần tử hiển thị khác */}
        {isChecked && (
          <View style={styles.totalContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 14, fontWeight: "300" }}>Tạm tính:</Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>{tamtinh}.000đ</Text>
            </View>
            <View style={{ height: 10 }} />
            <TouchableOpacity
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "green",
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 13,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}
                >
                  Tiến hành thanh toán
                </Text>
                <AntDesign
                  style={{ paddingTop: 3 }}
                  name="right"
                  size={20}
                  color="#fff"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderColor: "black",
  },
  checked: {
    backgroundColor: "green",
    // hoặc màu khác thích hợp cho trạng thái đã tích
  },
  totalContainer: {
    
    padding: 30,
    
    
  },
});

export default Cart;
