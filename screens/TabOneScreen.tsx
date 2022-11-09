import * as React from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
// import { View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../SignalAssets/dummy-data/ChatRooms';
import chatRooomsData from '../SignalAssets/dummy-data/ChatRooms';

export default function TabOneScreen(){
  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRooomsData} 
        renderItem={({ item }) => <ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
      />

{/* 
  // Horizontal Flatlist
  <FlatList 
        data={chatRooomsData} 
        renderItem={({ item }) => <ChatRoomItem chatRoom={item}/>}
        showsVerticalScrollIndicator={false}
        horizontal
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1,
  }
})