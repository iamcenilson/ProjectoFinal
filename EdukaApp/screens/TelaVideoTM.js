import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const TelaVideoTM = ({ route, navigation }) => {
  const videoRef = useRef(null); 

  
  const { titulo = 'Vídeo' } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>

      <Video
        ref={videoRef}
        source={require('../assets/Video/lebron.mp4')}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
      />

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#17234D',
    marginBottom: 20,
  },
  video: {
    width: '90%',
    height: 250,
    backgroundColor: '#000',
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17234D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default TelaVideoTM;
