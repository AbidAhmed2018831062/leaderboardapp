import { StyleSheet } from "react-native";
import responsive from "../../../constants/responsive";
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      elevation: 5,
      margin:20
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      padding:10,
      position: 'relative',
    },
    selectedButton: {
      backgroundColor: 'lightblue',
    },
    buttonText: {
      fontSize: responsive.bodyFontSize,
      fontWeight: 'bold',
      color: 'black',
    },
    selectedLine: {
      position: 'absolute',
      height: 3,
      backgroundColor: 'blue',
      bottom: 0,
      width: '50%', // Adjust as needed
    },
  });

  export default styles;