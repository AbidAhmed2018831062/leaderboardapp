import { StyleSheet } from "react-native";
import responsive from "../../../constants/responsive";

const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop:10,
      marginBottom:10,
    },
    showImage:{
        display:"flex",
        flex:1,
       
    },
    winImages:{
     width:"100%",
     height:40
    },
    hideImage:{
      display:"none"
    },
   
    card: {
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      gap:15,
      paddingTop:10,
      paddingBottom:10,
      justifyContent:"center",
      alignItems:'center',
      elevation: 3,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      paddingLeft:10,
      paddingRight:10
    },
    idStyle:{
      fontSize:responsive.bodyFontSize,
      color:"black",
      fontWeight:"bold"
    },
    idSection: {
      flex: .5,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderColor: '#ccc',
    },
    imageSection: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 50,
    },
   
    roundedImage: {
      width: "100%",
      height:70,
      aspectRatio: 1, 
     
    },
    infoSection: {
      flex: 3.75,
      padding: 10,
    },
    nameText: {
      color:"black",
      fontSize: responsive.bodyFontSize,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    point:{
      color:"blue"
    }
  });
  export default styles;