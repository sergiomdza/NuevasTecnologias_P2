import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, View, Image } from 'react-native';
import ContTarjeta from './contenido_tarjeta';

interface parentProps {
  closeModal: Function
}

const Tarjeta = (props: parentProps) => {
  return (
    <View style={styles.generalContainer}>
      <ContTarjeta />

      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={(e) => props.closeModal()}>
        <Text>Hide Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  generalContainer: {
    // backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    textAlign: 'left',
    color: 'blue',
    width: '20%'
  },
  infotext: {
    width: '70%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 5,
    paddingLeft: 30,
  },
  empIMG: {
    width: 100,
    height: 120,
    margin: 5
  },
  barras: {
    width: 250,
    height: 80,
    marginTop: 30,
    marginBottom: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 20
  },
  title: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 30
  },
  buttonClose: {
    backgroundColor: '#e08f9e',
    margin: 15
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100
  },
});

export default Tarjeta;