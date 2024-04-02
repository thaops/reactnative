import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [imagepick, setImagepick] = useState(null);

  const defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png';

  const tickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,

    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      multiple: true,
    });

    console.log(result);

    if (!result.canceled) {
      setImagepick(result.assets[0].uri);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <TouchableOpacity onPress={pickImage}>
        {(image || imagepick) ? (
          <Image
            source={{ uri: image || imagepick }}
            style={{ width: 300, height: 300, borderRadius: 10 }}
          />
        ) : (
          <Image
            source={{ uri: defaultImageUrl }}
            style={{ width: 300, height: 300, borderRadius: 10 }}
          />
        )}
      </TouchableOpacity>

      <View style={{ height: 50 }} />
      <View style={{ width: "70%", backgroundColor: "blue", borderRadius: 8 }}>
        <Button title="Chụp ảnh" onPress={tickImage} />
      </View>
    </View>
  );
}
