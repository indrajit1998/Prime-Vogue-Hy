import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { cateogoryData, cateogoryStoresData } from '../config/data'
import { CONTAINER_OUTER_SPACING } from '../config/constants'
import theme from '../config/theme'
const { width } = Dimensions.get("window")
export default function Cateogories() {

    return (
        <Container style={styles.conatiner}>
            <View style={styles.cateogory}>
                {
                    cateogoryData.map((o) => (
                        <View key={o.id} style={styles.cateogoryContainer}>
                            <View style={styles.imgContainer}>
                                <Image
                                    source={{ uri: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png" }}
                                    resizeMode='contain'
                                    style={styles.img}
                                />
                            </View>
                            <Text style={styles.title}>{o.title}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={styles.storesContainer}>
                <Text style={styles.storesContainerTitle}>Trending Stores</Text>
                <View style={styles.cateogory}>
                    {
                        cateogoryStoresData.map((o) => (
                            <View key={o.id} style={[styles.store, { backgroundColor: o.color }]}>
                                <Text style={styles.storeTitle}>{o.title}</Text>
                                <Text numberOfLines={1} style={[styles.storeDesc, { color: o.circleColor }]}>{o.desc}</Text>
                                <View style={[styles.circle, { backgroundColor: o.circleColor }]}>
                                    <Image
                                        source={{ uri: "https://www.pngmart.com/files/15/Apple-iPhone-12-Transparent-Background.png" }}
                                        resizeMode='contain'
                                        style={styles.storeImg}
                                    />
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        padding: 10
    },
    img: {
        width: 55,
        height: 55,
    },
    cateogoryContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "22%",
        // backgroundColor: "red",
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
    storesContainer: {
        marginTop: 10
    },
    storesContainerTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 15
    },
    store: {
        width: width / 2 - 20,
        height: width / 2 - 10,
        margin: 5,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        overflow: "hidden"
    },
    circle: {
        width: "90%",
        aspectRatio: 1 / 1,
        position: "absolute",
        bottom: "-20%",
        right: "-20%",
        borderRadius: 1000,
    },
    storeTitle: {
        fontSize: 18,
        fontWeight: "500"
    },
    storeDesc: {
        fontSize: 13,
    },
    storeImg: {
        width: "90%",
        height: "90%"
    }
})