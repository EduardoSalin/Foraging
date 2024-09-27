// src/screens/GardenScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GardenScreen = () => {
    console.log('GardenScreen loaded');  // This should appear in your Metro logs
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Garden Screen</Text>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default GardenScreen;
