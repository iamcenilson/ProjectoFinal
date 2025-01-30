import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const images = [
  { id: '1', src: require('../assets/Slide1.png') },
  { id: '2', src: require('../assets/Slide2.png') },
  { id: '3', src: require('../assets/Slide3.png') },
];

const MenuPrincipal = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // Faz o trocareu* a cada 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Ellipse 1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Cenilson Canguila</Text>
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

      <View style={styles.disciplinesContainer}>
        <Text style={styles.sectionTitle}>Disciplinas</Text>
        <View style={styles.disciplinesButtons}>
          <TouchableOpacity style={styles.disciplineButtonActive}>
            <Text style={styles.disciplineButtonTextActive}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.disciplineButton}>
            <Text style={styles.disciplineButtonText}>DCA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.disciplineButton}>
            <Text style={styles.disciplineButtonText}>Técnicas Multimédia</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.lessonsContainer}>
        <TouchableOpacity style={styles.lessonCard}>
          <Image
            source={require('../assets/Jogo 2d.png')}
            style={styles.lessonImage}
          />
          <View>
            <Text style={styles.lessonTitle}>Aulas: Jodo 2D</Text>
            <Text style={styles.lessonDuration}>Duração: 3h 30min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonCard}>
          <Image
            source={require('../assets/Rectangle 12.png')}
            style={styles.lessonImage}
          />
          <View>
            <Text style={styles.lessonTitle}>Aulas: Edição de Vídeo</Text>
            <Text style={styles.lessonDuration}>Duração: 2h 40min</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footerNavigation}>
        <TouchableOpacity>
          <Icon name="home-outline" size={28} color="#007bff" onPress={() => navigation.navigate('Menu')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="book-outline" size={28} color="#000" onPress={() => navigation.navigate('Curso')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings-outline" size={28} color="#000" onPress={() => navigation.navigate('Quiz')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-circle-outline" size={28} color="#000" onPress={() => navigation.navigate('Perfil')} />
        </TouchableOpacity>
      </View>
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
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  slideshowContainer: {
  marginTop: 16,
  width: '90%',
  height: 180,
  borderRadius: 20,
  overflow: 'hidden',
  alignSelf: 'center',
  backgroundColor: '#ccc',
  },
  slideshowImage: {
    width: width - 19,
    height: 180,
    borderRadius: 15, 
    marginHorizontal: 16,
    resizeMode: 'cover', 
    backgroundColor: '#ccc',
  },
  disciplinesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  disciplinesButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  disciplineButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  disciplineButtonActive: {
    backgroundColor: '#1F41BB',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  disciplineButtonText: {
    color: '#000',
  },
  disciplineButtonTextActive: {
    color: '#fff',
  },
  lessonsContainer: {
    marginTop: 20,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F41BB',
    borderRadius: 25,
    padding: 35,
    marginBottom: 16,
  },
  lessonImage: {
    width: 55,
    height: 55,
    borderRadius: 8,
    marginRight: 12,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#fff',
  },
  footerNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    width: '110%',
  },
});

export default MenuPrincipal;
