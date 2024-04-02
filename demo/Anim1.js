import { Button, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React from 'react';

const Anim1 = ({navigation}) => {

  const go = () => {
    
    navigation.navigate("Anim2")
  };

  const width = React.useRef(new Animated.Value(1)).current;

  const onPress = () => {
    Animated.sequence([
      Animated.timing(width, { toValue: 0, duration: 1000, useNativeDriver: true }), // Sử dụng useNativeDriver: true ở đây
      Animated.spring(width, { toValue: 1, damping: 2, stiffness: 250, useNativeDriver: true }), // Và ở đây
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: width }],
    backgroundColor: 'red',
  };

  return (
    <View style={styles.container}>
      <View style={{}}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press</Text>
      </TouchableOpacity>
      </View>
    
      
      <View style={{marginTop:50,width:100,height:40,backgroundColor:'green', borderRadius:8}}>
        <TouchableOpacity onPress={go}>
          <Text style={{alignSelf:'center', marginTop:8}}>Anim2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    marginVertical: 20,
    borderRadius:10
  },
});

export default Anim1;
