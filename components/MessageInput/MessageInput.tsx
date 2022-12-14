import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { Octicons, Feather, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';

const MessageInput = () => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
      // Send Message
      console.warn("sending: ", message);

      setMessage('');
    }

    const onPlusClicked = () => {
      console.warn("On Plus clicked");
    }

    const onPress = () => {
      if (message) {
        sendMessage();
      } else {
        onPlusClicked();
      }
    }

  return (
    <KeyboardAvoidingView 
      style={styles.root}
      // behavior={Platform.OS === "android" ? "padding" : "height"}
      // keyboardVerticalOffset={100}
      
      // We can remove 'behaviour' and 'keyboardVerticalOffset' as it is working properly in Android Device but can also keep it since both are working fine. And KeyboardAvoidingView will be View cause View works fine.
    >
      <View style={styles.inputContainer}>
      <Octicons name="smiley" size={24} color="#595959" style={styles.icon}/>

        <TextInput 
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder='Signal Message'
        />

        <Feather name="camera" size={24} color="#595959" style={styles.icon}/>
        <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon}/>
      </View>

      <Pressable onPress={onPress} style={styles.buttonContainer}>
      {message ? <Ionicons name="send" size={20} color="white"/> : <AntDesign name="plus" size={24} color="white"/>}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:10,
    },

    inputContainer:{
        backgroundColor:'#f2f2f2',
        flex:1,
        marginRight:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#dedede',
        alignItems:'center',
        flexDirection:'row',
        padding:5,
    },

    input:{
      flex:1,
      marginHorizontal:5,
    },

    icon:{
        marginHorizontal:5,
    },

    buttonContainer:
    {
        width:40,
        height:40,
        backgroundColor:'#3777f0',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    },

    buttonText:{
        color:'white',
        fontSize:25,
    },
})

export default MessageInput