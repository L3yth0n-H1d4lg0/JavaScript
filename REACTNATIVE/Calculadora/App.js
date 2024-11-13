import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState();
  const [operacion, setOperacion] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALCULADORA</Text>
      <Text>Ingrese el primer valor:</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valor1}
        keyboardType="numeric"
        onChangeText={(txt) => {
          setValor1(txt)
        }}
      />
      <Text>Ingrese el segundo valor:</Text>
      <TextInput
        style={styles.cajaTexto}
        value={valor2}
        keyboardType="numeric"
        onChangeText={(txt) => {
          setValor2(txt)
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Sumar"
          onPress={() => {
            let suma = parseFloat(valor1) + parseFloat(valor2);
            setResultado(suma);
            setOperacion("Suma");
          }}
        />
        <Button
          title="Restar"
          onPress={() => {
            let resta = parseFloat(valor1) - parseFloat(valor2);
            setResultado(resta);
            setOperacion("Resta");
          }}
        />
        <Button
          title="Multiplicar"
          onPress={() => {
            let multiplicacion = parseFloat(valor1) * parseFloat(valor2);
            setResultado(multiplicacion);
            setOperacion("Multiplicación");
          }}
        />
        <Button
          title="Dividir"
          onPress={() => {
            if (parseFloat(valor2) !== 0) {
              let division = parseFloat(valor1) / parseFloat(valor2);
              setResultado(division);
              setOperacion("División");
            } else {
              setResultado("No se puede dividir por 0");
              setOperacion("División");
            }
          }}
        />
      </View>
      <Text style={styles.resultado}>
        Resultado {operacion}: {resultado}
      </Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cajaTexto: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '50%',
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
