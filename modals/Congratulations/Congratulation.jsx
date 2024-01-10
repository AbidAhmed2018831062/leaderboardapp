import React, { useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import images from '../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import styles from './congo.style';

const CongratulationModal = ({ visible, onClose }) => {
   
  useEffect(() => {
    if (visible) {
         balloonsAnimationRef?.bounceInUp(1000);
      textAnimationRef?.fadeIn(1000);
    }
  }, [visible]);

  let balloonsAnimationRef;
  let textAnimationRef;

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Animatable.View
          ref={(ref) => (balloonsAnimationRef = ref)}
          style={styles.balloonsContainer}
          animation="bounceInUp"
        >

          <Animatable.Image source={images.balloon} style={{width:200,height:200}}/>
         
        </Animatable.View>
        <View style={styles.congo}>
        <Animatable.Text
          ref={(ref) => (textAnimationRef = ref)}
          style={[styles.congratsText,]}
          animation="fadeIn"
        >
         <Text style={{color:"#b985c0"}}>C</Text>
         <Text style={{color:"#fe9376"}}>O</Text>
         <Text style={{color:"#fea746"}}>N</Text>
         <Text style={{color:"#f3ac44"}}>G</Text>
         <Text style={{color:"#fea746"}}>R</Text>
         <Text style={{color:"#fce940"}}>A</Text>
         <Text style={{color:"#ccf44d"}}>T</Text>
         <Text style={{color:"#e3ee47"}}>U</Text>
         <Text style={{color:"#8df497"}}>L</Text>
         <Text style={{color:"#82edbd"}}>A</Text>
         <Text style={{color:"#83edbd"}}>T</Text>
         <Text style={{color:"#76e6e7"}}>I</Text>
         <Text style={{color:"#86cefe"}}>O</Text>
         <Text style={{color:"#a7b2fe"}}>N</Text>
         <Text style={{color:"#c698ff"}}>S</Text>

        </Animatable.Text>
        
        </View>
       
      </View>
    </Modal>
  );
};


export default CongratulationModal;
