import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const perguntas = {
 //Perguntas sobre DCA "Poga é bué ya faq"
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
    {
      pergunta: 'O que é multimédia?',
      opcoes: ['Uso de texto, som, imagem e vídeo', 'Apenas som' , 'Apenas texto e imagem', 'Apenas gráficos'],
      respostaCorreta: 'Uso de texto, som, imagem e vídeo'
    },
     {
      pergunta: 'Qual é a principal vantagem da multimédia?',
      opcoes: ['Menor uso de recursos', ' Apenas uso de som' , 'Maior interação com o usuário', 'Baixo custo de produção'],
      respostaCorreta: 'Maior interação com o usuário'
    },
    {
      pergunta: 'Qual destes é um componente da multimédia?',
      opcoes: ['Vídeo', 'Excel' , 'Teclado', 'Impressora'],
      respostaCorreta: 'Vídeo'
    },
    {
      pergunta: 'Um exemplo de aplicação multimédia é:',
      opcoes: ['Uma carta escrita à mão', 'Um livro impresso' , 'Um rádio sem tela', 'Um jogo educativo'],
      respostaCorreta: 'Um jogo educativo'
    },
    {
      pergunta: 'Qual dos seguintes NÃO é uma característica da multimédia?',
      opcoes: ['Interatividade', 'Uso exclusivo de texto' , 'Integração de mídias', 'Apresentação visual'],
      respostaCorreta: 'Uso exclusivo de texto'
    },
    {
      pergunta: 'Multimédia é mais eficaz em:',
      opcoes: ['Substituir professores', ' Apresentar tabelas numéricas' , 'Transmitir informação de forma interativa', 'Reduzir o tamanho de arquivos'],
      respostaCorreta: 'Transmitir informação de forma interativa'
    },
    {
      pergunta: 'Qual componente multimédia envolve apenas elementos visuais?',
      opcoes: ['Som', ' Vídeos' , 'Narração', 'Imagem'],
      respostaCorreta: 'Imagem'
    },
    {
      pergunta: 'O que é necessário para criar conteúdos multimédia?',
      opcoes: ['Um navegador de internet', 'Uma impressora' , 'Apenas um editor de texto', 'Software de edição e mídias variadas'],
      respostaCorreta: 'Software de edição e mídias variadas'
    },
    {
      pergunta: 'O PowerPoint é considerado:',
      opcoes: ['Um banco de dados', 'Uma ferramenta de apresentação multimédia' , 'Um antivírus', 'Um editor de código'],
      respostaCorreta: 'Uma ferramenta de apresentação multimédia'
    },
    {
      pergunta: 'Qual tecnologia é usada para distribuir multimédia online?',
      opcoes: ['HTML5', 'Bluetooth' , 'BIOS', 'MS-DOS'],
      respostaCorreta: 'HTML5'
    },
    {
      pergunta: 'Qual dispositivo é usado para capturar uma fotografia digital?',
      opcoes: ['Monitor', 'Scanner' , 'Câmera digital', 'Impressora'],
      respostaCorreta: 'Câmera digital'
    },
    {
      pergunta: 'A resolução de uma imagem digital é medida em:',
      opcoes: ['Megapixels', 'Quilogramas' , 'Volts', 'Graus'],
      respostaCorreta: 'Megapixels'
    },
    {
      pergunta: 'O que significa ISO na fotografia',
      opcoes: ['Tamanho da lente', 'Sensibilidade à luz' , 'Cor da imagem', 'Zoom óptico'],
      respostaCorreta: 'Sensibilidade à luz'
    },
    {
      pergunta: 'O obturador controla:',
      opcoes: ['Qualidade da lente', 'Tamanho da foto' , 'Tempo de entrada de luz', 'Tipo de sensor'],
      respostaCorreta: 'Tempo de entrada de luz'
    },
    {
      pergunta: 'Uma imagem pixelada indica:',
      opcoes: ['Baixa resolução', 'Exposição correta' , 'Alta qualidade', 'Bom contraste'],
      respostaCorreta: 'Baixa resolução'
    },
    {
      pergunta: 'O que é balanço de branco?',
      opcoes: ['Ajuste de cor para tons realistas', 'Aumentar o brilho' , 'Mudar o tamanho', ' Diminuir o contraste'],
      respostaCorreta: 'Ajuste de cor para tons realistas'
    },
    {
      pergunta: 'Qual destes é um formato de imagem?',
      opcoes: ['JPEG', 'PNGG' , 'DOCX', 'MP3'],
      respostaCorreta: 'JPEG'
    },
    {
      pergunta: 'O flash é usado para:',
      opcoes: ['Corrigir cores', 'Aumentar o zoom' , 'Iluminar a cena', 'Mudar o foco'],
      respostaCorreta: 'Iluminar a cena'
    },
    {
      pergunta: 'Uma lente grande-angular é ideal para:',
      opcoes: ['Paisagens', 'Retratos fechados' , 'Fotos noturnas', 'Macrofotografia'],
      respostaCorreta: 'Paisagens'
    },
    {
      pergunta: 'O que é foco automático?',
      opcoes: ['Ajuste automático de nitidez', 'Ajuste manual da lente' , 'Redução de ruído', 'Corte da imagem'],
      respostaCorreta: 'Ajuste automático de nitidez'
    },
    {
      pergunta: 'A comunicação visual usa:',
      opcoes: ['Linguagem verbal', 'Apenas sons' , 'Elementos visuais para transmitir mensagens', 'Texto impresso apenas'],
      respostaCorreta: 'Elementos visuais para transmitir mensagens'
    },
    {
      pergunta: 'Qual destes é um elemento visual?',
      opcoes: ['Cor', 'Som' , 'Cheiro', 'Temperatura'],
      respostaCorreta: 'Cor'
    },
    {
      pergunta: 'Um cartaz publicitário é um exemplo de:',
      opcoes: ['Comunicação oral', 'Comunicação visual' , 'Comunicação textual', 'Comunicação tátil'],
      respostaCorreta: ' Comunicação visual'
    },
    {
      pergunta: 'O principal objetivo da comunicação visual é:',
      opcoes: ['Criar textos longos', 'Substituir a fala' , 'Produzir som ambiente', 'Transmitir ideias com impacto visual'],
      respostaCorreta: 'Transmitir ideias com impacto visual'
    },
    {
      pergunta: 'O que pode interferir na boa comunicação visual?',
      opcoes: ['Uso de imagens', 'Título chamativo' , 'Boas cores', 'Excesso de informação'],
      respostaCorreta: 'Excesso de informação'
    },
    {
      pergunta: 'Uma boa comunicação visual deve ser:',
      opcoes: ['Clara e objetiva', 'Complexa e abstrata' , 'Cheia de texto', 'Visualmente poluída'],
      respostaCorreta: 'Clara e objetiva'
    },
    {
      pergunta: 'Tipografia é o estudo de:',
      opcoes: ['Letras e estilos de fonte', 'Cores primárias' , 'Animações', 'Efeitos sonoros'],
      respostaCorreta: 'Letras e estilos de fonte'
    },
    {
      pergunta: 'O contraste ajuda a:',
      opcoes: ['Apagar conteúdo', 'Destacar elementos' , 'Aumentar o texto', 'Reduzir a nitidez'],
      respostaCorreta: 'Destacar elementos'
    },
    {
      pergunta: 'Qual é um princípio de design?',
      opcoes: ['Distorção', 'Equilíbrio' , 'Desorganização', 'Caos visual'],
      respostaCorreta: 'Equilíbrio'
    },
    {
      pergunta: 'Qual é um princípio de design?',
      opcoes: ['Distorção', 'Equilíbrio' , 'Desorganização', 'Caos visual'],
      respostaCorreta: 'Equilíbrio'
    },
    {
      pergunta: 'A repetição no design serve para:',
      opcoes: ['Confundir o usuário', 'Criar consistência' , 'Poluir o layout', 'Diminuir a legibilidade'],
      respostaCorreta: 'Criar consistência'
    },
    {
      pergunta: 'O alinhamento ajuda a:',
      opcoes: ['Organizar os elementos visualmente', 'Esconder informações' , 'Misturar cores', 'Apagar conteúdo'],
      respostaCorreta: 'Organizar os elementos visualmente'
    },
    {
      pergunta: 'A hierarquia visual indica:',
      opcoes: ['A quantidade de imagens', 'O número de palavras' , 'O que é mais importante', 'O tempo da apresentação'],
      respostaCorreta: 'O que é mais importante'
    },
    {
      pergunta: 'O espaço em branco é usado para:',
      opcoes: ['Adicionar efeitos', 'Compactar tudo' , 'Preencher com texto', 'Dar respiro e clareza'],
      respostaCorreta: 'Dar respiro e clareza'
    },
    {
      pergunta: 'Contraste entre texto e fundo melhora:',
      opcoes: ['Leitura', 'Tamanho do arquivo' , 'A qualidade do áudio', 'O brilho da tela'],
      respostaCorreta: 'Leitura'
    },
    {
      pergunta: 'Qual destes reforça o princípio de proximidade?',
      opcoes: ['Elementos espalhados', 'Itens relacionados próximos uns dos outros' , 'Uso de fontes grandes', 'Uso de cores fortes'],
      respostaCorreta: 'Itens relacionados próximos uns dos outros'
    },
    {
      pergunta: 'Qual é o objetivo da simplicidade no design?',
      opcoes: ['Tornar a mensagem clara', 'Impressionar com complexidade' , 'Preencher todos os espaços', 'Usar todos os efeitos possíveis'],
      respostaCorreta: 'Tornar a mensagem clara'
    },
    {
      pergunta: 'Qual destes é um exemplo de harmonia visual?',
      opcoes: ['Fundos animados', 'Texto desalinhado' , 'Muitos estilos diferentes', 'Cores e fontes combinando bem'],
      respostaCorreta: 'Cores e fontes combinando bem'
    },
    {
      pergunta: 'O princípio de contraste envolve:',
      opcoes: ['Ignorar formas', 'Evitar mudanças' , 'Diferença entre elementos para destaque', 'Usar a mesma cor em tudo'],
      respostaCorreta: 'Diferença entre elementos para destaque'
    },
  ],
  //Terminou aqui 



