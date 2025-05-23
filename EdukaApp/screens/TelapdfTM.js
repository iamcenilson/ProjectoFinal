import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const TelapdfTM = ({ route }) => {
  const { pdfUrl } = route.params;

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Leitor de PDF</Text>
      <WebView source={{ uri: pdfUrl }} style={styles.webview} />
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
    marginTop: 50,
  },
  webview: {
    flex: 1,
  },
});

export default TelapdfTM;
