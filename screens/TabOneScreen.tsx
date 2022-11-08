import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
// import { View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';

export default function TabOneScreen(){
  return (
    <View style={styles.page}>
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
      <ChatRoomItem />
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1,
  }
})