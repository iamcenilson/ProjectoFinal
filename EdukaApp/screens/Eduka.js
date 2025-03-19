import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

const Eduka = () => {
  const navigation = useNavigation();
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Inicio');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('../assets/Video/intro.mp4')}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Eduka;
