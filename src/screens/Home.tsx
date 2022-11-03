import { View, Text, TextInput, StyleSheet, Image, Dimensions, FlatList, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { Ionicons } from '@expo/vector-icons'
import theme from '../config/theme'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Appbar } from 'react-native-paper';

import ProductCard from '../components/ProductCard'
import Girl from '../../assets/girl.png'

const { width } = Dimensions.get("window")

const carouselData: any = [
    {
        id: 1,
        image: "https://technicalahmad.com/wp-content/uploads/2020/09/Redmi-9A-pricing-1024x512.jpg?x22295"
    },
    {
        id: 2,
        image: "https://technicalahmad.com/wp-content/uploads/2020/09/Redmi-9A-pricing-1024x512.jpg?x22295"
    },
    {
        id: 3,
        image: "https://technicalahmad.com/wp-content/uploads/2020/09/Redmi-9A-pricing-1024x512.jpg?x22295"
    },
    {
        id: 4,
        image: "https://technicalahmad.com/wp-content/uploads/2020/09/Redmi-9A-pricing-1024x512.jpg?x22295"
    },
    {
        id: 5,
        image: "https://technicalahmad.com/wp-content/uploads/2020/09/Redmi-9A-pricing-1024x512.jpg?x22295"
    }
]
const typesData: any = [
    {
        id: 1,
        title: "Blazer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 2,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 3,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 4,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 5,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 6,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 7,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
    {
        id: 8,
        title: "Man",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcFKIg9H57oCN0aN7A9e7a09PG6JxYpzRaFkynniWNPRZCGYkLBQIDFiLcCKy-M-u1Jsg&usqp=CAU"
    },
]

const Header = () => (
    <Appbar.Header style={styles.header}>
        <View>
            <Text style={styles.headerTitle}>Delivery in 15 minutes</Text>
            <Text>Ranchi</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginHorizontal: 7 }} name="heart-outline" size={22} color={theme.colors.textColor} />
            <Ionicons name="notifications-outline" size={22} color={theme.colors.textColor} />
        </View>
    </Appbar.Header>
);

