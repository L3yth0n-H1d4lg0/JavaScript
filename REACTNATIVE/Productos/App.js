import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View } from 'react-native';

let productos = [
  { nombre: 'Doritos', categoria: 'Snacks', precioCompra: 0.4, precioVenta: 0.45, id: 100 },
  { nombre: 'Manicho', categoria: 'Golosinas', precioCompra: 0.2, precioVenta: 0.25, id: 101 }
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>PRODUCTOS</Text>
      </View>
      <FlatList
        style={styles.lista}
        data={productos}
        renderItem={(elemento) => {
          return (
            <View style={styles.itemProducto}>
              <Text style={styles.textoPrincipal}>
                {elemento.item.nombre} ({elemento.item.categoria})
              </Text>
              <Text style={styles.textoSecundario}>
                USD {elemento.item.precioVenta}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-stretch',
    paddingTop: 50
  },
  containerTitle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  itemProducto: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: '#F0FFFF',
    padding: 10,
    marginVertical: 7,
    marginHorizontal: 10
  },
  textoPrincipal: {
    fontSize: 17.5
  },
  textoSecundario: {
    fontSize: 17.5,
    fontWeight: 'bold'
  }
});
