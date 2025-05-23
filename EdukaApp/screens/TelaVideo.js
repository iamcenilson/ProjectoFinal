import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const tmTemas = {
  "Photoshop": [
    { id: '1', titulo: 'Introdução ao Photoshop', pdf: 'https://drive.google.com/file/d/1_h3Y5jDw8MsGP_QT6AHlngTI_1zFkwut/view?usp=sharing', video: 'https://youtu.be/9LLSEzn7UcU?list=PL36fy0HIN6VrzMqqsa8I6q3zYR7nSDZmK' },
    { id: '2', titulo: 'Ferramentas do Photoshop', pdf: 'https://drive.google.com/file/d/1_h3Y5jDw8MsGP_QT6AHlngTI_1zFkwut/view?usp=sharing', video: 'https://www.youtube.com/watch?v=kW1n8aNu_58&pp=ygUVcGhvdG9zaG9wIGZlcnJhbWVudGFz' }
  ],
  "Inkscape": [
    { id: '1', titulo: 'Introdução ao Inkscape', pdf: 'https://drive.google.com/file/d/13EK7uy15ak8_5_FuUf7Zecra5VBxK9x9/view?usp=sharing', video: 'https://www.youtube.com/watch?v=ms4LpaNhfgA&pp=ygUYaW50cm9kdcOnw6NvIGFvIGlua3NjYXBl' }
  ],
  "Blender": [
    { id: '1', titulo: 'Introdução ao Blender', pdf: 'https://drive.google.com/file/d/18hiJFSKuvk_j9WkRM5HklZPC1sPs6oN7/view?usp=drive_link' , video: ''},
    { id: '2', titulo: 'Ferramentas do Blender', pdf: 'https://drive.google.com/file/d/18hiJFSKuvk_j9WkRM5HklZPC1sPs6oN7/view?usp=drive_link', video: 'https://www.youtube.com/watch?v=jkl345' }
  ]
};

const TelaVideo = ({ route, navigation }) => {
  const { tema } = route.params;
  const aulas = tmTemas[tema] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{tema}</Text>
      <ScrollView>
        {aulas.map((aula) => (
          <View key={aula.id} style={styles.aulaCard}>
            <Text style={styles.aulaTitulo}>{aula.titulo}</Text>
            
            {/* botao de ler pdf */}
            <TouchableOpacity 
              style={styles.botao}
              onPress={() => navigation.navigate('PDF', { pdfUrl: aula.pdf })}
            >
              <Icon name="document-text-outline" size={24} color="#fff" />
              <Text style={styles.textoBotao}>Ler PDF</Text>
            </TouchableOpacity>

            {/* botão pra assistir */}
            {aula.video && (
              <TouchableOpacity 
                style={styles.botao} 
                onPress={() => {
                  if (aula.video) {
                    navigation.navigate('VideoTM', { video: aula.video });
                  } else {
                    alert("Vídeo indisponível para esta aula.");
                  }
                }}
                
              >
                <Icon name="play-circle-outline" size={24} color="#fff" />
                <Text style={styles.textoBotao}>Assistir Vídeo</Text>
              </TouchableOpacity>
            )}
          </View>
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
    backgroundColor: '#F8F9FF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  aulaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#17234D',
    marginBottom: 10,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#17234D',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default TelaVideo;
