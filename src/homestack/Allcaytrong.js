import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Allcaytrong = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;
  const [selectedItemId, setSelectedItemId] = useState(null);

  const datatile = [
    { id: "1", title: "ALL" },
    { id: "2", title: "Hàng mới về" },
    { id: "3", title: "Ưa sáng" },
    { id: "4", title: "Ưa Tối" },
  ];

  const btnback = () => {
    navigation.navigate("Home");
  };

  const detedata = (item) => {
  navigation.navigate("Detail");
  navigation.setParams({ item }); // Đặt item bằng navigation.setParams
};


  const renderItem = ({ item }) => {
    // Kiểm tra nếu không có mục nào được chọn hoặc mục được chọn là "ALL", hiển thị tất cả các mục
    if (!selectedItemId || selectedItemId === "1") {
      return (
        <View style={{ padding: 30, paddingLeft: 30, paddingRight: 15 }}>
          <TouchableOpacity
            onPress={() => detedata(item)}
            style={{ backgroundColor: "#F6F5F5" }}
          >
            <Image
              style={{ flex: 1, backgroundColor: "#EEEEEE", borderRadius: 10 }}
             source={item.img}
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
              {item.gia}
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      // Nếu mục được chọn không phải là "ALL", chỉ hiển thị các mục có titlemini tương ứng
      return item.titlemini === datatile[selectedItemId - 1].title ? (
        <View style={{ padding: 30, paddingLeft: 30, paddingRight: 15 }}>
        <TouchableOpacity
          onPress={() => detedata(item)}
          style={{ backgroundColor: "#F6F5F5" }}
        >
          <Image
            style={{ flex: 1, backgroundColor: "#EEEEEE", borderRadius: 10 }}
           source={item.img}
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
            {item.gia}
          </Text>
        </TouchableOpacity>
      </View>
      ) : null;
    }
  };
  
  

  const renderItemtile = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedItemId(item.id)}
        style={[
          styles.renderItemTile,
          selectedItemId === item.id && styles.selectedRenderItemTile,
        ]}
      >
        <Text style={{ fontSize: 14, fontWeight: "400", borderRadius: 8 }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View>
        <View style={{ height: 30 }} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 30,
            paddingBottom: 0,
          }}
        >
          <Ionicons
            onPress={btnback}
            name="chevron-back-outline"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>GIỎ HÀNG</Text>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </View>
        <View style={{ height: 20 }} />
        <FlatList
          horizontal
          data={datatile}
          renderItem={renderItemtile}
          keyExtractor={(item) => item.id}
          
          
        />
        <View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Allcaytrong;

const styles = StyleSheet.create({
  renderItemTile: {
    padding: 8,
    marginLeft: 20,
    backgroundColor: "#EEEEEE",
    color:'#fff'
  },
  selectedRenderItemTile: {
    backgroundColor: "green",
    padding: 8,
    marginLeft: 20,
    color:'#fff',
    borderRadius:8
  },
});
