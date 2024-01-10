import { StyleSheet, Text } from "react-native";
import responsive from "../../constants/responsive";

const LeaderBoardText=()=>{
    return (
        <Text style={styles.leaderboard}>
            Leaderboard App
         </Text>

    );
};
const styles=StyleSheet.create({
    leaderboard: {
        display:'flex',
        textAlign: 'center',
        fontSize: 32,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'blue',
      },
});

export default LeaderBoardText;