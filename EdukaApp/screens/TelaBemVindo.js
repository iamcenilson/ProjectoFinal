import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const TelaBemVindo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>
      <View style={styles.iconContainer}>
        <Image
            source={require('../assets/BemVindo.png')}
            style={styles.image}
        />
      </View>
      <Text style={styles.description}>
        Bem vindo ao EDUKA o app para todos os Multimediadores
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>Seguinte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8FF',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1F41BB',
    marginBottom: 60,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 70,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 70,
  },
  button: {
    backgroundColor: '#1F41BB',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TelaBemVindo;
