import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const TelaAulaTM = ({ route }) => {
  const navigation = useNavigation();
  const { titulo = 'Aula', video, pdf } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>

      {/* Botão para assistir vídeo */}
      {video ? (
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => navigation.navigate('VideoTM', { titulo, video })}
        >
          <Icon name="play-circle-outline" size={24} color="#fff" />
          <Text style={styles.textoBotao}>Assistir Vídeo</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.mensagemAviso}>Vídeo não disponível</Text>
      )}

      {/* Botão para ler PDF */}
      {pdf ? (
        <TouchableOpacity 
          style={styles.botao} 
          onPress={() => navigation.navigate('pdfDCA', { titulo, pdf })}
        >
          <Icon name="document-text-outline" size={24} color="#fff" />
          <Text style={styles.textoBotao}>Ler PDF</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.mensagemAviso}>PDF não disponível</Text>
      )}
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
  mensagemAviso: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
});

export default TelaAulaTM;
