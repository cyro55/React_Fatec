import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {

  const obj = [
    {image: 'https://avio.com.br/wp-content/uploads/2021/05/anuncios-pagos-conheca-as-vantagens-e-saiba-a-quem-recorrer-facebook.png', title: 'Titulo 1'},
    {image: 'https://multlinks.com.br/wp-content/uploads/2013/07/modelos-de-anuncios-no-google.jpg', title: 'Titulo 2'},
    {image: 'http://mistralsg.com.br/uploads/media/imagens/8e2feb8d11ce0fa76939db0f020636dd.jpeg', title: 'Titulo 3'},
    {image: 'https://files.tecnoblog.net/wp-content/uploads/2016/10/special_offer-1060x610.jpg', title: 'Titulo 4'},
    {image: 'http://tagmarketing.com.br/blog/wp-content/uploads/2018/12/Big-Mac_1024_sq.jpg', title: 'Titulo 5'},
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos</Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.flex}>
          {
            obj.map((card, index) => (
              <View>
                <Image
                  source={{ uri: card.image}}
                  style={{ width: 200, height: 100}}
                ></Image>
                <Text>{card.title}</Text>
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
    marginTop: 64,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  flex: {
    flex: 1,
    alignItems: "center", 
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 16
  }
});