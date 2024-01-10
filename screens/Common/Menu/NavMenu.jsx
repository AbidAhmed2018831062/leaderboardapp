import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './navmenu.style';
import { useNavigation } from "@react-navigation/native";

const NavMenu = ({routeName}) => {
  const [selectedButton, setSelectedButton] = useState(routeName);
  const navigation = useNavigation();

  const handleButtonPress = buttonName => {
    setSelectedButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer,]}>
        <TouchableOpacity
          style={[styles.button, selectedButton === 'Minimal' && styles.selectedButton]}
          onPress={() => {
          routeName!=="Minimal"?navigation.push('Minimal',):"";
          }}
        >
          <Text style={styles.buttonText}>Minimal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, selectedButton === 'Advance' && styles.selectedButton]}
          onPress={() => {
            routeName!=="Advance"?navigation.push('Advance',):""
          }}
        >
          <Text style={styles.buttonText}>Advance</Text>
        </TouchableOpacity>
      </View>
      {selectedButton && (
        <View
          style={[
            styles.selectedLine,
            {
              left:
                selectedButton === 'Minimal'
                  ? 0
                  : selectedButton === 'Advance'
                  ? '50%'
                  : 0,
            },
          ]}
        />
      )}
    </View>
  );
};



export default NavMenu;
