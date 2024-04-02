import React, { useState } from 'react';
import { StyleSheet, View, Button,TouchableOpacity,Text } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const duration = 2000;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);

export default function Anim5({navigation}) {
  const go = () => {
    
    navigation.navigate("Anim6")
  };
  const [isRotating, setIsRotating] = useState(false);
  const sv = useSharedValue(0);

  const startRotation = () => {
    setIsRotating(true);
    sv.value = withRepeat(withTiming(1, { duration, easing }), -1);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${sv.value * 360}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      {!isRotating && (
        <View style={styles.buttonContainer}>
          <Button title="Click me" onPress={startRotation} />
        </View>
      )}

<View style={{marginTop:50,width:100,height:40,backgroundColor:'green', borderRadius:8}}>
        <TouchableOpacity onPress={go}>
          <Text style={{alignSelf:'center', marginTop:8}}>Anim6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
  },
});
