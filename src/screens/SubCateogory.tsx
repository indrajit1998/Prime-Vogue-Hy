import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'


import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import theme from '../config/theme';
import Container from '../components/Container';
import { cateogoryData } from '../config/data';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import ProductCard from '../components/ProductCard'
// import Girl from '../../assets/girl.png'
const { width } = Dimensions.get("window")

const Header = ({ navigation }: any) => (
    <Appbar.Header style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Pressable style={styles.back} onPress={() => { navigation.goBack() }}>
                <Ionicons name='arrow-back' size={22} color="black" />
            </Pressable>
            <Text style={styles.headerText}>Myntra</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginHorizontal: 7 }} name="search" size={22} color={theme.colors.textColor} />
            <Ionicons style={{ marginHorizontal: 7 }} name="heart-outline" size={22} color={theme.colors.textColor} />
            <Ionicons name="cart-outline" size={22} color={theme.colors.textColor} />
        </View>
    </Appbar.Header>
);

export default function SubCateogory({ navigation }: any) {
    return (
        <>
            <Header navigation={navigation} />
            <Container>
                <View style={styles.cateogory}>
                    {
                        cateogoryData.map((o) => (
                            <View key={o.id} style={styles.cateogoryContainer}>
                                <TouchableOpacity onPress={() => { navigation.navigate("SubCateogory") }} style={styles.imgContainer}>
                                    <Image
                                        source={{ uri: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png" }}
                                        resizeMode='contain'
                                        style={styles.img}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.title}>{o.title}</Text>
                            </View>
                        ))
                    }
                </View>
                {/* start */}
                {/* <View style={styles.productContainer}>
                    <Image source={Girl} style={styles.girlImage} />
                    <View>
                        <Text style={styles.offerStartsAt}>Start 599</Text>
                        <Text style={[styles.viewall, { fontSize: 20 }]}>view all</Text>
                    </View>
                </View> */}
                <Image
                    style={{ width: "100%", height: 150 }}
                    source={{ uri: "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/3f256eb02be16383.jpg?q=50" }}
                    resizeMode="cover"
                />
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

                {/* carousel */}
                <View>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={3}
                        autoplayLoop
                        autoplayLoopKeepAnimation
                        showPagination
                        data={[1, 2, 3, 4, 5]}
                        paginationDefaultColor="white"
                        paginationStyleItem={{ height: 8, width: 8, margin: 6, marginLeft: 0 }}
                        paginationStyleItemActive={{ width: 40, height: 8 }}
                        renderItem={({ item }) => (
                            <View style={styles.carouselImageContainer}>
                                <Image
                                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv7bCfQJmoQ_Z-VT8iNX3WSr-Ixe6Ky3eprg&usqp=CAU" }}
                                    resizeMode="cover"
                                    style={styles.carouselImage}
                                />
                            </View>
                        )}
                    />
                </View>
                {/* end carousel */}

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
        fontSize: 17,
        fontWeight: "500"
    },
    cateogoryContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "17%",
        // backgroundColor: "red",
        paddingVertical: 5,
        margin: "1.25%"
    },
    imgContainer: {
        backgroundColor: theme.colors.btnUnderlaycolor,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    title: {
        fontSize: 12,
        marginTop: 3,
        fontWeight: "400"
    },
    cateogory: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    img: {
        width: 55,
        height: 55,
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
    carouselImageContainer: {
        width,
    },
    carouselImage: {
        width: "100%",
        height: 200
    },
})

