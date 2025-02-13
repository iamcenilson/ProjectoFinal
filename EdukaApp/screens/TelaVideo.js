import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const aulasPorTema = {
  Photoshop: [
    { id: '1', titulo: 'Introdução ao Photoshop' },
    { id: '2', titulo: 'Aula 1: Ferramentas Básicas' },
    { id: '3', titulo: 'Aula 2: Camadas e Máscaras' },
  ],
  Inkscape: [
    { id: '1', titulo: 'Introdução ao Inkscape' },
    { id: '2', titulo: 'Aula 1: Vetorização' },
  ],
  Blender: [
    { id: '1', titulo: 'Introdução ao Blender' },
    { id: '2', titulo: 'Aula 1: Ferramentas básicas do Blender' },
  ],
  Unity: [
    { id: '1', titulo: 'Introdução ao Unity' },
    { id: '2', titulo: 'Aula 1: Ferramentas básicas do Unity' },
  ],
};

const TelaVideo = ({ route }) => {
  const navigation = useNavigation();
  const { tema } = route.params;
  const aulas = aulasPorTema[tema] || [];

  return (
    <View style={styles.container}>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/linear.png')} style={styles.bannerImage} />
        <View style={styles.bannerContent}>
          <View style={styles.iconCircle}>
            <Icon name="time-outline" size={24} color="#17234D" />
          </View>
          <Text style={styles.titulo}>Técnicas Multimédia</Text>
          <Text style={styles.temaText}>Tema: {tema}</Text>
        </View>
      </View>

      {/* Lista de aulas */}
      <FlatList
        data={aulas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.aulaCard}
            onPress={() => navigation.navigate('TelaAula', { tema, titulo: item.titulo })}
          >
            <Text style={styles.aulaTitulo}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  bannerContainer: {
    height: 185,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    marginTop: 12,
    marginBottom: 30,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContent: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 0,
    bottom: 5,
    justifyContent: 'center',
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#F8F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  temaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  aulaCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 30,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  aulaTitulo: {
    fontSize: 16,
    color: '#000000',
  },
  titulo: {
    color: '#17234D',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default TelaVideo;
