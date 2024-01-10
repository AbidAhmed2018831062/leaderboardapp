import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './leaderboard.style';
import images from '../../constants/images';
const LeaderboardItem = ({item, index}) => {
  const colors = {
    second: ['#bce9ea', '#dce3e6', '#e3e9eb'],
    first: ['#c1e9dc', '#c1e9dc', '#f5dfe2'],
    third: ['#fff8f3', '#fff6f0', '#ffecdf'],
  };
  return (
    <View style={styles.leaderboards}>
      <View style={styles.leaderboardImage}>
        <Image
          source={
            index === 0
              ? images.king
              : index === 1
              ? images.second
              : images.third
          }
          style={styles.king}
        />
        <Image
          source={item.image}
          style={
            index === 1
              ? styles.secondImage
              : index === 0
              ? styles.firstImage
              : styles.thirdImage
          }
        />
      </View>
      <LinearGradient
        colors={
          index === 1
            ? colors.second
            : index === 0
            ? colors.first
            : colors.third
        }
        style={
          index === 1
            ? styles.secondPosition
            : index === 0
            ? styles.firstPosition
            : styles.thirdPosition
        }
        locations={[0, 0.5, 1]}>
        <View style={styles.person}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text
            style={
              index === 1
                ? styles.point2
                : index === 0
                ? styles.point1
                : styles.point3
            }>
            {item.points} points
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};
export default LeaderboardItem;
