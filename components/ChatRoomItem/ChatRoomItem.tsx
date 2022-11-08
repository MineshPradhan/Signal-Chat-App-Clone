import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import styles from './style';

export default function ChatRoomItem(){
    return(
        <View style={styles.container}>
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg'}} style={styles.image}/>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>5</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>Laal Pila</Text>
          <Text style={styles.text}>10:10</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>Bla Bla Bla Bla Bla Bla Bla messages..........</Text>
      </View>
    </View>
    );
}