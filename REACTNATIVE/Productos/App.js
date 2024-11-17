import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, FlatList, View } from 'react-native';
import { useState } from 'react';

let productos = [
  { codigo: 100, nombre: 'Doritos', categoria: 'Snacks', precioCompra: 0.4, precioVenta: 0.45 },
  { codigo: 101, nombre: 'Manicho', categoria: 'Golosinas', precioCompra: 0.2, precioVenta: 0.24 },
  { codigo: 102, nombre: 'Coca Cola', categoria: 'Bebidas', precioCompra: 0.5, precioVenta: 0.6 },
  { codigo: 103, nombre: 'Pringles', categoria: 'Snacks', precioCompra: 1.2, precioVenta: 1.44 },
  { codigo: 104, nombre: 'Oreo', categoria: 'Galletas', precioCompra: 0.8, precioVenta: 0.96 },
  { codigo: 105, nombre: 'Red Bull', categoria: 'Bebidas', precioCompra: 1.5, precioVenta: 1.80 },
  { codigo: 106, nombre: 'Cheetos', categoria: 'Snacks', precioCompra: 0.7, precioVenta: 0.84 },
  { codigo: 107, nombre: 'Milky Way', categoria: 'Golosinas', precioCompra: 0.3, precioVenta: 0.36 },
  { codigo: 108, nombre: 'Pepsi', categoria: 'Bebidas', precioCompra: 0.5, precioVenta: 0.60 },
  { codigo: 109, nombre: 'Chocochips', categoria: 'Galletas', precioCompra: 0.9, precioVenta: 1.08 },
  { codigo: 110, nombre: 'Snickers', categoria: 'Golosinas', precioCompra: 0.35, precioVenta: 0.42 }
];

let esNuevo = true;
let indiceSeleccionado = -1;

export default function App() {
  const [txtCodigo, setTxtCodigo] = useState();
  const [txtNombre, setTxtNombre] = useState();
  const [txtCategoria, setTxtCategoria] = useState();
  const [txtPrecioCompra, setTxtPrecioCompra] = useState(0);
  const [txtPrecioVenta, setTxtPrecioVenta] = useState(0.0);

  const [numElementos, setNumelementos] = useState(productos.length);

  let ItemProducto = (props) => {
    return (
      <View style={styles.itemProducto}>
        <View style={styles.itemId}>
          <Text style={styles.textoPrincial}>
            {props.producto.codigo}
          </Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincial}>
            {props.producto.nombre}
          </Text>
          <Text style={styles.textoSecundario}>
            {props.producto.categoria}
          </Text>
        </View>
        <View style={styles.itemVenta}>
          <Text style={styles.textoTerceario}>
            {props.producto.precioVenta}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title=' E '
            onPress={() => {
              setTxtCodigo(String(props.producto.codigo));
              setTxtNombre(props.producto.nombre);
              setTxtCategoria(props.producto.categoria);
              setTxtPrecioCompra(String(props.producto.precioCompra));
              setTxtPrecioVenta(String(props.producto.precioVenta));
              esNuevo = false;
              indiceSeleccionado = props.indice;
            }}
          />
          <Button
            title=' X '
            onPress={() => {
              productos.splice(props.indice, 1);
              setNumelementos(productos.length);
            }}
          />
        </View>
      </View>
    );
  };

  let limpiar = () => {
    setTxtCodigo(null);
    setTxtNombre(null);
    setTxtCategoria(null);
    setTxtPrecioCompra(null);
    setTxtPrecioVenta(null);
    esNuevo = true;
    indiceSeleccionado = -1;
  };

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].codigo == txtCodigo) {
        return true;
      }
    }
    return false;
  };

  let guardarProducto = () => {
    if (txtCodigo != null && txtNombre != null && txtCategoria != null && txtPrecioCompra != null && txtPrecioVenta != null) {
      if (parseFloat(txtPrecioCompra) === 0 || txtPrecioCompra === "" || isNaN(txtPrecioCompra)) {
        Alert.alert("INFO", "El precio de compra no puede ser 0");
        return;
      }
      if (esNuevo) {
        if (existeProducto()) {
          Alert.alert("INFO", "Ya existe un producto con ese código " + txtCodigo);
        } else {
          let producto = {
            codigo: parseInt(txtCodigo),
            nombre: txtNombre,
            categoria: txtCategoria,
            precioCompra: parseFloat(txtPrecioCompra),
            precioVenta: parseFloat(txtPrecioVenta),
          };
          productos.push(producto);
        }
      } else {
        productos[indiceSeleccionado].nombre = txtNombre;
        productos[indiceSeleccionado].categoria = txtCategoria;
        productos[indiceSeleccionado].precioCompra = parseFloat(txtPrecioCompra);
        productos[indiceSeleccionado].precioVenta = parseFloat(txtPrecioVenta);
      }
    } else {
      Alert.alert("INFO", "Debe llenar todos los campos");
    }
    limpiar();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>PRODUCTOS</Text>
      </View>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textinput}
          value={txtCodigo}
          placeholder='CÓDIGO'
          onChangeText={setTxtCodigo}
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.textinput}
          value={txtNombre}
          placeholder='NOMBRE'
          onChangeText={setTxtNombre}
        />
        <TextInput
          style={styles.textinput}
          value={txtCategoria}
          placeholder='CATEGORIA'
          onChangeText={setTxtCategoria}
        />
        <TextInput
          style={styles.textinput}
          value={txtPrecioCompra}
          placeholder='PRECIO DE COMPRA'
          onChangeText={(value) => {
            if (value === "" || isNaN(value)) {
              setTxtPrecioCompra("");
              setTxtPrecioVenta("");
            } else {
              setTxtPrecioCompra(value);
              setTxtPrecioVenta((parseFloat(value) * 1.2).toFixed(2));
            }
          }}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.textinput}
          value={txtPrecioVenta}
          placeholder='PRECIO DE VENTA'
          editable={false}
        />
        <View style={styles.areaBotones}>
          <Button
            title='NUEVO'
            onPress={() => {
              limpiar();
            }}
          />
          <Button
            title='GUARDAR'
            onPress={() => {
              guardarProducto();
              setNumelementos(productos.length);
            }}
          />
          <Text>Productos: {numElementos}</Text>
        </View>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          data={productos}
          renderItem={(elemento) => {
            return <ItemProducto indice={elemento.index} producto={elemento.item} />; //Flatlist retornando el componente propio
          }}
          keyExtractor={(item) => {
            return item.codigo.toString();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-stretch',
    paddingTop: 40
  },
  containerTitle: {
    justifyContent: 'center',
    marginBottom: 7
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingHorizontal: 10
  },
  containerTextInput: {
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 8,
    marginBottom: 10
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  areaContenido: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 14
  },
  itemProducto: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    backgroundColor: '#F0FFFF',
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemId: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContenido: {
    flex: 8,
    paddingLeft: 5
  },
  textoPrincial: {
    fontSize: 18
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 15
  },
  textoTerceario: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemVenta: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  itemBotones: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
