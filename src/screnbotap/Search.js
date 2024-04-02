import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
 


const data = [
  {
    
    "key": "1",
    "img": "https://firebasestorage.googleapis.com/v0/b/realtimedatabase-231d9.appspot.com/o/imgitem2.png?alt=media&token=93db1b0a-038b-4b50-bd74-5d628f813c33",
    "img2": "https://firebasestorage.googleapis.com/v0/b/realtimedatabase-231d9.appspot.com/o/imgitem1new2.png?alt=media&token=48c560e5-e52b-40c9-85ae-9edde194b4b9",
    "title": "Spider Plant",
    "titlemini": "Ưa sáng",
    "gia": 100,
    "loai": "Cây trồng",
    "kichthuoc": "Lớn",
    "xuatxu": "Châu phi",
    "tinhtrang": "70"
  },
  {
    
    "key": "2",
    "img": "https://firebasestorage.googleapis.com/v0/b/realtimedatabase-231d9.appspot.com/o/imgitem3.png?alt=media&token=c9c82c03-f9bb-4fd2-88bb-53a69ca57126",
    "img2": "https://cayvahoa.net/wp-content/uploads/2016/06/CAY-TAI-LOC-6.jpg",
    "title": "Rose",
    "titlemini": "Ưa sáng",
    "gia": 80,
    "loai": "Cây trồng",
    "kichthuoc": "Nhỏ",
    "xuatxu": "Châu My",
    "tinhtrang": "87"
  },
  {
    "key": "3",
    "img": "https://i.pinimg.com/originals/be/3b/6a/be3b6afa82037b4fbd957df3cd1fbc71.png",
    "title": "hoa sen new",
    "titlemini": "ưa sáng",
    "gia": 2000,
    "loai": "cây hoa",
    "kichthuoc": "vua",
    "xuatxu": "việt nam",
    "tinhtrang": "10",
    "__v": 0
  },
  {
    
    "key": "4",
    "img": "https://firebasestorage.googleapis.com/v0/b/realtimedatabase-231d9.appspot.com/o/imgitem4.png?alt=media&token=c8b480b5-9301-499d-acc9-7cbc403d06b6",
    "img2": "https://cdn.eva.vn/upload/1-2023/images/2023-03-03/picture-4-1677826886-814-width640height480.png",
    "title": "Spider Plant",
    "titlemini": "Ưa sáng",
    "gia": 400,
    "loai": "Cây trồng",
    "kichthuoc": "lớn",
    "xuatxu": "Nhật Bản",
    "tinhtrang": "23"
  }
];



const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const detedata = (item) => {
    navigation.navigate("Detail", { item });
  };
  const handSearch = (text) => {
    setSearch(text);

    const newData = text
      ? data.filter((item) => {
        const itemData = item.title.toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      })
      : [];
    setFilteredData(newData);
  };
  const renderItem = ({ item }) => {
    // Lấy navigation từ useNavigation trong renderItem sẽ gây ra vấn đề, nên cần truyền vào từ phần cha
    return (
      <TouchableOpacity onPress={() => detedata(item)}>
        <View style={{ alignSelf: "flex-start", padding: 50, paddingTop: 10, paddingBottom: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{
                width: 77,
                height: 77,
                borderRadius: 8,
                backgroundColor: '#EEEEEE',
              }}
              source={{uri:item.img}}
            />
            <View style={{ paddingLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>{item.title}</Text>
                <Text style={{ paddingLeft: 5, paddingRight: 5, fontWeight: "900" }}>| |</Text>
                <Text>{item.titlemini}</Text>
              </View>
              <Text style={{ paddingTop: 10, fontSize: 16, fontWeight: "500" }}>{item.gia}</Text>
              <Text style={{ paddingTop: 10, fontSize: 14, fontWeight: "400" }}>còn{item.tinhtrang}sp</Text>
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
          TÌM KIẾM
        </Text>
      </View>
      <View style={{ padding: 50, paddingTop: 10, flexDirection: "row" }}>
        <TextInput
          onChangeText={handSearch}
          style={{
            width: "100%",
            height: 50,
            borderColor: "black",
            borderBottomWidth: 1,
          }}
        ></TextInput>
        <AntDesign
          style={{
            position: "absolute",
            width: "100%",
            marginLeft: 330,
            marginTop: 30,
          }}
          name="search1"
          size={24}
          color="black"
        />
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem} // Loại bỏ tham số navigation từ renderItem
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
