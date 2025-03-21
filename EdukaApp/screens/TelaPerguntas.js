import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const perguntas = {
  DCA: [
    { 
      pergunta: 'O que significa DCA?', 
      opcoes: ['Design e comunicação Audiovisual', 'Departamento de Computação Avançada', 'Divisão de Ciências Agrárias', 'Desenvolvimento de Cálculos e Algoritmos'], 
      respostaCorreta: 'Design e comunicação Audiovisual' 
    },
    { 
      pergunta: 'DCA está relacionado a que área?', 
      opcoes: ['Medicina', 'Engenharia', 'Arte', 'Multimédia'], 
      respostaCorreta: 'Multimédia' 
    }
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
    }
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
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>
      <ProgressBar progress={questoes.length > 0 ? (indice + 1) / questoes.length : 0} color="#00C851" style={styles.progressBar} />
      <Text style={styles.score}>Questões {indice + 1} de {questoes.length} | {pontos} Pontos</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{questoes[indice]?.pergunta || 'Carregando...'}</Text>
      </View>
      {questoes[indice]?.opcoes.map((opcao, i) => (
        <TouchableOpacity 
          key={i} 
          style={[styles.optionButton, selecionado === opcao && styles.selectedOption]} 
          onPress={() => setSelecionado(opcao)}
        >
          <Text style={styles.optionText}>{String.fromCharCode(65 + i)}. {opcao}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.verifyButton} onPress={verificarResposta}>
        <Text style={styles.verifyText}>Verificar</Text>
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
    padding: 10,
    backgroundColor: '#FFA706',
    borderRadius: 20,
  },
  backText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  progressBar: {
    width: '80%',
    height: 10,
    marginVertical: 10,
  },
  score: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#FFA706',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#FFA706',
  },
  optionText: {
    color: '#333',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  verifyButton: {
    backgroundColor: '#FFA706',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '90%',
    alignItems: 'center',
  },
  verifyText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
