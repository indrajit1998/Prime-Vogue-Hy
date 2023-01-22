import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { cateogoryData, cateogoryStoresData } from '../config/data'
import { CONTAINER_OUTER_SPACING } from '../config/constants'
import theme from '../config/theme'
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get("window")

const Header = () => (
    <Appbar.Header style={styles.header}>
        <Text style={styles.headerTitle}>All Cateogories</Text>
        <View style={{ flexDirection: "row" }}>
            <Ionicons style={{ marginHorizontal: 10 }} name="search" size={22} color={theme.colors.textColor} />
            <Ionicons name="mic" size={22} color={theme.colors.textColor} />
        </View>
    </Appbar.Header>
);

export default function Cateogories({ navigation }: any) {

    return (
        <>
            <Header />
            <Container style={styles.conatiner}>
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
        </>
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
    },
    header: {
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        paddingHorizontal: 24,
        elevation: 0,
        justifyContent: "space-between",
        flexDirection: "row",
        borderColor: "#eee",
        borderBottomWidth: 1
    },
    headerTitle: {
        fontWeight: "500",
        fontSize: 18
    }
})