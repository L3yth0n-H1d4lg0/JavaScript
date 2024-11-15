import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '0242342342' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '172312313' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '076123233' }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Text>PERSONAS</Text>
      <FlatList
        style={styles.lista}
        data={personas}//arreglo de objetos
        renderItem={(elemento) => {//barre el arreglo y retorna los objetos
          return (
            <View style={styles.itemPersona}>
              <Text style={styles.textoPrincial}>
                {elemento.index} {elemento.item.nombre} {elemento.item.apellido}
              </Text>
              <Text style={styles.textoSecundario}>
                {elemento.item.cedula}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => {//función que retorna la clave única del elemento en base a una propiedad
          return item.cedula;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista: {
    //backgroundColor: 'lightpink'
  },
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10
  },
  textoPrincial: {
    fontSize: 20
  },
  textoSecundario: {
    fontStyle: 'italic'
  }
});
