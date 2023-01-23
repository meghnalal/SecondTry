import { useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Font1() {
  const [fontsLoaded] = useFonts({
    'MontserratThin': require('../assets/font/MontserratThin.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} >
      <Text style={{ fontFamily: 'MontserratThin', fontSize: 30 }}>MontserratThin working</Text>
      <Text style={{ fontSize: 30 }}> Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
