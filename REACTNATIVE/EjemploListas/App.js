import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { useState } from 'react'

let personas = [
  { nombre: 'Thor', apellido: 'Thillas', cedula: '0242342342' },
  { nombre: 'Amber', apellido: 'Flores', cedula: '172312313' },
  { nombre: 'Peter', apellido: 'Parker', cedula: '076123233' }
];

let esNuevo = true; // esNuevo indica si se está creando una nuvera persona o se está modificando una existente
let indiceSeleccionado = -1; //almacena el índice del arreglo del elemento seleccionado para la edicion

export default function App() {
  const [txtCedula, setTxtCedula] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtApellido, setTxtApellido] = useState();
  const [numElementos, setNumelementos] = useState(personas.length);

  let ItemPersona = (props) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text>{props.indice}</Text>
        </View>

        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincial}>
            {props.persona.nombre} {props.persona.apellido}
          </Text>
          <Text style={styles.textoSecundario}>
            {props.persona.cedula}
          </Text>
        </View>

        <View style={styles.itemBotones}>
          <Button
            title=' E '
            color='green'
            onPress={() => {
              setTxtCedula(props.persona.cedula);
              setTxtNombre(props.persona.nombre);
              setTxtApellido(props.persona.apellido)
              esNuevo = false;
              indiceSeleccionado = props.indice;
            }}
          />
          <Button
            title=' X '
            color='red'
            onPress={() => {
              indiceSeleccionado = props.indice;
              personas.splice(indiceSeleccionado, 1);
              setNumelementos(personas.length);
            }}
          />
        </View>

      </View>
    );
  };

  let limpiar = () => {
    setTxtCedula(null);
    setTxtNombre(null);
    setTxtApellido(null);
    esNuevo = true;
  };

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula == txtCedula) {
        return true;
      }
    }
    return false;
  };

  let guardarPersona = () => {
    if (txtCedula != null && txtNombre != null && txtApellido != null) {
      if (esNuevo) {
        if (existePersona()) {
          Alert.alert("INFO", "Ya existe una persona con la cédula " + txtCedula);
        } else {
          let persona = { nombre: txtNombre, apellido: txtApellido, cedula: txtCedula };
          personas.push(persona);
        }
      } else {
        personas[indiceSeleccionado].nombre = txtNombre;
        personas[indiceSeleccionado].apellido = txtApellido;
      }
    } else {
      Alert.alert("INFO", "Debe llenar todos los campos");
    }
    limpiar();
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput
          style={styles.txt}
          value={txtCedula}
          placeholder='Ingrese su cédula'
          onChangeText={setTxtCedula}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          value={txtNombre}
          placeholder='Ingrese su nombre'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.txt}
          value={txtApellido}
          placeholder='Ingrese su apellido'
          onChangeText={setTxtApellido}
        />
        <View style={styles.areaBotones}>
          <Button
            title="Guardar"
            onPress={() => {
              guardarPersona();
              setNumelementos(personas.length);
            }}
          />
          <Button
            title="Nuevo"
            onPress={() => {
              limpiar();
            }}
          />
        </View>
        <Text>Elementos: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}//arreglo de objetos
          renderItem={(elemento) => {//barre el arreglo y retorna los objetos
            return <ItemPersona indice={elemento.index} persona={elemento.item} />
          }}
          keyExtractor={(item) => {//función que retorna la clave única del elemento en base a una propiedad
            return item.cedula;
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: Leython H.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'lightblue',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 50,
    paddingHorizontal: 10
  },
  lista: {
    //backgroundColor: 'lightpink'
  },
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',

  },
  textoPrincial: {
    fontSize: 20
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16
  },
  areaCabecera: {
    flex: 4,
    //backgroundColor: 'chartreuse',
    justifyContent: 'center'
  },
  areaContenido: {
    flex: 6,
    //backgroundColor: 'coral'
  },
  areaPie: {
    flex: 1,
    //backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemIndice: {
    //backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {
    //backgroundColor: 'darkorange',
    flex: 6,
    paddingLeft: 5
  },
  itemBotones: {
    //backgroundColor: 'darkorange',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 5
  }
});