export default function Home({ navigation }: any) {
    return (
        <>
            <Header />

            <Container>
                <Pressable style={styles.searchContainer} onPress={() => { navigation.navigate("Search") }}>
                    <Ionicons style={styles.searchIcon} name='search' size={20} color="grey" />
                    <TextInput
                        placeholder='Search for products'
                        style={styles.input}
                        editable={false}
                    />
                </Pressable>
                {/* carousel */}
                <View>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        autoplayLoopKeepAnimation
                        showPagination
                        data={carouselData}
                        paginationDefaultColor="white"
                        paginationStyleItem={{ height: 8, width: 8, margin: 6, marginLeft: 0 }}
                        paginationStyleItemActive={{ width: 40, height: 8 }}
                        renderItem={({ item }) => (
                            <View style={styles.carouselImageContainer}>
                                <Image
                                    source={{ uri: item.image }}
                                    resizeMode="cover"
                                    style={styles.carouselImage}
                                />
                            </View>
                        )}
                    />
                </View>
                {/* end carousel */}

                <View>
                    <FlatList
                        data={typesData}
                        horizontal
                        renderItem={({ item }) => (
                            <View style={{ alignItems: "center", marginVertical: 5 }}>
                                <Image source={{ uri: item.image }}
                                    resizeMode="cover"
                                    style={styles.typesImage}
                                />
                                <Text>{item.title}</Text>
                            </View>
                        )}
                    />
                </View>

                {/* start */}
                <View style={styles.productContainer}>
                    <Image source={Girl} style={styles.girlImage} />
                    <View>
                        <Text style={styles.offerStartsAt}>Start 599</Text>
                        <Text style={[styles.viewall, { fontSize: 20 }]}>view all</Text>
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -40, flexDirection: "row", flexWrap: "wrap" }}>
                    {
                        [1, 2, 3, 4].map((o, i) => (
                            <View key={i}>
                                <ProductCard width={width / 2 - 18} height={200} />
                            </View>
                        ))
                    }
                </View>
                {/* end */}

                {/* products */}
                <View style={styles.productGroup}>
                    <View style={styles.productGroupTop}>
                        <View style={styles.productGroupHeader}>
                            <Text style={styles.productGroupTitle}>Sponcer Product</Text>
                            <Text style={styles.viewall}>view all</Text>
                        </View>
                        <Text style={styles.productGroupTagline}>Furniture for every corner in your home</Text>

                    </View>
                    <FlatList
                        horizontal
                        style={{ paddingLeft: 15 }}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 4, 4, 5, 6]}
                        renderItem={() => (<ProductCard width={150} height={200} />)}
                    />
                </View>

                {/* start */}
                <View style={styles.productContainer}>
                    <Image source={Girl} style={styles.girlImage} />
                    <View>
                        <Text style={styles.offerStartsAt}>Start 599</Text>
                        <Text style={[styles.viewall, { fontSize: 20 }]}>view all</Text>
                    </View>
                </View>
                <View style={{ padding: 10, marginTop: -40, flexDirection: "row", flexWrap: "wrap" }}>
                    {
                        [1, 2, 3, 4].map((o, i) => (
                            <View key={i}>
                                <ProductCard width={width / 2 - 18} height={200} />
                            </View>
                        ))
                    }
                </View>
                {/* end */}

                {/* products */}
                <View style={styles.productGroup}>
                    <View style={styles.productGroupTop}>
                        <View style={styles.productGroupHeader}>
                            <Text style={styles.productGroupTitle}>Sponcer Product</Text>
                            <Text style={styles.viewall}>view all</Text>
                        </View>
                        <Text style={styles.productGroupTagline}>Furniture for every corner in your home</Text>

                    </View>
                    <FlatList
                        horizontal
                        style={{ paddingLeft: 15 }}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 4, 4, 5, 6]}
                        renderItem={() => (<ProductCard width={150} height={200} />)}
                    />
                </View>
                {/* products */}
                <View style={styles.productGroup}>
                    <View style={styles.productGroupTop}>
                        <View style={styles.productGroupHeader}>
                            <Text style={styles.productGroupTitle}>Sponcer Product</Text>
                            <Text style={styles.viewall}>view all</Text>
                        </View>
                        <Text style={styles.productGroupTagline}>Furniture for every corner in your home</Text>

                    </View>
                    <FlatList
                        horizontal
                        style={{ paddingLeft: 15 }}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 4, 4, 5, 6]}
                        renderItem={() => (<ProductCard width={150} height={200} />)}
                    />
                </View>
            </Container>
        </>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderRadius: 5,
        borderColor: "gainsboro",
        borderWidth: 1
    },
    input: {
        flex: 1,
        padding: 5
    },
    searchIcon: {
        marginHorizontal: 5
    },
    carouselImageContainer: {
        width,
    },
    carouselImage: {
        width: "100%",
        height: 180
    },
    typesImage: {
        width: 55,
        height: 55,
        borderRadius: 50,
        margin: 8
    },
    productGroup: {
        backgroundColor: "#4C7B93",
        marginTop: 5,
        paddingBottom: 10
    },
    productGroupTop: {
        padding: 10,
    },
    productGroupHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    productGroupTitle: {
        color: "#fff",
        fontSize: 25
    },
    viewall: {
        color: "#fff",
        textDecorationLine: "underline",
        fontSize: 17
    },
    productGroupTagline: {
        color: "gainsboro"
    },
    productContainer: {
        flexDirection: 'row',
        backgroundColor: "#CD35A6",
        paddingHorizontal: 10,
        paddingTop: 5,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginTop: 10
    },
    girlImage: {
        height: 175,
        width: 120,
    },
    offerStartsAt: {
        fontSize: 35,
        color: "#eee",
        fontWeight: "500"
    },
    header: {
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        paddingHorizontal: 24,
        elevation: 0,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    headerTitle: {
        fontWeight: "700",
        fontSize: 18
    }
})