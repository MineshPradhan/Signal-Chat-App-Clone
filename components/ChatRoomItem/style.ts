import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    page:{
  
    },
  
    container:{
      flexDirection: 'row', // Will be in same direction
      padding:10, // Simply give padding to our container
    },
  
    image:{
      height:60,
      width:60,
      borderRadius:30, // half of height and width to make perfect round of any image.
      marginRight:10,  
    },
  
    badgeContainer:{
      backgroundColor:'#3872e9',
      width:20,
      height:20,
      borderRadius:10,
      borderWidth:1,
      borderColor:'white',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:55,
      top:10,
    },
  
    badgeText:{
      fontSize:12,
      color:'white',
    },
  
    rightContainer:{
      // backgroundColor:'red', // Just for testing
      flex:1,
      justifyContent:'center', // To allign all text in vertically-center with image.
    },
  
    row:{
      flexDirection: 'row', // Will be in same direction
      justifyContent:'space-between',
    },
  
    name:{
      fontSize:18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  
    text:{
      // fontSize:18,
      color:"gray",
    }
  })

  export default styles;