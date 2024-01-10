import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    balloonsContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    congo:{
        display:"flex",
        flexDirection:"row",
    },
    congratsText: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    closeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#3498db',
      borderRadius: 8,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  export default styles