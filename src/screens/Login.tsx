import { View, Text, Button, StyleSheet, Image, TextInput, Dimensions, ScrollView, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import { CONTAINER_OUTER_SPACING } from '../config/constants'
import LoginScreenImage from '../../assets/LoginScreenImage.png'
import Icon from '@expo/vector-icons/MaterialIcons'
import theme from '../config/theme'
export default function Login({ navigation }: any) {

    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async () => {
        // setError('')
        // setSuccess('')

        // const isValidEmail = /\S+@\S+\.\S+/.test(email);
        // if (!isValidEmail) {
        //     setError("Invalid Email")
        // } else if (!password) {
        //     setError("Password Required")
        // } else {
        //     setSuccess("Done")
        // }
        navigation.navigate("Tabs")
    }
    return (
        <ScrollView>


            <Container style={styles.container}>
                <Image source={LoginScreenImage} resizeMode="cover" style={styles.Loginimmg} />
                <View style={styles.logincomp}>
                    <Text style={styles.logintext}>Login</Text>


                    {error && <Text style={styles.error}>{error}</Text>}
                    {success && <Text style={styles.success}>{success}</Text>}
                    <View style={styles.inputcomp}>

                        <Icon name="mail" color='gray' size={22} style={styles.attherate} />
                        <TextInput placeholder="Email Id" style={styles.input1} value={email} onChangeText={onChangeEmail}></TextInput>
                    </View>

                    <View style={styles.inputcomp}>
                        <Icon name="lock" color='gray' size={22} style={styles.attherate} />
                        <View>
                            <TextInput secureTextEntry={true} placeholder="Password" style={styles.input2} value={password} onChangeText={onChangePassword}></TextInput>
                            <Text style={styles.forgot} onPress={() => { navigation.navigate("ForgotPassword") }} >forgot?</Text>

                        </View>
                    </View>
                    <TouchableHighlight underlayColor={theme.colors.btnUnderlaycolor} onPress={handleSubmit} style={styles.loginbtn}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>
                    <Text style={styles.forRegister}>New to Prime Vogue?  <Text onPress={() => { navigation.navigate("Signup") }} style={styles.forRegisterlink}>Register</Text></Text>
                </View>

            </Container>
        </ScrollView>
    )
}

const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        width,
        alignItems: "center",
        justifyContent: "space-between",
        padding: CONTAINER_OUTER_SPACING,

    },

    error: {
        color: 'red'
    },
    success: {
        color: 'green'
    },

    // login page 

    Loginimmg: {
        width,
        height: 350,
        marginBottom: 0
    },
    logincomp: {
        width: '100%',
        marginBottom: 80

    },
    inputcomp: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 0,
        marginTop: 20
    },
    attherate: {
        width: 22,
        height: 22,
        opacity: 0.5
    },
    lock: {
        width: 27,
        height: 27,
        opacity: 0.5
    },
    input1: {
        height: 50,
        fontSize: 16,
        width: '100%',
        marginLeft: 10
    },
    input2: {
        height: 50,
        fontSize: 16,
        width: width - 80,
        marginVertical: 0,
        marginLeft: 10,
        paddingRight: 90,
    },
    logintext: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 0
    },
    loginbtn: {
        backgroundColor: theme.colors.btnColor,
        padding: 15,
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    forRegister: {
        marginTop: 60,
        alignSelf: 'center'
    },
    forRegisterlink: {
        color: 'blue'
    },
    // forgot
    forgot: {
        position: 'absolute',
        right: 0,
        top: 15,
        fontSize: 14,
        color: 'blue',
    },
    loginText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
    }
})