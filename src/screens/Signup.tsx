import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Container from '../components/Container'

export default function Signup({ navigation }: any) {
    return (
        <Container style={styles.container}>
            <Text>Signup Screen</Text>
            <Button title='Go to Forgot Password' onPress={() => { navigation.navigate("ForgotPassword") }} />
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
})