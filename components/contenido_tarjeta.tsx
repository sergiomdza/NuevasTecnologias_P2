import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { UserContext } from '../App';

const ContTarjeta = () => {
  const usuario = useContext(UserContext);
  console.log('usuario:', usuario)
  return (
    <View style={styles.generalContainer}>
      <Image
        style={styles.empIMG}
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
        key={`employee_img`}
      />
      <Text style={styles.name}>{usuario.nombre}</Text>
      <Text style={styles.title}>{usuario.puesto}</Text>

      {
        Object.entries(usuario.data).map((data, ix) => (
          <View style={styles.row} key={`row_${ix}`}>
            <Text style={styles.header}>{`${data[0]}:`}</Text>
            <Text style={styles.infotext}>{data[1]}</Text>
          </View>
        ))
      }

      <Image
        style={styles.barras}
        source={{
          uri: "https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-10/futuro-codigo-de-barras.png",
        }}
        key={`barras`}
      />
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
});

export default ContTarjeta;