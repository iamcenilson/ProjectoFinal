import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

const images = [
  { id: '1', src: require('../assets/Slide 1.png') },
  { id: '2', src: require('../assets/Slide 2.png') },
  { id: '3', src: require('../assets/Slide 3.png') },
];

const MenuPrincipal = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDisciplina, setSelectedDisciplina] = useState("Todas");

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  const aulas = [
    { id: "1", titulo: "Design e comunicação de Audiovisual", disciplina: "DCA", imagem: require('../assets/Jogo 2d.png') },
    { id: "2", titulo: "Técnicas Multimédia", disciplina: "Técnicas Multimédia", imagem: require('../assets/Rectangle 12.png') },
  ];

  // Filtração das disciplina selecionada
  const aulasFiltradas = selectedDisciplina === "Todas" 
    ? aulas 
    : aulas.filter(aula => aula.disciplina === selectedDisciplina);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Perfil.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Alanna da Costa</Text>
      </View>

      {/* Slideshow */}
      <View style={styles.slideshowContainer}>
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={item.src} style={styles.slideshowImage} />
          )}
        />
      </View>

      {/* Botões de disciplina */}
      <View style={styles.disciplinesContainer}>
        <Text style={styles.sectionTitle}>Disciplinas</Text>
        <View style={styles.disciplinesButtons}>
          {["Todas", "DCA", "Técnicas Multimédia"].map((disciplina) => (
            <TouchableOpacity
              key={disciplina}
              style={[
                styles.disciplineButton,
                selectedDisciplina === disciplina && styles.disciplineButtonActive
              ]}
              onPress={() => setSelectedDisciplina(disciplina)}
            >
              <Text style={[
                styles.disciplineButtonText,
                selectedDisciplina === disciplina && styles.disciplineButtonTextActive
              ]}>
                {disciplina}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Lista de aulas filtradas */}
      <ScrollView style={styles.lessonsContainer}>
        {aulasFiltradas.map((aula) => (
          <TouchableOpacity key={aula.id} style={styles.lessonCard}>
            <Image source={aula.imagem} style={styles.lessonImage} />
            <View>
              <Text style={styles.lessonTitle}>{aula.titulo}</Text>
              <Text style={styles.lessonDuration}></Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  name: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  slideshowContainer: {
    marginTop: 16,
    width: '100%',
    height: 160,
    borderRadius: 15,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  slideshowImage: {
    width: width - 32,
    height: 160,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  disciplinesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  disciplinesButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  disciplineButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  disciplineButtonActive: {
    backgroundColor: '#1F41BB',
  },
  disciplineButtonText: {
    color: '#000',
    fontWeight: 'bold'
  },
  disciplineButtonTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  lessonsContainer: {
    marginTop: 20,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 33,
    marginBottom: 13,
  },
  lessonImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000 ',
  },
});

export default MenuPrincipal;
