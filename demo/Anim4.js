import { Button, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import React from 'react';

const Anim4 = ({navigation}) => {
    const go = () => {
    
        navigation.navigate("Anim5")
      };
    const width = React.useRef(new Animated.Value(1)).current;

    const onPress = () => {
        Animated.sequence([
            Animated.timing(width, { toValue: 0, duration: 1, useNativeDriver: true }), // Sử dụng useNativeDriver: true ở đây
            Animated.timing(width, { toValue: 1, duration: 500, useNativeDriver: true }), // Sử dụng useNativeDriver: true ở đây
            Animated.timing(width, { toValue: 1, duration: 1, useNativeDriver: true }), // Sử dụng useNativeDriver: true ở đây
            Animated.delay(1000),
            Animated.spring(width, { toValue: 2, damping: 2, stiffness: 250, useNativeDriver: true }), // Sử dụng useNativeDriver: true ở đây
        ]).start();
    };

    const animatedStyle = {
        transform: [{ scale: width }],
        backgroundColor: 'red',
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, animatedStyle]} />
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Press</Text>
            </TouchableOpacity>
            <View style={{marginTop:50,width:100,height:40,backgroundColor:'green', borderRadius:8}}>
        <TouchableOpacity onPress={go}>
          <Text style={{alignSelf:'center', marginTop:8}}>Anim5</Text>
        </TouchableOpacity>
      </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor:'red',
        marginVertical: 20,
        borderRadius:10
    },
});

export default Anim4;
