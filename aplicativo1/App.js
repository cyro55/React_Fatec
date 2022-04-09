import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const profilePicUrl = 'https://img.freepik.com/vetores-gratis/avatar-de-personagem-de-empresario-isolado_24877-60111.jpg?w=2000';

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{ uri: profilePicUrl}}
          style={{ width: 300, height: 300, borderRadius: 300,}}
        ></Image>
      </View>

      <View>
        <Text style={styles.texto}>Nome: {"\n"}
          <Text style={styles.bold}>Cyro Fernandes</Text>
        </Text>

        <Text style={styles.texto}>Formação: {"\n"}
          <Text style={styles.bold}>Sistemas para Internet</Text>
        </Text>

        <Text style={styles.texto}>Experiência profissional: {"\n"}
          <Text style={styles.bold}>A procura de estágio</Text>
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 64,
    
  },
  texto: {
    marginTop: 16,
    paddingHorizontal: 8,
    fontSize: 18,
  },
  bold: {
    fontWeight: 'bold',
    lineHeight: 24,
  }
});