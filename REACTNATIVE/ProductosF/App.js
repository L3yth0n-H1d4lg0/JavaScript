import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'; // Falta el contenedor de navegación
import { ContenidoA } from './app/screens/ContenidoA';
import { ContenidoB } from './app/screens/ContenidoB';
import { Icon } from '@rneui/base';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Definir TabNav para navegación de pestañas
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabContenidoA"
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: () => {
            return <Icon name="tool" size={24} color="black" type="ant-design" />;
          },
        }}
      />
      <Tab.Screen
        name="TabContenidoB"
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: () => {
            return <Icon name="mail" size={24} color="black" type="ant-design" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    // Agregar el contenedor de navegación
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="DrawerEjemploTabs"
          component={TabNav}
          options={{
            title: 'Ejemplo Tabs',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
