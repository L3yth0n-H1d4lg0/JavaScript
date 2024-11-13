import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  /*const arreglo = useState(0);
  const contadorEstado = arreglo[0];
  const setContadorEstado = arreglo[1];*/

  const [contadorEstado, setContadorEstado] = useState(0);
  const [vidas, setVidas] = useState(5);

  let contador = 0; //No se incrementa correctamente, y además no sirve para repintar en la interfaz el contador

  const incrementar = () => {
    setContadorEstado(contadorEstado + 1);
  }
  const decrementar = () => {
    setContadorEstado(contadorEstado - 1);
  }
  const perderVida = () => {
    if (vidas > 0) {
      setVidas(vidas - 1);
      if (vidas - 1 === 0) {
        Alert.alert('ADVERTENCIA', 'GAME OVER');
      }
    }
  };
  const premiar = () => {
    setVidas(vidas + 3);
  };

  return (
    <View style={styles.container}>
      <Text>Variables de estados</Text>
      <Text>CONTADOR: {contador}</Text>
      <Text>CONTADOR ESTADO: {contadorEstado}</Text>
      <Text>VIDAS: {vidas}</Text>
      <Button
        title="INCREMENTAR"
        onPress={incrementar}
      />
      <Button
        title="DECREMENTAR"
        onPress={decrementar}
      />
      <Button
        title="PERDER VIDA"
        onPress={perderVida}
      />
      <Button
        title="PREMIAR"
        onPress={premiar}
      />
      <StatusBar style="auto" />
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
});
