import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  const finalizar = () => {
    Alert.alert("MENSAJE", "SU SESION HA FINALIZADO")
  }
  return (
    <View style={styles.container}>
      <Text>Ejecutando botones</Text>
      <StatusBar style="auto" />
      <Button
        title="FINALIZAR"
        onPress={
          finalizar
        }
      />
      <Button
        title="Iniciar"
        onPress={() => {
          Alert.alert("MENSAJE", "SU SESION HA INICIADO");
        }}
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
