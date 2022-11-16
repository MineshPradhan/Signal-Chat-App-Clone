import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import { useRoute } from '@react-navigation/core'
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import chatRoomData from '../SignalAssets/dummy-data/Chats';

const ChatRoomScreen = () => {

  const route = useRoute();

  console.warn("Displaying chat room: ", route.params?.id)

  return (
    <SafeAreaView style={styles.page}>
      <FlatList 
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item}/>}
        inverted
      />
      <MessageInput />
    </SafeAreaView>      
  )
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    flex:1,
  },
})

export default ChatRoomScreen