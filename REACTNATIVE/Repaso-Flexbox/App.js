import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contenedor2}>
        <Button title="X" color="gray" />
        <Button title="Y" color="gray" />
        <Button title="Z" color="gray" />
      </View>
      <View style={styles.contenedor3}>
        <View style={styles.contenedor6}>
          <View style={styles.contenedor8}>
            <Button title="BOTON 1" color="gray" />
            <Button title="BOTON 2" color="gray" />
          </View>
          <View style={styles.contenedor9}>
            <Button title="OPERACION 1" color="gray" />
            <Button title="OPERACION 2" color="gray" />
            <Button title="OPERACION 3" color="gray" />
          </View>
        </View>
        <View style={styles.contenedor7}>
          <Button title="ACCION 1" color="gray" />
          <Button title="ACCION 2" color="gray" />
        </View>
      </View>
      <View style={styles.contenedor4}>
        <View style={styles.contenedorButton}>
          <Button title="BOTON FINAL" color="gray" />
        </View>
        <View style={styles.contenedorVacio}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contenedor2: {
    flex: 1,
    backgroundColor: 'skyblue',
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"

  },
  contenedor3: {
    flex: 6,
    backgroundColor: 'green'
  },
  contenedor4: {
    flex: 1,
    backgroundColor: "orange",
    flexDirection: "row"
  },
  contenedorButton: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contenedorVacio: {
    flex: 1,
    justifyContent: "center",
  },
  contenedor6: {
    flex: 4,
    backgroundColor: 'pink',
    flexDirection: "row"
  },
  contenedor7: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  contenedor8: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "space-around"
  },
  contenedor9: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start"
  },
});
