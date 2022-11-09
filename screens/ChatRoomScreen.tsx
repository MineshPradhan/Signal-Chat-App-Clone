import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Message from '../components/Message';

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <Message />
    </View>      
  )
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1,
  },
})

export default ChatRoomScreen