//Perguntas de TM "faq tbm é bué"
  TM: [
    {
      pergunta: 'O Photoshop é usado principalmente para:',
      opcoes: ['Edição de imagens', 'Programação', 'Criação de planilhas', 'Design 3D'],
      respostaCorreta: 'Edição de imagens'
    },
    {
      pergunta: 'O atalho para desfazer uma ação no Photoshop é:',
      opcoes: ['ctrl + Z', 'Alt + F4', 'Ctrl + Z', 'Shift + Z'],
      respostaCorreta: 'Ctrl + Z'
    },
    {
      pergunta: 'Qual é a função da "ferramenta de carimbo"?:',
      opcoes: ['Mover camadas', 'Cortar a imagem', 'Adicionar texto', 'Copiar uma parte da imagem e aplicar em outra área'],
      respostaCorreta: 'Copiar uma parte da imagem e aplicar em outra área'
    },
    {
      pergunta: 'O que são camadas (layers) no Photoshop?',
      opcoes: ['Elementos empilhados que compõem uma imagem','Arquivos de vídeo','Ferramentas de edição de texto', 'Códigos de script'],
      respostaCorreta: 'Elementos empilhados que compõem uma imagem'
    },
    {
      pergunta: 'A função da ferramenta “varinha mágica” é:',
      opcoes: ['Pintar manualmente', 'Selecionar áreas de cor semelhante', 'Desenhar linhas retas', 'Criar sombras'],
      respostaCorreta: 'Selecionar áreas de cor semelhante'
    },
    {
      pergunta: 'O formato padrão de projeto no Photoshop é:',
      opcoes: ['PSD', 'Alt + F4', 'Ctrl + Z', 'Shift + Z'],
      respostaCorreta: 'PSD'
    },
    {
      pergunta: 'A opção “opacidade” controla:',
      opcoes: ['Brilho da tela', 'Tamanho do arquivo', 'Transparência da camada', 'Zoom da imagem'],
      respostaCorreta: 'Transparência da camada'
    },
    {
      pergunta: 'Qual ferramenta permite mover elementos?',
      opcoes: ['Zoom', 'Borracha', 'Pincel', 'Ferramenta de mover'],
      respostaCorreta: 'Ferramenta de mover'
    },
    {
      pergunta: 'O menu “Filtro” é usado para:',
      opcoes: ['Inserir códigos', 'Aplicar efeitos visuais', 'Compactar arquivos', 'Cortar a imagem'],
      respostaCorreta: 'Aplicar efeitos visuais'
    },
    {
      pergunta: 'O que acontece ao aplicar uma máscara de camada?',
      opcoes: ['Controla quais partes da camada são visíveis', 'Diminui o tamanho do arquivo', 'Cria uma nova camada', 'Apaga a imagem'],
      respostaCorreta: 'Controla quais partes da camada são visíveis'
    },
    {
      pergunta: 'O Blender é um software para:',
      opcoes: ['Modelagem e animação 3D', 'Edição de texto', 'Design vetorial', 'Gravação de áudio'],
      respostaCorreta: 'Modelagem e animação 3D'
    },
    {
      pergunta: 'Qual é a extensão padrão de arquivos do Blender?',
      opcoes: ['.blend', '.psd', '.ai', '.obj'],
      respostaCorreta: '.blend'
    },
    {
      pergunta: 'O atalho para mover objetos é:',
      opcoes: ['R', 'G', 'S', 'M'],
      respostaCorreta: 'G'
    },
    {
      pergunta: 'A função da tecla “Z” é:',
      opcoes: ['Apagar malha', 'Salvar o projeto', 'Duplicar objeto', 'Alternar entre modos de visualização'],
      respostaCorreta: 'Alternar entre modos de visualização'
    },
    {
      pergunta: 'O que é um keyframe?',
      opcoes: [' Uma textura', 'Um ponto de animação no tempo', 'Um objeto', 'Um modificador'],
      respostaCorreta: 'Um ponto de animação no tempo'
    },
    {
      pergunta: 'Para girar um objeto, usa-se a tecla:',
      opcoes: ['G', 'R', ' T', 'F'],
      respostaCorreta: 'R'
    },
    {
      pergunta: 'Qual destes é um modificador usado no Blender?',
      opcoes: ['Subdivision Surface', 'Fade In', 'Hue/Saturation', 'Text Wrap'],
      respostaCorreta: 'Subdivision Surface'
    },
    {
      pergunta: 'O que é renderização?',
      opcoes: ['Cortar vídeo', 'Processo de gerar uma imagem final a partir da cena', 'Gravar som', 'Reduzir tamanho de arquivo'],
      respostaCorreta: 'Processo de gerar uma imagem final a partir da cena'
    },
    {
      pergunta: 'A "Timeline" serve para:',
      opcoes: ['Criar objetos 3D', 'Exportar projetos','Controlar animações no tempo', 'Ajustar texturas'],
      respostaCorreta: 'Controlar animações no tempo'
    },
    {
      pergunta: 'O "Edit Mode" permite:',
      opcoes: ['Alterar a malha do objeto', 'Ajustar luzes', 'Renderizar a cena', 'Aplicar filtros'],
      respostaCorreta: 'Alterar a malha do objeto'
    },

    
    {
      pergunta: 'O Inkscape é um programa para:',
      opcoes: ['Desenho vetorial', 'Modelagem 3D', 'Edição de áudio', 'Renderização'],
      respostaCorreta: 'Desenho vetorial'
    },
    {
      pergunta: 'O formato nativo de arquivo do Inkscape é:',
      opcoes: [' PNG', 'PSD', 'SVG', 'JPG'],
      respostaCorreta: 'SVG'
    },
    {
      pergunta: 'O que caracteriza um gráfico vetorial?',
      opcoes: ['É feito de pixels', 'Pode ser redimensionado sem perder qualidade', 'Usa som', 'É tridimensional'],
      respostaCorreta: 'Pode ser redimensionado sem perder qualidade'
    },
    {
      pergunta: 'A ferramenta "Caneta Bézier" serve para:',
      opcoes: ['Criar curvas e formas vetoriais', ' Apagar objetos', ' Preencher com cor', 'Exportar imagens'],
      respostaCorreta: 'Criar curvas e formas vetoriais'
    },
    {
      pergunta: 'O Inkscape permite trabalhar com:',
      opcoes: ['Camadas', 'Cenas 3D', 'Códigos HTML', 'Plugins de áudio'],
      respostaCorreta: 'Camadas'
    },
    {
      pergunta: 'Para criar um círculo perfeito, você deve:',
      opcoes: ['Digitar “círculo” no campo de busca', 'Usar o modo texto', 'Usar a tecla Alt', 'Segurar Ctrl ao arrastar a elipse'],
      respostaCorreta: 'Segurar Ctrl ao arrastar a elipse'
    },
  ]
  //Terminou 
};

