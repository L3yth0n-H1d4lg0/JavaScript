import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [estatura, setEstatura] = useState();
  const [peso, setPeso] = useState();
  const [imc, setImc] = useState();
  const [cc, setCc] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <Text style={styles.description}>Para calcular su índice de masa corporal, ingrese su estatura y peso </Text>
      <View style={styles.containerIMC}>
        <View style={styles.containerIMCInfo}>
          <View>
            <Text style={styles.enunciados}>ESTATURA</Text>
            <Text>en centímetros:</Text>
            <TextInput
              style={styles.caja}
              value={estatura}
              keyboardType="numeric"
              onChangeText={setEstatura}
            />
          </View>
          <View>
            <Text style={styles.enunciados}>PESO</Text>
            <Text>en kilogramos:</Text>
            <TextInput
              style={styles.caja}
              value={peso}
              keyboardType="numeric"
              onChangeText={setPeso}
            />
          </View>
        </View>
        <View style={styles.Button}>
          <Button
            title="Calcular"
            color="green"
            onPress={() => {
              if (estatura < 130 || estatura > 200) {
                alert('Por favor, ingrese una estatura válida entre 130 y 200 cm.');
                return;
              }
              if (peso < 30 || peso > 150) {
                alert('Por favor, ingrese un peso válido entre 30 y 150 kg.');
                return;
              }
              let estaturaFloat = parseFloat(estatura) / 100;
              let pesoFloat = parseFloat(peso);
              let imc = (pesoFloat / (estaturaFloat * estaturaFloat)).toFixed(2);
              setImc(imc);

              if (imc < 18.5) {
                setCc("Su peso es inferior al normal");
              } else if (imc >= 18.5 && imc < 25.0) {
                setCc("Su peso es normal");
              } else if (imc >= 25.0 && imc < 30.0) {
                setCc("Su peso es superior al normal");
              } else if (imc > 30.0) {
                setCc("Tiene obesidad");
              }
            }} />
        </View>
        <View style={styles.detalles}>
          <View style={styles.containerResultados}>
            <Text style={styles.enunciados}>IMC</Text>
            <Text style={styles.resultados}>{imc}</Text>
          </View>
          <View style={styles.containerResultados}>
            <Text style={styles.enunciados}>COMPOSICIÓN CORPORAL</Text>
            <Text style={styles.resultados}>{cc}</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  titulo: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  description: {
    fontSize: 14.5,
    fontStyle: 'italic'
  },
  containerIMC: {
    width: 310,
    height: 285,
    marginVertical: 20,
    paddingHorizontal: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',

  },
  containerIMCInfo: {
    marginVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  enunciados: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  },
  caja: {
    borderWidth: 1,
    borderColor: 'black',
    width: 125,
    padding: 10,
    marginTop: 10
  },
  Button: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  detalles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 20
  },
  containerResultados: {
    alignItems: 'center'
  },
  resultados: {
    marginTop: 3,
    fontSize: 14.5,
    color: '#007BFF'
  }
});