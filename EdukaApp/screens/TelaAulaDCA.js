import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const dcaTemas = {
  "Introdução Multimedia": [
    { id: '1', titulo: 'Conceito Básicos de multimédia', pdf: 'https://drive.google.com/file/d/1graTcvg59f7UgCIATXkpPJW74vHflehQ/view?usp=sharing' },
    { id: '2', titulo: 'Tipos de produtos multimédia', pdf: 'https://drive.google.com/file/d/1dHXVlDlSrV2KqRsmOot1l9F1Ibs6qltz/view?usp=sharing' }
  ],
  "Fotografia Digital": [
    { id: '1', titulo: 'Fotografia Digital', pdf: 'https://drive.google.com/file/d/1_VuXQCNlEFl4TcEEirI7OYLBjM1cMU66/view?usp=sharing' }, 
  ],
  "Comunicação Visual": [
    { id: '1', titulo: 'Evolução do Design', pdf: 'https://drive.google.com/file/d/1fRiFSjfU5kVM4aVcP9_PvhefXbyeH32e/view?usp=sharing' },
    { id: '2', titulo: 'O cartaz', pdf: 'https://drive.google.com/file/d/1Yc6s58P9wI525NNN4M76J1GNHRNjIqcC/view?usp=sharing' }
  ],
  "Princípios do Design": [
    { id: '1', titulo: 'Equilíbrio, Ênfase, Ritmo e Unidade', pdf: 'https://drive.google.com/file/d/1xhrQySVmbo0Nh4dkyg3qSTxoM0OwftPI/view?usp=sharing' }
  ]
};

const TelaAulaDCA = ({ route, navigation }) => {
  const { tema } = route.params;
  const aulas = dcaTemas[tema] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{tema}</Text>
      <ScrollView>
        {aulas.map((aula) => (
          <TouchableOpacity 
            key={aula.id} 
            style={styles.aulaCard} 
            onPress={() => navigation.navigate('PDF', { pdfUrl: aula.pdf })}
          >
            <Icon name="document-text-outline" size={24} color="#17234D" />
            <Text style={styles.aulaTitulo}>{aula.titulo}</Text>
            <Icon name="chevron-forward-outline" size={24} color="#17234D" />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  sectionTitle: {
    color: '#17234D',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  aulaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aulaTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    color: '#17234D',
    marginLeft: 12,
  },
});

export default TelaAulaDCA;
