import { StyleSheet, Text, View, Pressable  } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [pessoas, setPessoas] = useState(0);

  function adicionar() {
    setPessoas(pessoas + 1);
  }

  function remover() {
    if(pessoas > 0) {
      setPessoas(pessoas - 1);
    }
    
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Contador de pessoas</Text>
      </View>

      <View style={styles.alinhado}>
        <Text style={styles.texto}>{pessoas}</Text>
      </View>

      <View style={styles.botaoContainer}>
        <Pressable  style={[styles.botao, styles.verde]} onPress={adicionar} >
          <Text style={styles.textoBotao}>
            +
          </Text>
        </Pressable>
        <Pressable  style={[styles.botao, styles.red]} onPress={remover} >
          <Text style={styles.textoBotao}>
            -
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  titulo: {
    fontSize: 24,
    textTransform: 'uppercase',
    marginBottom: 32,
  },
  botaoContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: 100,
    marginBottom: 8,
  },
  textoBotao: {
    color: 'white'
  }, 
  red: {
    backgroundColor: 'red'
  },
  verde: {
    backgroundColor: 'green'
  },
  alinhado: {
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold'
  }

});