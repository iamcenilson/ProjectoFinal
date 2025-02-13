import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const TelaAulaTM = ({ route }) => {
  const { titulo } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>

      {/* Botão para assistir vídeo */}
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('VideoTM', { titulo })}
      >
        <Icon name="play-circle-outline" size={24} color="#fff" />
        <Text style={styles.textoBotao}>Assistir Vídeo</Text>
      </TouchableOpacity>

      {/* Botão para ler PDF */}
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Pdf', { titulo })}
      >
        <Icon name="document-text-outline" size={24} color="#fff" />
        <Text style={styles.textoBotao}>Baixar PDF</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#17234D',
    marginBottom: 30,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17234D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default TelaAulaTM;
