import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; 

export default function TelaQuiz({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fontes/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fontes/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="chevron-back" size={30} color="#FF6700" />
      </TouchableOpacity>

      {/* Fundo Laranja */}
      <View style={styles.header}>
        <Image source={require('../assets/fundoQuiz.png')} style={styles.backgroundImage} />
        <Text style={styles.title}>Quiz</Text>
      </View>

      {/* Ícone */}
      <Image source={require('../assets/IconeQuiz.png')} style={styles.icon} />

      {/* Texto de Introdução */}
      <Text style={styles.introText}>
        Venha testar os teus conhecimentos <Text style={styles.boldText}>Multimediano!</Text>
      </Text>
      <Text style={styles.warningText}>
        ** Mas cuidado... só os verdadeiros
      </Text>
      <Text style={styles.warningText}>multimedianos vão gabaritar! 🔥</Text>

      {/* Botões de Seleção */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Perguntas', { disciplina: 'DCA' })}
        >
          <Text style={styles.buttonText}>D.C.A</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Perguntas', { disciplina: 'TM' })}
        >
          <Text style={styles.buttonText}>T.M</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FB',
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    width: 35,
    height: 35,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: '0%',
    alignItems: 'center',
  },
  backgroundImage: {
    width: 390,
    height: 389,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    position: 'absolute',
    top: '25%',
    fontSize: 55,
    color: '#FFFFFF',
  },
  icon: {
    marginTop: 205,
    width: 305,
    height: 240,
    resizeMode: 'contain',
  },
  introText: {
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#303036',
    marginBottom: 25,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    color: '#FF6700',
  },
  warningText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: '#303036',
    marginBottom: 0,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    borderWidth: 2,
    borderColor: '#FF6700',
    borderRadius: 30,
    paddingVertical: 9,
    paddingHorizontal: 45,
    marginHorizontal: 15,
  },
  buttonText: {
    color: '#FF6700',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});
