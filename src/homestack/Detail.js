import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from '@expo/vector-icons';

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  const [soluong, setsoluong] = useState(1);

  const tang = () => {
    setsoluong(soluong + 1);
  };

  const giam = () => {
    if (soluong > 0) {
      setsoluong(soluong - 1);
    }
  };

  const tinhTamTinh = () => {
    const gia = item && item.gia ? parseFloat(item.gia) : 0;
    return (gia * soluong).toLocaleString('vi-VN') + 'đ';
  };

  const btn = () =>{
    try {
      console.log('Mua thành công');
      navigation.navigate('StackNavigator');
    } catch (error) {
      console.log(error);
    }
  }

  const btnback = () => {
    navigation.navigate("Home");
  };

  const btnCart = () => {
    try {
      console.log('Them vào gio hang công');
      navigation.navigate('Cart', { soluong, item }); // Truyền số lượng và thông tin sản phẩm qua params
    } catch (error) {
      console.log(error);
    }
  };

  const btnallcaytrong = () => {
    navigation.navigate("Home");
  };

  const chonMuaColor = soluong === 0 ? "#ccc" : "green";
  const chonMuaDisabled = soluong === 0;

  return (
    <View>
      <View style={{ height: 40, backgroundColor: "#fff" }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 30, backgroundColor: "#fff" }}>
        <Ionicons onPress={btnback}  name="chevron-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 16, fontWeight: 500 }}>{item.title}</Text>
        <AntDesign onPress={btnCart} name="shoppingcart" size={24} color="black" />
      </View>
      {/* ảnh */}
      <View>
        <Image style={{ width: '100%', height: 270 }} resizeMode="cover" source={{uri:item.img2}} />
      </View>

      {/* trang2 */}
      <View style={{ backgroundColor: "#fff",height:'100%' }}>
        {/* nut */}
        <View style={{ flexDirection: "row", padding: 50, paddingBottom: 10 }}>
          <View style={{ width: 76, height: 28, backgroundColor: "green", borderRadius: 4, alignItems: "center", padding: 3 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff" }}>{item.loai}</Text>
          </View>
          <View style={{ width: 15 }} />
          <View style={{ width: 76, height: 28, backgroundColor: "green", borderRadius: 4, alignItems: "center", padding: 3 }}>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff" }}>{item.titlemini}</Text>
          </View>
        </View>
        {/* gia */}
        <View style={{ padding: 50, paddingBottom: 0, paddingTop: 10 }}>
          {item && item.gia && (
            <Text style={{ fontSize: 24, fontWeight: "500", color: "green" }}>{item.gia}</Text>
          )}
        </View>

        {/* chitiet */}
        <View style={{ padding: 50, paddingTop: 20, paddingBottom: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Chi tiết sản phẩm</Text>
          <View style={{ width: "100%", height: 1, backgroundColor: "black" }} />
          
          {/* Chi tiết sản phẩm - Nội dung */}
          <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.text}>Kích cỡ</Text>
            <Text style={styles.text}>{item.kichthuoc}</Text>
          </View>
          <View style={{ width: "100%", height: 0.5, backgroundColor: "black" }} />

          <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.text}>Xuất xứ</Text>
            <Text style={styles.text}>{item.xuatxu}</Text>
          </View>
          <View style={{ width: "100%", height: 0.5, backgroundColor: "black" }} />

          <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.text}>Tình trạng</Text>
            <Text style={{ color: "green" }}>Còn lại {item.tinhtrang} sản phẩm</Text>
          </View>
          <View style={{ width: "100%", height: 0.5, backgroundColor: "black" }} />
        </View>

        {/* tinhtien */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 30, paddingTop: 10, paddingBottom:20 }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 300 }}>Đã chọn {soluong} sản phẩm</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingTop: 10 }}>
              <AntDesign name="minussquareo" size={24} color="black" onPress={giam} />
              <Text style={{ fontSize: 16 }}>{soluong}</Text>
              <Octicons name="diff-added" size={24} color="black" onPress={tang} />
            </View>
          </View>
          {/* tinhtien */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: "300", alignSelf: "flex-end" }}>Tạm tính</Text>
            <Text style={{ paddingTop: 5, fontSize: 24, fontWeight: "500" }}>{tinhTamTinh()}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={btn} style={{ width: '80%', height: 50, backgroundColor: chonMuaColor, alignSelf: "center", borderRadius: 8, opacity: chonMuaDisabled ? 0.5 : 1 }} disabled={chonMuaDisabled}>
          <Text style={{ fontSize: 16, fontWeight: "500", alignSelf: "center", paddingTop: 16, color: '#fff' }}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
});
