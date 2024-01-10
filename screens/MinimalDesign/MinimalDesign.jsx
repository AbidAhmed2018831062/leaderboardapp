/* eslint-disable prettier/prettier */
import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './minimal.style';
import CardList from '../../components/Cards/Cards/Cards';
import LinearGradient from 'react-native-linear-gradient';
import TwoButtonsView from '../Common/Menu/NavMenu';
import NavMenu from '../Common/Menu/NavMenu';
import { useRoute } from '@react-navigation/native';
import LeaderBoardText from '../../components/Text/LeaderBoardText';

const MinimalDesign = () => {
  const route = useRoute();
  console.log(route.name);
  return (
    <SafeAreaView>
   <View style={styles.container}>
    <View>
<LeaderBoardText/>
    </View>
    <NavMenu routeName={route.name}/>
  <View style={styles.leaderboardView}>
    <CardList/>
    </View>
  </View>

  </SafeAreaView>
  );
};
export default MinimalDesign;
