import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, Input } from '@rneui/base';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <Text>RNE</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder='Ingrese su nombre'
        label='Nombre'
      />
      <Button
        title=' Facebook'
        icon={{//Icon como propiedad de Button
          name: 'facebook',
          type: 'font-awesome',
          size: 22,
          color: 'white'
        }}
        color='darkblue'
        onPress={() => {
          Alert.alert('Info', 'Su nombre es ' + name);
        }}
      />
      <Button
        title=' Whatsapp'
        icon={<Icon //Tag icon dentro de un Button
          name='whatsapp'
          type='font-awesome'
          color='white'
        />}
        color='green'
      />
      <Icon //Icon independiente
        name='linux'
        type='font-awesome'
        color='black'
        size={40}
      />
      < StatusBar style="auto" />
    </View >
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
