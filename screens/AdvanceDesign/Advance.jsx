/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './advance.style';
import CardList from '../../components/Cards/Cards/Cards';
import LinearGradient from 'react-native-linear-gradient';
import TwoButtonsView from '../Common/Menu/NavMenu';
import NavMenu from '../Common/Menu/NavMenu';
import { useRoute } from '@react-navigation/native';
import Leaderboard from '../../components/Leaderboard/LeaderBoard';
import CongratulationModal from '../../modals/Congratulations/Congratulation';
import images from '../../constants/images';
import LeaderBoardText from '../../components/Text/LeaderBoardText';

const AdvanceDesign = () => {
const route = useRoute();
console.log(route.name);

const [showCongratsModal, setShowCongratsModal] = React.useState(false);

  React.useEffect(() => {
    setShowCongratsModal(true);
    const closeTimeout = setTimeout(() => {
      setShowCongratsModal(false);
    }, 1500);
    return () => clearTimeout(closeTimeout);
  }, []); 

  return (
    <SafeAreaView>
          <ScrollView>
   <View style={styles.container}>
    <View>
      <LeaderBoardText/>
    </View>
    <NavMenu routeName={route.name}/>
    <Leaderboard/>
    <CardList/>
    <CongratulationModal visible={showCongratsModal} onClose={() => setShowCongratsModal(false)} />
  </View>
  </ScrollView>

  </SafeAreaView>
  );
};
export default AdvanceDesign;
