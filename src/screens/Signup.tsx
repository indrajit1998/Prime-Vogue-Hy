import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import { CONTAINER_OUTER_SPACING } from '../config/constants'
import SignUpScreenImage from '../../assets/SignUpScreenImage.png'
import Icon from '@expo/vector-icons/MaterialIcons'
import theme from '../config/theme'
export default function Signup({ navigation }: any) {
    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')
    const [fullname, onChangeFullname] = useState('')
    const [companyname, onChangeCompanyname] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!isValidEmail) {
            setError("Invalid Email")
        } else if (!password) {
            setError("Password Required")
        } else if (!fullname) {
            setError("FullName Required")
        } else if (!companyname) {
            setError("companyname Required")
        } else {
            setSuccess("Done")
        }
    }
    return (
        <Container style={styles.container}>

            <Image source={SignUpScreenImage} resizeMode="cover" style={styles.Loginimmg} />
            <View style={styles.logincomp}>
                <Text style={styles.logintext}>Sign Up</Text>
                {error && <Text style={styles.error}>{error}</Text>}
                {success && <Text style={styles.success}>{success}</Text>}
                <View style={styles.inputcomp}>
                    <Icon name="mail" color='gray' size={22} style={styles.attherate} />
                    <TextInput placeholder="Email Id" style={styles.input1} value={email} onChangeText={onChangeEmail}></TextInput>
                </View>

                <View style={styles.inputcomp}>
                    <Icon name="lock" color='gray' size={22} style={styles.attherate} />
                    <TextInput secureTextEntry={true} placeholder="Password" style={styles.input1} value={password} onChangeText={onChangePassword}></TextInput>
                </View>

                <View style={styles.inputcomp}>
                    <Icon name="person" color='gray' size={22} style={styles.attherate} />
                    <TextInput placeholder="Full Name" style={styles.input1} value={fullname} onChangeText={onChangeFullname}></TextInput>
                </View>

                <View style={styles.inputcomp}>
                    <Icon name="store" color='gray' size={22} style={styles.attherate} />
                    <TextInput placeholder="Company Name" style={styles.input1} value={companyname} onChangeText={onChangeCompanyname}></TextInput>
                </View>
                <TouchableHighlight underlayColor={theme.colors.btnUnderlaycolor} onPress={handleSubmit} style={styles.loginbtn}>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableHighlight>
                <Text style={styles.forRegister}>already have an account? <Text onPress={() => { navigation.navigate("Login") }} style={styles.forRegisterlink}>Login</Text></Text>
            </View>

        </Container>
    )
}

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width,
        alignItems: "center",
        justifyContent: "space-around",
        padding: CONTAINER_OUTER_SPACING,
    },
    error: {
        color: 'red'
    },
    success: {
        color: 'green'
    },
    Loginimmg: {
        width,
        height: 300,
        marginBottom: 0
    },
    logincomp: {
        width: '100%',
        // marginBottom: 80

    },
    inputcomp: {
        flex: 1,
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

    logintext: {
        fontSize: 30,
        fontWeight: 'bold',
        // marginBottom: 10
    },
    loginText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15
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
        marginTop: 15,
        alignSelf: 'center'
    },
    forRegisterlink: {
        color: 'blue'
    },
    // forgot
    forgot: {
        position: 'absolute',
        right: 25,
        top: 20,
        fontSize: 16,
        color: 'blue',
    }
})