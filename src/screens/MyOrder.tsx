import { View, Text, StyleSheet, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { Appbar, TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import theme from '../config/theme';
import { Rating } from 'react-native-stock-star-rating'

const Header = ({ navigation }: any) => (
    <Appbar.Header style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Pressable style={styles.back} onPress={() => { navigation.goBack(null) }}>
                <Ionicons name='arrow-back' size={22} color="black" />
            </Pressable>
            <Text style={styles.headerText}>My order</Text>
        </View>
    </Appbar.Header>
);

export default function MyOrder({ navigation }: any) {
    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={styles.product}>
            <View style={styles.productContent}>
                <Image
                    source={{ uri: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png" }}
                    resizeMode='cover'
                    style={styles.img}
                />
                <View>
                    <Text style={styles.deliveryDate}>Delivered on Sep 09</Text>
                    <Text style={styles.productName}>POCO C31 (Royal Blue,64 GB)</Text>
                    <Rating stars={0} maxStars={5} bordered={true} size={25} />
                    <Text style={styles.ratingRequest}>Rate this product now</Text>
                </View>
            </View>
            <Ionicons name='chevron-forward' color="grey" size={20} />
        </TouchableOpacity>
    )
    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.searchContainer}>
                <TextInput
                    left={<TextInput.Icon icon="magnify" />}
                    placeholder='Search your order here'
                    style={styles.input}
                    returnKeyType="search"
                // onSubmitEditing={handleSearch}
                />
                <Pressable style={styles.filter}>
                    <Ionicons name='filter' size={18} color={theme.colors.textColor} />
                    <Text style={styles.filterText}>Filter</Text>
                </Pressable>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: theme.colors.background }}
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
            />
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
    },
    back: {
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 15,
    },
    headerText: {
        fontWeight: "500",
        fontSize: 17
    },
    product: {
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20,
        borderBottomColor: "gainsboro",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        paddingRight: 25
    },
    productContent: {
        flexDirection: "row"
    },
    img: {
        width: 100,
        height: 90
    },
    deliveryDate: {
        fontWeight: "600",
    },
    productName: {
        marginVertical: 5,
        opacity: 0.7
    },
    ratingRequest: {
        marginVertical: 5,
        opacity: 0.7
    },
    input: {
        backgroundColor: "white",
        flex: 1,
        borderBottomWidth: 0
    },
    searchContainer: {
        backgroundColor: theme.colors.background,
        paddingHorizontal: 10,
        borderBottomColor: "gainsboro",
        borderBottomWidth: 1,
        flexDirection: "row",
        overflow: "hidden",
        justifyContent: "space-between",
        alignItems: "center",
        height: 55
    },
    filter: {
        flexDirection: "row",

    },
    filterText: {
        marginHorizontal: 8,
        fontSize: 16
    }
})