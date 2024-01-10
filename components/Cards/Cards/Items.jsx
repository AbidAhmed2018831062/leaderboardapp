import styles from './cards.style';
import { View, Text, Image, StyleSheet, ImageBackground,Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import images from '../../../constants/images';
import { useEffect, useRef, } from 'react';
const Items=({item,index})=>{
  const translateY = useRef(new Animated.Value(1000)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [translateY]);
    return (
      
      <Animated.View
      key={item.id}
      style={[styles.card, { transform: [{ translateY: translateY }] }]}
    >
        
          <View style={styles.idSection}>
           
            <Text style={styles.idStyle}>{item.id}</Text>

          </View>

          <View style={styles.imageSection}>
            <Image source={item.image} style={styles.roundedImage} />
          </View>
           <View style={styles.infoSection}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.point}>Points: {item.points}</Text>
          </View>
          <View style={styles.showImage}>
        {index<=2?   <Image source={index===0?images.king:index===1?images.second:images.third} style={styles.winImages}/>:""}
          </View>
        </Animated.View>
      
    )
}
export default Items;