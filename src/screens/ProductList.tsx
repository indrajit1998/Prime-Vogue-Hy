import { View, Text, StyleSheet, Pressable, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-stock-star-rating'

import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import theme from '../config/theme';

const Header = ({ navigation }: any) => (
    <Appbar.Header style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Pressable style={styles.back} onPress={() => { navigation.goBack() }}>
                <Ionicons name='arrow-back' size={22} color="black" />
            </Pressable>
            <Text>prduct name</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginHorizontal: 7 }} name="search" size={22} color={theme.colors.textColor} />
            <Ionicons name="cart-outline" size={22} color={theme.colors.textColor} />
        </View>
    </Appbar.Header>
);

export default function ProductList({ navigation }: any) {
    const renderItem = ({ item }: any) => (
        <View style={styles.product}>
            <Ionicons name='heart-outline' size={24} color="black" style={styles.heartIcon} />

            <Image
                source={{ uri: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png" }}
                resizeMode='cover'
                style={styles.img}
            />
            <View>
                <Text style={styles.productName}>POCO C31 (Royal Blue,64 GB)</Text>
                <Text style={styles.productHashTag}>#justHere</Text>
                <Rating stars={3.5} maxStars={5} size={23} />

                <View style={styles.priceContainer}>
                    <Text style={styles.actualPrice}>11,000</Text>
                    <Text style={styles.discountedPrice}> Rs 7,000</Text>
                    <Text style={styles.off}> 37% off</Text>
                </View>
                <Text style={styles.deliveryCost}>Free Delivery</Text>
                <Text style={styles.tagline}>Top discount of the sale</Text>
                <Text style={styles.exchangeOffer}>Upto <Text style={{ fontWeight: "600" }}>Rs 6,000</Text> on exchange</Text>
            </View>
        </View>
    )
    return (
        <>
            <Header navigation={navigation} />
            <ScrollView
                horizontal
                style={{ backgroundColor: theme.colors.background, height: 60, paddingBottom: 15, paddingHorizontal: 15, borderBottomColor: "gainsboro", borderBottomWidth: 1 }}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.option}>
                    <Text style={styles.optionName}>Sort By</Text>
                    <Ionicons name='chevron-down' size={15} color={theme.colors.textColor} />
                </View>

                <View style={styles.option}>
                    <Ionicons name='filter' size={15} color={theme.colors.textColor} />
                    <Text style={styles.optionName}>Filter</Text>
                </View>

                <View style={styles.option}>
                    <Ionicons name='pause' size={15} color={theme.colors.textColor} />
                    <Text style={styles.optionName}>Compare</Text>
                </View>

                <View style={styles.option}>
                    <Text style={styles.optionName}>Price</Text>
                    <Ionicons name='chevron-down' size={15} color={theme.colors.textColor} />
                </View>

                {/* <View style={styles.option}>
                    <Text style={styles.optionName}>Sort By</Text>
                    <Ionicons name='chevron-down' size={15} color={theme.colors.textColor} />
                </View> */}
            </ScrollView>
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
    product: {
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20
    },
    heartIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 1
    },
    img: {
        width: 100,
        height: 90
    },
    productName: {
        fontWeight: "500",
        color: theme.colors.textColor,
        opacity: 0.6
    },
    productHashTag: {
        fontSize: 12,
        color: theme.colors.textColor,
        opacity: 0.5,
        // marginBottom: 8
    },
    priceContainer: {
        flexDirection: "row"
    },
    actualPrice: {
        color: theme.colors.textColor,
        opacity: 0.6,
        textDecorationLine: "line-through"
    },
    discountedPrice: {
        color: theme.colors.textColor,
        fontWeight: "600",
        marginHorizontal: 5
    },
    off: {
        color: "green",
        fontWeight: "500"
    },
    deliveryCost: {
        fontSize: 12,
        lineHeight: 22,
        fontWeight: "500",
        opacity: 0.7
    },
    tagline: {
        fontSize: 13,
        color: "green"
    },
    exchangeOffer: {
        fontSize: 13
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.background,
        padding: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderColor: "gainsboro",
        borderWidth: 1,
        marginHorizontal: 5
    },
    optionName: {
        fontSize: 13,
        marginHorizontal: 5
    }
})