import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TelapdfTM = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Leitor de PDF</Text>
      <WebView
        source={require('../assets/pdf/Manual de Photoshop(EDUKA).pdf')}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  webview: {
    flex: 1,
  },
});

export default TelapdfTM;
