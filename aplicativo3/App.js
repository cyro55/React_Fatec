import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [primeiro, setPrimeiro] = useState();
  const [segundo, setSegundo] = useState();
  const [total, setTotal] = useState();

  function handleCalculate() {
    setTotal(primeiro * segundo);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de números</Text>

        <TextInput 
          styles={styles.input}
          placeholder="Digite o primeiro número"
          keyboardType="numeric"
          onChangeText={value => setPrimeiro(value)}
          value={primeiro}
        />

        <TextInput 
          styles={styles.input}
          placeholder="Digite o segundo número"
          keyboardType="numeric"
          onChangeText={value => setSegundo(value)}
          value={segundo}
        />

        <Pressable onPress={handleCalculate}>
          <Text>
            Calcular
          </Text>
        </Pressable>

        <Text>Resultado: {total}</Text>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 21,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
});