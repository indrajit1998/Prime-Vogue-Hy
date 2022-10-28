import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Container from '../components/Container'

export default function Login({ navigation }: any) {
    return (
        <Container style={styles.container}>
            <Text>Login Screen</Text>
            <Button title='Go to Signup' onPress={() => { navigation.navigate("Signup") }} />
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
})