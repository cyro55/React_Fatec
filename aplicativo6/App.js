import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const pic = 'https://st.depositphotos.com/1636803/2416/i/600/depositphotos_24169125-stock-photo-red-question-mark.jpg';

  const [numero, setNumero] = useState();

  function gerarNumero() {
    setNumero(Math.round(Math.random() * 10))
  }

  return (
    <View style={styles.container}>
      <Text>GUESSING GAME</Text>

      <Image
        source={{ uri: pic}}
        style={{ width: 200, height: 200, marginVertical: 24}}
      ></Image>

      <Text>
        PENSE EM UM NÚMERO DE 0 A 10 E VEJA SE CONSEGUIRÁ ACERTAR!
      </Text>

      <View style={styles.space}>
        <Text style={styles.result}>
          Resultado: {numero}
        </Text>
      </View>

      <Pressable onPress={gerarNumero}>
        <Text style={styles.button}>
          DESCOBRIR
        </Text>
      </Pressable>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    marginVertical: 12
  },
  result: {
    fontWeight: 'bold',
    color: 'gray',
  },
  button: {
    padding: 12,
    backgroundColor: 'red',
    borderRadius: 300,
    color: 'white'
  }
});