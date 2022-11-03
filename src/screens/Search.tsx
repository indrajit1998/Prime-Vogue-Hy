import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { Appbar, TextInput } from 'react-native-paper';
import theme from '../config/theme';
import { Ionicons } from '@expo/vector-icons';



const Header = ({ navigation, handleSearch }: any) => (
    <Appbar.Header style={styles.header}>
        <Pressable style={styles.back} onPress={() => { navigation.goBack() }}>
            <Ionicons name='arrow-back' size={22} color="black" />
        </Pressable>
        <TextInput
            // left={<TextInput.Icon icon="magnify" />}
            placeholder='Search for products'
            style={styles.input}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
        />
    </Appbar.Header>
);

export default function Search({ navigation }: any) {
    const handleSearch = () => {
        navigation.navigate("ProductList")
    }
    return (
        <>
            <Header navigation={navigation} handleSearch={handleSearch} />
            <Container>

            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        elevation: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 10,
        borderBottomColor: "gainsboro",
        borderBottomWidth: 1,
        overflow: "hidden"
    },
    input: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    back: {
        height: "100%",
        width: 30,
        alignItems: "center",
        justifyContent: "center"
    }
})