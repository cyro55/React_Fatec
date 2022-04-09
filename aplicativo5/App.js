import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [Peso, setPeso] = useState();
  const [Altura, setAltura] = useState();
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState('');

  function calcular() {
    setTotal(Peso/(Altura**2));

    if(total !== 0) {
      if(total < 18.5) {
        setMsg('Abaixo do peso')
      } 
      else if(total >= 18.5 && total <= 24.9) {
        setMsg('Peso normal')
      }
      else if(total >= 25 && total <= 29.9) {
        setMsg('Sobrepeso')
      }
      else if(total >= 30 && total <= 34.9) {
        setMsg('Obesidade Grau 1')
      }
      else if(total >= 35 && total <= 39.9) {
        setMsg('Obesidade Grau 2')
      }
      else if(total >= 40) {
        setMsg('Obesidade Grau 3 ou Mórbida')
      }
      else {
        setMsg('Verifique os dados inseridos e tente novamente')
      }
    }
  }


  const image = 'https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg';


  return (
    <View style={styles.container}>
      <Text>Cálculo do IMC</Text>

      <Image
          source={{ uri: image}}
          style={{ width: 300, height: 220, marginVertical: 24}}
        ></Image>
      
      <View style={styles.container}>
        <TextInput 
          placeholder="Peso (em kg)"
          keyboardType='numeric'
          onChangeText={value => setPeso(value)}
          value={Peso}
        ></TextInput>
      </View>

      <View style={styles.container}>
        <TextInput 
          placeholder="Altura (em m)"
          keyboardType='numeric'
          onChangeText={value => setAltura(value)}
          value={Altura}
        ></TextInput>
      </View>

      <Pressable  onPress={calcular}>
          <Text style={styles.button}>
            Verificar
          </Text>
      </Pressable>

      <Text styles={styles.result}>Resultado:</Text>
      <Text>
        {msg}
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