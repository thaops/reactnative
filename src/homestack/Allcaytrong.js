import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import {useDispatch,useSelector} from "react-redux"
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { LayDanhMuc } from "../../reduct-toolkit/redux/reducers/CategorySlice";
import { LaySanPham } from "../../reduct-toolkit/redux/reducers/ListProductSlice";


const Allcaytrong = ({ navigation }) => {
 
  const [selectedItemId, setSelectedItemId] = useState("");

  const dispatch = useDispatch();
  const{CategoryData,CategoryStatus} = useSelector((state)=> state.category);
  const{ListProductData,ListProductStatus} = useSelector((state)=> state.listProduct);
  useEffect(()=>{
    dispatch(LayDanhMuc());
    dispatch(LaySanPham(selectedItemId));
    
  },[dispatch,selectedItemId])

  const btnback = () => {
    navigation.navigate("Home");
  };

  const detedata = (item) => {
    navigation.navigate("Detail", { item });
};


  const renderItem = ({ item }) => {
  
      return (
        <View style={{ padding: 30, paddingLeft: 30, paddingRight: 15 }}>
          <TouchableOpacity
            onPress={() => detedata(item)}
            style={{ backgroundColor: "#F6F5F5" }}
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
              {item.gia}
            </Text>
          </TouchableOpacity>
        </View>
      );
 
  };
  
  

  const renderItemtile = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedItemId(item._id)}
        style={[
          styles.renderItemTile,
          selectedItemId === item.id && styles.selectedRenderItemTile,
        ]}
      >
        <Text style={{ fontSize: 14, fontWeight: "400", borderRadius: 8 }}>
          {item.name}
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
          data={CategoryData}
          renderItem={renderItemtile}
          keyExtractor={(item) => item._id}
        />
        <View>
          <FlatList
            data={ListProductData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
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
