import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TelaVideoTM = ({ route }) => {
  const { titulo = 'Vídeo', video } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <WebView
        source={{ uri: video }}
        style={styles.video}
        allowsFullscreenVideo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#17234D',
    marginBottom: 20,
    textAlign: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default TelaVideoTM;
