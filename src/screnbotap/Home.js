import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { API } from "../../API";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    key: "1",
    img: require("../../img/imgitem1.png"),
    img2: require("../../img/imgitem1new2.png"),
    title: "Spider Plant",
    titlemini: "Ưa sáng",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Nhỏ",
    xuatxu: "Việt Nam",
    tinhtrang: " 100 ",
  },
  {
    key: "2",
    img: require("../../img/imgitem2.png"),
    img2: require("../../img/imgitem2new.png"),
    title: "Spider Plant",
    titlemini: "Ưa sáng",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Lớn",
    xuatxu: "Châu phi",
    tinhtrang: " 153 ",
  },
  {
    key: "3",
    img: require("../../img/imgitem3.png"),
    img2: require("../../img/imgitem3new.png"),
    title: "Spider Plant",
    titlemini: "Ưa sáng",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Nhỏ",
    xuatxu: "Châu My",
    tinhtrang: " 87",
  },
  {
    key: "4",
    img: require("../../img/imgitem4.png"),
    img2: require("../../img/imgitem4new.png"),
    title: "Spider Plant",
    titlemini: "Ưa sáng",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "lớn",
    xuatxu: "Nhật Bản",
    tinhtrang: " 23 ",
  },
  {
    key: "5",
    img: require("../../img/imgitem1.png"),
    img2: require("../../img/imgitem1new2.png"),
    title: "Spider Plant",
    titlemini: "Ưa Tối",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Nhỏ",
    xuatxu: "Việt Nam",
    tinhtrang: " 100 ",
  },
  {
    key: "6",
    img: require("../../img/imgitem2.png"),
    img2: require("../../img/imgitem2new.png"),
    title: "Spider Plant",
    titlemini: "Ưa Tối",
    gia: "250.000đ",
    loai: "Cây trồng",
    kichthuoc: "Lớn",
    xuatxu: "Châu phi",
    tinhtrang: " 153 ",
  },
];

const datachau = [
  {
    key: "1",
    img: require("../../img/imgitem5.png"),
    title: "Spider Plant",
    gia: "250.000đ",
  },
  {
    key: "2",
    img: require("../../img/imgitem6.png"),
    title: "Spider Plant",
    gia: "250.000đ",
  },
  {
    key: "3",
    img: require("../../img/imgitem6.png"),
    title: "Spider Plant",
    gia: "250.000đ",
  },
  {
    key: "4",
    img: require("../../img/imgitem8.png"),
    title: "Spider Plant",
    gia: "250.000đ",
  },
];

const datcomb = [
  {
    key: "1",
    img: require("../../img/imgitem9.png"),
    title: "Lemon Balm Grow Kit ",
    titlemini:
      "Gồm: hạt giống Lemon Balm, gói đất hữu cơ, chậu Planta, marker đánh dấu...",
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const detedata = (item) => {
    navigation.navigate("Detail", { item });
  };

  const btnCart = (item) => {
    navigation.navigate("Cart");
  };

  const Allcaytrong = (item) => {
    navigation.navigate("Allcaytrong");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch(
          `${API}/api/get/product`
        );

        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu từ API");
        }

        const data = await response.json();
        setProducts(data);
        
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };

   
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 30, paddingLeft: 30, paddingRight: 15, }}>
      <TouchableOpacity
        onPress={() => detedata(item)}
        style={{ backgroundColor: "#F6F5F5",borderWidth:0.1, }}
      >
        <Image
        style={{ flex: 1, backgroundColor: "#EEEEEE", borderRadius: 10,width:155, height:134 }}
        source={{ uri: item.img }}
        />

        <Text style={{ fontSize: 16, fontWeight: "400", paddingTop: 5 }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300", paddingTop: 5 }}>
          {item.titlemini}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingTop: 5,
            color: "green",
          }}
        >
          {item.gia}.000đ
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemchau = ({ item }) => (
    <View style={{ padding: 30, paddingLeft: 30, paddingRight: 15 }}>
      <TouchableOpacity style={{ backgroundColor: "#F6F5F5" }}>
        <Image
          style={{ flex: 1, backgroundColor: "#EEEEEE", borderRadius: 10 }}
          source={item.img}
        />
        <Text style={{ fontSize: 16, fontWeight: "400", paddingTop: 5 }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            paddingTop: 5,
            color: "green",
          }}
        >
          {item.gia}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItemcomb = ({ item }) => (
    <View style={{ padding: 30, paddingLeft: 30, paddingRight: 15 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#EEEEEE",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 15,
          paddingRight: 10,
          borderRadius: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "400", paddingTop: 5 }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              paddingTop: 5,
              color: "green",
              width: 200,
            }}
          >
            {item.titlemini}
          </Text>
        </View>
        <Image
          style={{
            backgroundColor: "#EEEEEE",
            width: 108,
            height: 135,
            borderTopRightRadius: 10,
          }}
          resizeMethod="resize"
          source={item.img}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ height: 30 }} />
        <View style={{ backgroundColor: "rgba(246, 246, 246, 1)" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 30,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "500", marginTop: 20 }}>
              Planta - toả sáng {"\n"}không gian nhà bạn
            </Text>
            <TouchableOpacity
              onPress={btnCart}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#fff",
                justifyContent: "center",
              }}
            >
              <AntDesign
                style={{ alignSelf: "center" }}
                name="shoppingcart"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: -20, height: 200 }}>
            <ImageBackground
              style={{ resizeMode: "cover", width: "100%", height: 205 }}
              source={require("../../img/home2.png")}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  marginLeft: 30,
                  marginTop: 30,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "green",
                    paddingRight: 10,
                    padding: 5,
                  }}
                >
                  Xem hàng mới về
                </Text>
                <Feather name="arrow-right" size={24} color="green" />
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "500",
              padding: 30,
              paddingBottom: -5,
            }}
          >
            Cây Trồng
          </Text>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
          />
          <TouchableOpacity onPress={Allcaytrong}>
            <Text
              style={{
                alignSelf: "flex-end",
                padding: 30,
                fontSize: 16,
                fontWeight: "500",
                paddingBottom: -5,
              }}
            >
              Xem thêm Cây trồng
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "500",
              padding: 30,
              paddingBottom: -5,
            }}
          >
            Chậu cây trồng
          </Text>
          <FlatList
            data={datachau}
            renderItem={renderItemchau}
            keyExtractor={(item) => item.key}
            numColumns={2}
          />
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: "flex-end",
                padding: 30,
                fontSize: 16,
                fontWeight: "500",
                paddingBottom: -5,
              }}
            >
              Xem thêm Phụ kiện
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "500",
              padding: 30,
              paddingBottom: -5,
            }}
          >
            Combo chăm sóc (mới)
          </Text>
          <FlatList
            data={datcomb}
            renderItem={renderItemcomb}
            keyExtractor={(item) => item.key}
            numColumns={0}
          />
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: "flex-end",
                padding: 30,
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Xem thêm Phụ kiện
            </Text>

          </TouchableOpacity>

        </View>
        
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
