import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const Bai2costom = ({ title, data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.textMain}>Địa điểm:</Text>
          <Text style={styles.textItem}>{item.diadiem}</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.textMain}>Thời gian:</Text>
          <Text style={styles.textItem}>{item.thoigian}</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.textMain}>Phương tiện di chuyển:</Text>
          <Text style={styles.textItem}>{item.phuongtien}</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.textMain}>Thời gian đến:</Text>
          <Text style={styles.textItem}>{item.thoigianden}</Text>
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.textMain}>Hình ảnh:</Text>
          <Image style={styles.image} source={item.img} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{height:20}}/>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Bai2costom;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    paddingBottom: 20,
  },
  item: {
    width: 300,
    backgroundColor: "#EEEEEE",
    padding: 15,
    borderRadius: 20,
    marginRight: 20,
  },
  itemInfo: {
    marginTop: 10,
  },
  textMain: {
    fontSize: 16,
    fontWeight: "300",
    paddingBottom: 2,
  },
  textItem: {
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});
