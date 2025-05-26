import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

const TelaBemVindo = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
            source={require('../assets/fixe.png')}
            style={styles.image}
        />
      </View>

      <Text style={styles.title}>
        Está tudo pronto
      </Text>

      <Text style={styles.description}>
        Bem vindo ao EDUKA o app para todos os Multimediadores
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Concluir</Text>
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
    fontFamily:'Poppins-Bold',
    fontSize: 35,
    color: '#FF6700',
    marginBottom: 40,
  },
  image: {
    width: 257,
    height: 257,
    marginBottom: 60,
    marginTop: '50',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FF6700',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#8338EC',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default TelaBemVindo;
