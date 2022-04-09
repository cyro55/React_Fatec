import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  var trab = [
    {titulo: 'Dev', descricao: 'Descrição da vaga...', salario: 'USD 4.500', contato: '0000-0000'},
    {titulo: 'Dev', descricao: 'Descrição da vaga...', salario: 'USD 4.500', contato: '0000-0000'},
    {titulo: 'Dev', descricao: 'Descrição da vaga...', salario: 'USD 4.500', contato: '0000-0000'},
    {titulo: 'Dev', descricao: 'Descrição da vaga...', salario: 'USD 4.500', contato: '0000-0000'},
    {titulo: 'Dev', descricao: 'Descrição da vaga...', salario: 'USD 4.500', contato: '0000-0000'},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.flex}>
          {
            trab.map((card, index) => (
              <View style={styles.container}>
                <Text style={[styles.info, styles.titulo]}>{card.titulo}</Text>
                <Text style={styles.info}>Salário: {card.salario}</Text>
                <Text style={styles.info}>Descrição: {card.descricao}</Text>
                <Text style={styles.info}>Contato: {card.contato}</Text>
              </View>
            ))
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 64,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  flex: {
    flex: 1,
    marginTop: 24,
    paddingHorizontal: 16
  }
});