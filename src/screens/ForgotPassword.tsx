import { View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import Icon from '@expo/vector-icons/MaterialIcons'
import { CONTAINER_OUTER_SPACING } from '../config/constants'

export default function ForgotPassword({ navigation }: any) {
    return (
        <Container style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Icon name="arrow-back" size={20} color="#000" />
            </TouchableOpacity>
            <View style={styles.main}>
                <View>
                    <Text style={styles.title}>Forgot your password?</Text>
                    <Text style={styles.desc}>Enter your registered email below to recieve password reset instruction</Text>
                </View>
                <View style={styles.mailContainer}>
                    <Icon name="mark-email-unread" size={120} color="#FE9A9A" />
                </View>
                <View>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="grey"
                        style={styles.input}
                    />
                    <View style={styles.flexRowCenter}>
                        <Text style={styles.rememberPasswordText}>Remember passwowrd? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("Login") }} style={{ paddingHorizontal: 10 }}>
                            <Text style={styles.loginBtnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableHighlight underlayColor="#FFD9D8" onPress={() => { navigation.navigate("EmailSendConfirmation") }} style={styles.sendBtn}>
                        <Text style={styles.sendBtnText}>Send</Text>
                    </TouchableHighlight>
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

    input: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        marginVertical: 20
    },
    mailContainer: {
        alignItems: "center"
    },
    flexRowCenter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    sendBtn: {
        backgroundColor: "#FE9A9A",
        padding: 15,
        marginVertical: 15,
        alignItems: "center",
        borderRadius: 10
    },
    rememberPasswordText: {
        fontSize: 15,
        opacity: 0.7,
        letterSpacing: 0.3,
        fontWeight: "500"
    },
    loginBtnText: {
        color: "#FE9A9A",
        fontSize: 15
    },
    sendBtnText: {
        color: "white",
        fontWeight: "600"
    }
})