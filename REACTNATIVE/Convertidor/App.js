import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [valorConvertir, setValorConvertir] = useState("");
  const [resultado, setResultado] = useState();
  const [moneda, setMoneda] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CONVERTIDOR</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.currencySymbol}>$</Text>
        <TextInput
          style={styles.cajaTexto}
          value={valorConvertir}
          keyboardType="numeric"
          onChangeText={(txt) => {
            setValorConvertir(txt)
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="PESOS MEXICANOS"
          onPress={() => {
            let mxn = parseFloat(valorConvertir) * 20.58;
            setResultado(mxn.toFixed(2));
            setMoneda("MXN");
          }}
        />
        <Button
          title="PESOS COLOMBIANOS"
          onPress={() => {
            let cop = parseFloat(valorConvertir) * 4487.63;
            setResultado(cop.toFixed(2));
            setMoneda("COP");
          }}
        />
        <Button
          title="EUROS"
          onPress={() => {
            let euros = parseFloat(valorConvertir) * 0.95;
            setResultado(euros.toFixed(2));
            setMoneda("EUR");
          }}
        />
      </View>
      <Text style={styles.resultado}>
        {resultado} {moneda}
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  cajaTexto: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '150',
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 180,
    marginVertical: 10,
    gap: 10
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  }
});
