import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper' 

export default class App extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        <View style={styles.slide}>
          <Text style={styles.text}>Do mesmo modo, o aumento do diálogo entre os diferentes setores produtivos assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Pensando mais a longo prazo, a adoção de políticas descentralizadoras faz parte de um processo de gerenciamento da gestão inovadora da qual fazemos parte.</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Pensando mais a longo prazo, a percepção das dificuldades promove a alavancagem das formas de ação.</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
