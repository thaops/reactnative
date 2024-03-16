import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Search = () => {
  return (
    <View>
      <View style={{height:50}}/>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
      <Ionicons style={{ flex:1, paddingLeft:40}} name="chevron-back" size={24} color="black" />
      <Text style={{flex:1, paddingRight:110, fontSize:16, fontWeight:'500'}}>TÌM KIẾM</Text>
      </View>
      <View style={{padding:50, paddingTop:10, flexDirection:'row'}}>
      <TextInput style={{width:'100%', height:50, borderColor:'black', borderBottomWidth:1}}></TextInput>
      <AntDesign style={{position: "absolute",width:'100%', marginLeft:330, marginTop:30}} name="search1" size={24} color="black" />
      </View>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({})