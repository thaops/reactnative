import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 30 }}>
          <Image
            style={{
              position: "absolute",
              zIndex: 1,
              // Màu nền với độ mờ 70%
              margin: -4,
              width: 40,
              height: 40,
            }}
            source={require("../img/logologobuoi1.png")}
          />
          <Text style={{ fontSize: 18, width: 117, height: 29, color: "blue" }}>
            <Text style={{ fontWeight: "bold", color: "blue" }}>Audi</Text>Books
          </Text>
        </View>

        <View style={{ paddingLeft: 170, paddingTop: 30 }}>
          <AntDesign name="setting" size={24} color="blue" />
        </View>
      </View>
    </View>
  )
}

export default Header