import React, { Component,useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper' 

import {store} from './Store'

export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      texto : "teste"
    }
  }

  invokeText(index){
    if(index==0){
      store.dispatch({type: 'PAGE_0'})
    }
    else if(index==1){
      store.dispatch({type: 'PAGE_1'})
    }
    else{
      store.dispatch({type: 'PAGE_2'})
    }
  }

  componentDidMount(){
    store.dispatch({type: 'PAGE_0'})
  }
  
  render() {

    store.subscribe(() => this.setState({texto: store.getState()}))

    return (
      <Swiper style={styles.wrapper} 
              showsButtons={true} 
              loop={false}
              onIndexChanged={(index) => (this.invokeText(index))}>
        <View style={styles.slide}>
          <Text style={styles.text}>{this.state.texto}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>{this.state.texto}</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>{this.state.texto}</Text>
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
