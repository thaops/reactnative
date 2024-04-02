import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSequence,
    withRepeat,
    Easing,
} from 'react-native-reanimated';
const duration =800;
const easing = Easing.bezier(0.25, -0.5, 0.25, 1);
const Anim6 = ({navigation}) => {
    const svRotation = useSharedValue(0);
    const svColor = useSharedValue(0);
    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const x2 = useSharedValue(0);
    const y2 = useSharedValue(0);
    // Step 1: Rotation
    React.useEffect(() => {
        svRotation.value = withRepeat(withTiming(1, { duration, easing }), -1);
    }, []);

    // Step 2: Color change
    React.useEffect(() => {
        svColor.value = withRepeat(withTiming(1, { duration: 500, easing }), -1);
    }, []);
    const startAnimation = () => {
        // Bước 1: Di chuyển lên trên theo trục Y đến vị trí ban đầu

        // Sau khi bước 1 hoàn thành, thực hiện bước 2: Di chuyển xuống dưới theo trục Y
        y.value = withTiming(330, { duration: 80, easing: Easing.linear }, () => {
            // Sau khi bước 2 hoàn thành, thực hiện bước 3: Di chuyển sang trái
            x.value = withTiming(-370, { duration: 500, easing: Easing.linear }, () => {
                y.value = withTiming(0, { duration: 500, easing: Easing.linear }, () => {
                    x.value = withTiming(10, { duration: 500, easing: Easing.linear });
                });
            });
        });

    };

    const animatedStyleRotation = useAnimatedStyle(() => ({
        transform: [{ rotate: `${svRotation.value * 360}deg` }],
    }));
    const animatedStyleColor = useAnimatedStyle(() => ({
        backgroundColor: `hsl(${(svColor.value * 360).toFixed(0)}, 100%, 50%)`,
    }));
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: x.value }, { translateY: y.value }],
    }));
    const animatedStyleCombined = useAnimatedStyle(() => ({
        transform: [
            { translateX: x2.value },
            { translateY: y2.value },
            { rotate: `${svRotation.value * 360}deg` }
        ],
    }));
    
    const startAnimation2 = () => {
        x2.value = withSequence(
            withTiming(360, { duration: 1500, easing: Easing.linear }),
            withTiming(369, { duration: 1500, easing: Easing.linear }),
            withTiming(0, { duration: 1500, easing: Easing.linear })
        );

        y2.value = withSequence(
            withTiming(369, { duration: 1500, easing: Easing.linear }),
            withTiming(360, { duration: 1500, easing: Easing.linear }),
           withTiming(0, { duration: 1500, easing: Easing.linear })
        );
         
    };

    const animatedStyle2 = useAnimatedStyle(() => ({
        transform: [{ translateX: x2.value }, { translateY: y2.value }],
    }));
    useEffect(() => {
        // Gọi hàm startAnimation một lần
        startAnimation();
        startAnimation2();

        // Thiết lập một interval để gọi lại startAnimation và startAnimation2 mỗi khi kết thúc một chu kỳ animation
        const interval = setInterval(() => {
            startAnimation();
            startAnimation2();
        }, 4500); // Thực hiện animation mỗi 8 giây

        // Trả về một hàm trong useEffect để dọn dẹp khi component unmount
        return () => clearInterval(interval);
    }, []); // Chỉ gọi useEffect một lần khi component mount
    return (
        <View style={ styles.container }>
            <View style={ { flexDirection: 'column', position: 'absolute' } }>
            <Animated.View style={[styles.box2, animatedStyleCombined, animatedStyleColor]} />

                <TouchableOpacity onPress={ startAnimation2 }>
                    
                </TouchableOpacity>
            </View>
            <View style={ { flexDirection: 'column', marginTop: 420 } }>
                <Animated.View style={ [styles.box, animatedStyle] } />
                <TouchableOpacity onPress={ startAnimation }>
                 
                </TouchableOpacity>
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        marginLeft: 360,
        padding:20
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'red',

    },
});

export default Anim6;
