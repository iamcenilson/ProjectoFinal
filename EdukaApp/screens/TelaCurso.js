import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TelaCurso = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require('../assets/Ellipse 1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Cenilson Canguila</Text>
      </View>


      <View style={styles.featuredLessonContainer}>
        <Image
          source={require('../assets/12.png')}
          style={styles.featuredLessonImage}
        />
        <View style={styles.featuredLessonTextContainer}>
          <Text style={styles.featuredLessonTitle}></Text>
          <Text style={styles.featuredLessonSubtitle}></Text>
        </View>
      </View>

      
      <ScrollView style={styles.lessonsContainer}>
        <TouchableOpacity style={styles.lessonCard}>
          <Image
            source={require('../assets/22.png')}
            style={styles.lessonImage}
          />
          <View>
            <Text style={styles.lessonTitle}>Introdução ao Jogo 2D</Text>
            <Text style={styles.lessonDuration}>Duração: 1h 15min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonCard}>
          <Image
            source={require('../assets/22.png')}
            style={styles.lessonImage}
          />
          <View>
            <Text style={styles.lessonTitle}>Jogo 2D Aula 2</Text>
            <Text style={styles.lessonDuration}>Duração: 2h 35min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonCard}>
          <Image
            source={require('../assets/22.png')}
            style={styles.lessonImage}
          />
          <View>
            <Text style={styles.lessonTitle}>Jogo 2D Aula 3</Text>
            <Text style={styles.lessonDuration}>Duração: 3h 18min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lessonCard}>
          <Image
            source={require('../assets/22.png')}
            style={styles.lessonImage}
          />
          <View>
            <Text style={styles.lessonTitle}>Jogo 2D Aula 4</Text>
            <Text style={styles.lessonDuration}>Duração: 4h 18min</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      
      <View style={styles.footerNavigation}>
        <TouchableOpacity>
          <Icon name="home-outline" size={28} color="#000" onPress={() => navigation.navigate('Menu')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="book-outline" size={28} color="#007bff" onPress={() => navigation.navigate('Curso')} />
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
  featuredLessonContainer: {
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },
  featuredLessonImage: {
    width: '100%',
    height: 216,
  },
  featuredLessonTextContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  featuredLessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  featuredLessonSubtitle: {
    fontSize: 14,
    color: '#fff',
  },
  lessonsContainer: {
    marginTop: 30,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    borderRadius: 25,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  lessonImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonDuration: {
    fontSize: 14,
    color: '#666',
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

export default TelaCurso;
