import styles from './leaderboard.style';
import data from '../../assets/data/data';
import images from '../../constants/images';
import {Image, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LeaderboardItem from './LeaderboardItem';
const Leaderboard = () => {
    
  return (

    <View style={styles.leaderboardContainer}>
      <LeaderboardItem item={data[1]} index={1}/>
      <LeaderboardItem item={data[0]} index={0}/>
      <LeaderboardItem item={data[2]} index={2}/>
    </View>
  );
};
export default Leaderboard;
