import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
    const despedirse = () => {
      Alert.alert("Mensaje", "Adiosito")
    }
  return (
    <View style={styles.container}>
      <Text>Hola mundo, soy Leython Hidalgo!</Text>
      <StatusBar style="auto" />
      <Button
        title="Hola"
        //funcion que no recibe parametros
        onPress={() => {
          Alert.alert("MENSAJE", "Hola desde el botón");
        }}
      />
      <Button
        title="Adios"
        //funcion que no recibe parametros
        onPress={
          despedirse
        }
        />
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
