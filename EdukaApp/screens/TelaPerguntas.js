import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const perguntas = {
  DCA: [
    { 
      pergunta: 'O que significa DCA?', 
      opcoes: ['Design comunicação e Audiovisual', 'Departamento de Computação Avançada', 'Divisão de Ciências Agrárias', 'Desenvolvimento de Cálculos e Algoritmos'], 
      respostaCorreta: 'Design comunicação e Audiovisual' 
    },
    { 
      pergunta: 'DCA está relacionado a que área?', 
      opcoes: ['Medicina', 'Engenharia', 'Arte', 'Multimédia'], 
      respostaCorreta: 'Multimédia' 
    },
  ],
  TM: [
    { 
      pergunta: 'O que é multimídia?', 
      opcoes: ['Uso exclusivo de texto e áudio', 'Combinação de diferentes tipos de mídia como texto, imagem, áudio e vídeo', 'Apenas a combinação de imagens e vídeos', 'Ferramenta para criar jogos'], 
      respostaCorreta: 'Combinação de diferentes tipos de mídia como texto, imagem, áudio e vídeo' 
    },
    { 
      pergunta: 'Qual das opções é um exemplo de multimídia?', 
      opcoes: ['Um livro impresso', 'Um vídeo interativo', 'Uma pintura', 'Uma fotografia'], 
      respostaCorreta: 'Um vídeo interativo' 
    },
  ]
};

export default function TelaPerguntas({ route, navigation }) {
  const disciplina = route?.params?.disciplina || 'DCA';
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [selecionado, setSelecionado] = useState(null);
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    setQuestoes(perguntas[disciplina] || []);
  }, [disciplina]);

  const verificarResposta = () => {
    if (questoes.length === 0) return;
    if (selecionado === questoes[indice].respostaCorreta) {
      setPontos(pontos + 100);
    }
    if (indice < questoes.length - 1) {
      setIndice(indice + 1);
      setSelecionado(null);
    } else {
      alert(`Quiz concluído! Pontuação final: ${pontos}`);
      navigation.navigate("Resultado");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.score}>Questões {indice + 1} de {questoes.length} | {pontos} Pontos</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questoes[indice]?.pergunta || 'Carregando...'}</Text>
      </View>
      {questoes[indice]?.opcoes.map((opcao, i) => (
        <TouchableOpacity 
          key={i} 
          style={[
          styles.optionButton, 
          selecionado === opcao && styles.selectedOption
        ]} 
        onPress={() => setSelecionado(opcao)}
      >
          <View style={styles.optionCircle}><Text style={styles.optionLetter}>{String.fromCharCode(65 + i)}</Text></View>
          <Text style={styles.optionText}>{opcao}</Text>
        </TouchableOpacity>
        

      ))}
      <TouchableOpacity style={styles.verifyButton} onPress={verificarResposta}>
       <LinearGradient
            colors={['#FF8000', '#FFD700']}
            style={styles.VerifyGradient}
      >
            <Text style={styles.verifyText}>Verificar</Text>
      </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FB',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#FF6700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    marginTop: 35,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  questionContainer: {
    backgroundColor: '#F6FAFB',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: '300',
    height:'175',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  questionText: {
    marginTop:'50',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 13,
    borderRadius: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#FFA706',
    width: '100%',

  },
  trueOption: {
    borderColor: 'green',
  },
  falseOption: {
    borderColor: 'red',
  },
  selectedOption: {
    backgroundColor: '#FFA706',
  },
  optionCircle: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#8338EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  optionLetter: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
  },
  optionText: {
    color: '#333',
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  VerifyGradient: {
    marginTop: '15',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  verifyText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 15
  },
});
