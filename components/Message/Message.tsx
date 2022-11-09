import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const blue = '#3777f0';
const gray = 'lightgray'

const Message = () => {

    const isMe = true;

  return (
    <View style={[
        styles.container, {
            backgroundColor: isMe ? gray : blue,
            marginLeft: isMe ? 'auto' : 10
    }]}>
      <Text style={{color: isMe ? 'black' : 'white'}}>Message</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3777f0',
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth:'75%'
    },

});

export default Message