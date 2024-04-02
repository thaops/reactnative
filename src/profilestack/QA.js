import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const QA = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);

  const toggleAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const toggleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };

  const toggleAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };

  const toggleAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
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
            paddingRight: 80,
            fontSize: 16,
            fontWeight: "500",
          }}
        >
          Q & A
        </Text>
      </View>
      <View style={{padding:40}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.textMain}>Tôi trộn các chất dinh dưỡng theo{"\n"}thứ tự nào?</Text>
        <TouchableOpacity onPress={toggleAnswer1}>
          {showAnswer1 ? (
            <AntDesign name="up" size={24} color="black" />
          ) : (
            <AntDesign name="down" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {showAnswer1 && (
        <Text style={styles.textPhu}>A, B, C, D, F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
      )}

      
<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:20}}>
        <Text style={styles.textMain}>Tôi có thể giữ dung dịch dinh{'\n'}dưỡng hỗn hợp trong bao lâu?</Text>
        <TouchableOpacity onPress={toggleAnswer2}>
          {showAnswer2 ? (
            <AntDesign name="up" size={24} color="black" />
          ) : (
            <AntDesign name="down" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {showAnswer2 && (
        <Text style={styles.textPhu}>Dinh dưỡng cao cấp nên ko có hạn sử dụng, chỉ cần bảo quản tốt dưới nhiệt độ mát, tránh ánh sáng trực tiếp là sẽ để được rất lâu, Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.</Text>
      )}

      
<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:20}}>
        <Text style={styles.textMain}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>
        <TouchableOpacity onPress={toggleAnswer3}>
          {showAnswer3 ? (
            <AntDesign name="up" size={24} color="black" />
          ) : (
            <AntDesign name="down" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {showAnswer3 && (
        <Text style={styles.textPhu}>Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter vào thì phải căn chỉnh pH trước rồi. PH tối ưu là giữa 5,8-6,3, nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. Bạn cần thêm 1 số công cụ bút đo nữa nhé.</Text>
      )}

<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:20}}>
        <Text style={styles.textMain}>Các chất điều chỉnh tăng trưởng {'\n'}có được sử dụng trong các sản {'\n'}phẩm Planta không?</Text>
        <TouchableOpacity onPress={toggleAnswer4}>
          {showAnswer4 ? (
            <AntDesign name="up" size={24} color="black" />
          ) : (
            <AntDesign name="down" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {showAnswer4 && (
        <Text style={styles.textPhu}>Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.</Text>
      )}
      </View>
     
    </View>
  )
}

export default QA;

const styles = StyleSheet.create({
    textMain:{
        fontSize:16, fontWeight:'500'
    },
    textPhu:{
        fontSize:16, fontWeight:'300', paddingTop:10
    }
});
