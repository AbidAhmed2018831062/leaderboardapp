import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from './cards.style';
import data from '../../../assets/data/data';
import Items from './Items';

const CardList = () => {
 

  return (
    <View style={styles.container}>
      {data.map((item,index) => (
        <Items item={item} index={index}/>
      ))}
    </View>
  );
};


export default CardList;