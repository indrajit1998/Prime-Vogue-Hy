import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import Icon from '@expo/vector-icons/MaterialIcons'
import { CONTAINER_OUTER_SPACING } from '../config/constants'

export default function EmailSendConfirmation({ navigation }: any) {
    return (
        <Container style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Icon name="arrow-back" size={20} color="#000" />
            </TouchableOpacity>
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Email has been sent!</Text>
                    <Text style={styles.desc}>Please check your inbox and click in the recieved link to reset password</Text>
                </View>
                <View style={styles.mailContainer}>
                    <Icon name="mark-email-read" size={120} color="#FE9A9A" />
                </View>
                <View>
                    <TouchableHighlight style={styles.loginBtn} onPress={() => { navigation.navigate("Login") }} underlayColor="#FFD9D8">
                        <Text style={styles.loginBtnText}>Login</Text>
                    </TouchableHighlight>
                    <View style={styles.flexRowCenter}>
                        <Text style={styles.resendText}>Didn't recieve the link? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("ForgotPassword") }} style={{ paddingHorizontal: 10 }}>
                            <Text style={styles.resendBtnText}>Resend</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: CONTAINER_OUTER_SPACING
    },
    main: {
        flex: 1,
        justifyContent: "space-around"
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center"
    },
    desc: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 16,
        marginHorizontal: 30,
        lineHeight: 22,
        letterSpacing: 0.5,
        opacity: 0.4,
        fontWeight: "500"
    },
    mailContainer: {
        alignItems: "center"
    },
    flexRowCenter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    loginBtn: {
        backgroundColor: "#FE9A9A",
        padding: 15,
        marginVertical: 15,
        alignItems: "center",
        borderRadius: 10
    },
    resendText: {
        fontSize: 15,
        opacity: 0.7,
        letterSpacing: 0.3,
        fontWeight: "500"
    },
    resendBtnText: {
        color: "#FE9A9A",
        fontSize: 15
    },
    loginBtnText: {
        color: "white",
        fontWeight: "600"
    }
})