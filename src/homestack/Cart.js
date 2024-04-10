import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { GioHang } from "../../lab/redux/reducers/CartSlice";
import { XoaGioHang } from "../../lab/redux/reducers/DeleteCartSlice";
import { XoaTheoMuc } from "../../lab/redux/reducers/DeleteManyCartSlice";

const Cart = ({ route, navigation }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);

  const loginData = useSelector((state) => state.login);
  const _id = loginData.loginData.data._id;
  const ids = [];
  for (const _id in checkedItems) {
    if (checkedItems[_id] === true) {
      ids.push(_id);
    }
  }

  useEffect(() => {
    dispatch(GioHang(_id));
  }, [dispatch, _id]);

  const toggleChecked = (itemKey) => {
    setCheckedItems((prevState) => {
      const newState = {
        ...prevState,
        [itemKey]: !prevState[itemKey],
      };
      if (newState[itemKey]) {
        const selectedItem = cartData.find((item) => item._id === itemKey);
        setSelectedProduct(selectedItem);
      }
      return newState;
    });
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cartData.forEach((item) => {
      if (checkedItems[item._id]) {
        totalQuantity += item.gia;
      }
    });
    return totalQuantity;
  };

  const btnback = (item) => {
    navigation.navigate("Home");
  };

  const BuyProduct = () => {
    navigation.navigate("BuyProduct", {
      totalQuantity: getTotalQuantity(),
      ids,
      selectedProduct,
    });
  };

  const deleteProduct = () => {
    Alert.alert(
      "Xóa sản phẩm",
      "Bạn có muốn xóa sản phẩm này không?",
      [
        {
          text: "Hủy",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Xóa",
          onPress: () => {
            Alert.alert(
              "Xóa sản phẩm",
              "Sản phẩm đã được xóa thành công!",
              [
                {
                  text: "OK",
                  onPress: () => {
                    dispatch(XoaTheoMuc({ ids }));
                  },
                },
              ],
              { cancelable: false }
            );
          },
        },
      ],
      { cancelable: false }
    );
  };
  const xoaOne = (_id) => {
    Alert.alert(
      "Xóa sản phẩm",
      "Bạn có muốn xóa sản phẩm này không?",
      [
        {
          text: "Hủy",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Xóa",
          onPress: () => {
            Alert.alert(
              "Xóa sản phẩm",
              "Sản phẩm đã được xóa thành công!",
              [
                {
                  text: "OK",
                  onPress: () => {
                    dispatch(XoaGioHang(_id));
                  },
                },
              ],
              { cancelable: false }
            );
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderItem = ({ item }) => (
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
        onPress={() => toggleChecked(item._id)}
        style={[styles.checkBox, checkedItems[item._id] && styles.checked]}
      >
        {/* Thêm biểu tượng hoặc văn bản cho nút tích vào đây */}
      </TouchableOpacity>
      <View style={{paddingLeft:20}}>
        <Image
          style={{ backgroundColor: "#EEEEEE", width: 77, height: 77 ,}}
          source={{ uri: item.img }}
        />
      </View>
      <View style={{marginRight: 10 , paddingLeft:20,width:'60%'}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 3,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {item.title} |{" "}
          </Text>
          <Text style={{ fontWeight: "300" }}>{item.titlemini}</Text>
        </View>
        <View style={{ height: 10 }} />
        <Text style={{ fontSize: 16, fontWeight: "500", color: "green" }}>
          {item.gia}.000đ
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
              // onPress={() => giamSoLuong(item._id)}
              name="diff-removed"
              size={24}
              color="black"
            />
            <Text>{item.quantity}</Text>
            <Octicons
              // onPress={() => tangSoLuong(item._id)}
              name="diff-added"
              size={24}
              color="black"
            />
          </View>
          <TouchableOpacity onPress={() => xoaOne(item._id)}>
            <Text style={{ fontSize: 18, fontWeight: "500" }}> Xoa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View style={{ height: 30 }} />
      <View style={{ width: "100%", height: "81%" }}>
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
          <TouchableOpacity onPress={deleteProduct}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ height: 20 }} />
        <FlatList
          data={cartData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>

      <View>
        {/* Các phần tử hiển thị khác */}
        {Object.keys(checkedItems).length > 0 && (
          <View style={styles.totalContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 14, fontWeight: "300" }}>Tạm tính:</Text>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {getTotalQuantity()} 000đ
              </Text>
            </View>
            <View style={{ height: 10 }} />
            <TouchableOpacity
              onPress={BuyProduct}
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
    marginTop: "200",
    padding: 30,
  },
});

export default Cart;
