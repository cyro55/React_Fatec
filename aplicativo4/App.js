import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState();

  function calcular() {
    setTotal(alcool/gasolina);

    if(total >= 0.7) {
      setMsg('Gasolina está mais em conta!');
    } else {
      setMsg('Álcool está mais em conta');
    }
  }

  const imgCombustivel = 'https://bbmadvocacia.com.br/wp-content/uploads/2018/05/combust%C3%ADvel-1.jpg';


  return (
    <View style={styles.container}>
      <Text>Álcool ou Gasolina?</Text>

      <Image
          source={{ uri: imgCombustivel}}
          style={{ width: 200, height: 200, borderRadius: 300, marginVertical: 24}}
        ></Image>

      <View style={styles.container}>
        <TextInput 
          placeholder="Preço do Álcool"
          keyboardType='numeric'
          onChangeText={value => setAlcool(value)}
          value={alcool}
        ></TextInput>
      </View>
      
      <View style={styles.container}>
        <TextInput 
          placeholder="Preço da Gasolina"
          keyboardType='numeric'
          onChangeText={value => setGasolina(value)}
          value={gasolina}
        ></TextInput>
      </View>


      <Pressable  onPress={calcular}>
          <Text style={styles.button}>
            Verificar
          </Text>
      </Pressable>

      <Text styles={styles.result}>Resultado:</Text>
      
      <Text>
        {total !== 0 && msg}
      </Text>

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
  button: {
    marginVertical: 24,
    backgroundColor: 'green',
    padding: 12,
    textTransform: 'uppercase',
    color: 'white'
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});