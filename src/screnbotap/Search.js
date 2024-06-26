import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimSanPham } from "../../reduct-toolkit/redux/reducers/SearchSlice";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity, } from "react-native";

const Search = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const {SearchData,SearchStatus } = useSelector((state) => state.search);

  useEffect(() => {
    console.log(SearchData); 
  }, [SearchData]);

  const detedata = (item) => {
    navigation.navigate("Detail", { item });
  };

  const handSearch = (text) => {
    setTitle(text);
    if (text.trim() !== "") {
      dispatch(TimSanPham({ title }));
    } else {
     console.log('khong co duw lieu')
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => detedata(item)}>
        <View
          style={{
            alignSelf: "flex-start",
            padding: 50,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 77,
                height: 77,
                borderRadius: 8,
                backgroundColor: "#EEEEEE",
              }}
              source={{ uri: item.img }}
            />
            <View style={{ paddingLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  {item.title}
                </Text>
                <Text
                  style={{ paddingLeft: 5, paddingRight: 5, fontWeight: "900" }}
                >
                  | |
                </Text>
                <Text>{item.titlemini}</Text>
              </View>
              <Text style={{ paddingTop: 10, fontSize: 16, fontWeight: "500" }}>
                {item.gia}
              </Text>
              <Text style={{ paddingTop: 10, fontSize: 14, fontWeight: "400" }}>
                còn {item.tinhtrang} sp
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{ height: 50 }} />
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Ionicons style={{ flex: 1, paddingLeft: 40 }} name="chevron-back" size={24} color="black" />
        <Text style={{ flex: 1, paddingRight: 110, fontSize: 16, fontWeight: "500" }}>TÌM KIẾM</Text>
      </View>
      <View style={{ padding: 50, paddingTop: 10, flexDirection: "row" }}>
        <TextInput onChangeText={(text) => handSearch(text)} style={{ width: "100%", height: 50, borderColor: "black", borderBottomWidth: 1 }} />
        <AntDesign style={{ position: "absolute", width: "100%", marginLeft: 330, marginTop: 30 }} name="search1" size={24} color="black" />
      </View>
      {SearchStatus === "succeeded" ? (
        <FlatList
          data={SearchData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      ) : (
        <Text style={{ fontSize: 16, fontWeight: "500", alignSelf:"center" }}>Không tìm thấy dữ liệu</Text>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
 
});
