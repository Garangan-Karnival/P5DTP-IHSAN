import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // Tunggu 2 detik sebelum pindah ke Home
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;