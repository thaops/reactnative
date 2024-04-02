import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const MultipleActionsAnimator = () => {
  // Sử dụng useState để lưu trữ trạng thái hiện tại của animation
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));

  // Hàm xử lý sự kiện khi người dùng chạm vào thành phần
  const handlePress = (iterationCount) => {
    // Sử dụng Animated.sequence để tạo chuỗi animation
    Animated.sequence([
      // Animation phóng to
      Animated.timing(scaleValue, {
        toValue: 2,
        duration: 100,
        useNativeDriver: true
      }),
      // Animation thu nhỏ với hiệu ứng "dựt dựt" (bounce)
      Animated.spring(scaleValue, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true
      })
    ]).start(() => {
      // Kiểm tra số lần lặp lại
      if (iterationCount < 2) {
        // Nếu chưa đạt đến số lần lặp lại mong muốn, gọi lại hàm handlePress với số lần lặp lại tăng lên 1
        handlePress(iterationCount + 1);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* Sử dụng Animated.View để áp dụng animation cho thành phần vuông */}
      <Animated.View style={[styles.square, { transform: [{ scale: scaleValue }] }]} />
      {/* TouchableOpacity để bắt sự kiện người dùng chạm vào */}
      <TouchableOpacity style={styles.button} onPress={() => handlePress(0)}>
        <Text>Touch Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default MultipleActionsAnimator;