export default function TelaPerguntas({ route, navigation }) {
  const disciplina = route?.params?.disciplina || 'DCA';
  const questoes = perguntas[disciplina] || [];
  const [indice, setIndice] = useState(0);
  const [pontos, setPontos] = useState(0);
  const [selecionado, setSelecionado] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const mostrarResultado = () => {
    if (!selecionado || feedback) return;

    const acertou = selecionado === questoes[indice].respostaCorreta;
    if (acertou) {
      setPontos(pontos + 1);
      setFeedback('correta');
    } else {
      setFeedback('errada');
    }

    setTimeout(() => {
      setFeedback(null);
      setSelecionado(null);

      if (indice < questoes.length - 1) {
        setIndice(indice + 1);
      } else {
        Alert.alert('Quiz concluído!', `Você acertou ${acertou ? pontos + 1 : pontos} de ${questoes.length}`, [
          {
            text: 'Ver Resultado',
            onPress: () =>
              navigation.navigate('Resultado', {
                acertos: acertou ? pontos + 1 : pontos,
                total: questoes.length
              })
          }
        ]);
      }
    }, 1000);
  };

  const perguntaAtual = questoes[indice];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.score}>
        Questão {indice + 1} de {questoes.length} | {pontos} Pontos
      </Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{perguntaAtual?.pergunta}</Text>
      </View>

      {perguntaAtual?.opcoes.map((opcao, i) => {
        let estiloOpcao = styles.optionButton;

        if (feedback && selecionado === opcao) {
          estiloOpcao =
            opcao === perguntaAtual.respostaCorreta
              ? styles.optionButtonCorreta
              : styles.optionButtonErrada;
        }

        return (
          <TouchableOpacity
            key={i}
            style={[estiloOpcao, selecionado === opcao && styles.selectedOption]}
            disabled={!!feedback}
            onPress={() => setSelecionado(opcao)}
          >
            <View style={styles.optionCircle}>
              <Text style={styles.optionLetter}>{String.fromCharCode(65 + i)}</Text>
            </View>
            <Text style={styles.optionText}>{opcao}</Text>
          </TouchableOpacity>
        );
      })}

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={mostrarResultado}
        disabled={!selecionado || !!feedback}
      >
        <LinearGradient
          colors={['#FF8000', '#FFD700']}
          style={[styles.verifyGradient, (!selecionado || !!feedback) && { opacity: 0.5 }]}
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
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
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
    zIndex: 1
  },
  score: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
  questionContainer: {
    backgroundColor: '#F6FAFB',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    minHeight: 140,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  questionText: {
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
  optionButtonCorreta: {
    backgroundColor: '#A5D6A7',
    borderColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderRadius: 20,
    marginVertical: 5,
    width: '100%',
  },
  optionButtonErrada: {
    backgroundColor: '#EF9A9A',
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    borderRadius: 20,
    marginVertical: 5,
    width: '100%',
  },
  selectedOption: {
    opacity: 0.8,
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
  verifyButton: {
    marginTop: 20,
    width: '100%',
  },
  verifyGradient: {
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  verifyText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
  },
});
