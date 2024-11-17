import { View, Text, StyleSheet, Button } from 'react-native';

export const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>HOME</Text>
            <View style={styles.containerButton}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="CONTACTOS"
                        onPress={() => {
                            navigation.navigate('ContactsNav');
                        }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="PRODUCTOS"
                        onPress={() => {
                            navigation.navigate('ProductsNav');
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    containerButton: {
        marginTop: 10,
        flexDirection: 'row'
    },
    buttonContainer: {
        marginHorizontal: 50
    },
});
