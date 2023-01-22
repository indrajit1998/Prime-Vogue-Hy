import { ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { Ionicons } from '@expo/vector-icons'
import { Rating } from 'react-native-stock-star-rating'
const image = "https://rukminim1.flixcart.com/image/832/832/l02r1jk0/shirt/l/t/u/s-fbrml-r-fibermill-original-imagbxyu5wbw27eg.jpeg?q=70"

const productProperties = [
    {
        id: 1,
        title: "Fabric",
        desc: "Cotton"
    },
    {
        id: 2,
        title: "Transparency",
        desc: "Opaque"
    },
    {
        id: 3,
        title: "Weave Pattern",
        desc: "Regular"
    },
    {
        id: 4,
        title: "Sustainable",
        desc: "Cotton"
    },
    {
        id: 5,
        title: "Fit",
        desc: "Slim fit"
    },

]


const Details = () => {
    return (
        <Container style={styles.container}>
            <ImageBackground
                source={{ uri: image }}
                style={styles.mainImageContainer}>
                {/* header */}
                <View style={styles.header}>
                    <Pressable style={styles.headerBtn}>
                        <Ionicons name='arrow-back' size={18} color="#000" />
                    </Pressable>
                    <View style={styles.header}>
                        <Pressable style={styles.headerBtn}>
                            <Ionicons name='share-outline' size={18} color="#000" />
                        </Pressable>
                        <Pressable style={styles.headerBtn}>
                            <Ionicons name='heart-outline' size={18} color="#000" />
                        </Pressable>
                        <Pressable style={styles.headerBtn}>
                            <Ionicons name='briefcase-outline' size={18} color="#000" />
                        </Pressable>
                    </View>
                </View>
                {/* footer */}
                <View style={styles.mainImageContainerFooter}>
                    <Pressable style={[styles.footerBtn, { alignSelf: "flex-end" }]}>
                        <Ionicons name='map-outline' size={16} color="#000" />
                        <Text style={styles.imageBtnText}>View similar</Text>
                    </Pressable>
                    <View>
                        <View style={[styles.footerBtn, { alignSelf: "flex-end" }]}>
                            <Text style={styles.imageBtnText}>4.1</Text>
                            <Rating stars={1} maxStars={1} color="green" size={16} />
                            <Text style={styles.imageBtnText}>13.9k</Text>
                        </View>
                        <View style={styles.footerBtn}>
                            <Text style={styles.imageBtnText}>Sales ends in</Text>
                            <Text style={[styles.imageBtnText, { color: "red" }]} > 00:16:20</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            {/* infp */}
            <View style={styles.infoContainer}>
                <View style={styles.fdRow}>
                    <Text style={[styles.normalText, styles.bold]}>Denis Lingo</Text>
                    <Text style={styles.normalText}> Men Pink Slim Pink Casual Shirt</Text>
                </View>
                <View style={[styles.fdRow, { marginVertical: 3 }]}>
                    <Text style={[styles.normalText, { textDecorationLine: "line-through" }]}>Rs 2,000</Text>
                    <Text style={[styles.normalText, styles.bold]}> Rs 628</Text>
                    <Text style={[styles.normalText, { color: "red" }]}> (66% OFF)</Text>
                </View>
                <Text style={styles.normalText}>inclusive of all taxes</Text>
                <View style={[styles.fdRow, { marginVertical: 3 }]}>
                    <Text style={[styles.normalText, { color: "red" }, styles.bold]}>Hurry! </Text>
                    <Text style={[styles.normalText]}>likely to be sold out </Text>
                    <Text style={[styles.normalText, styles.bold]}> in 1 days</Text>
                </View>
                <Text style={[styles.bold, { marginVertical: 5 }]}>Available Colors</Text>
                {/* horizontal scrollview */}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginHorizontal: -15 }}
                >
                    {
                        [1, 2, 3, 4, 5, 6].map((o, i) => (
                            <View style={styles.diffColorContainer}
                                key={i}
                            >
                                <Image
                                    source={{ uri: image }}
                                    style={styles.colorImage}
                                    resizeMode="cover"
                                />
                                <Text style={styles.normalText}>Red</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                {/* scrollView end */}
                {/* bank offer */}
                <>
                    <View style={styles.spaceBetweenHorizontal}>
                        <Text style={styles.bold}>Bank Offer</Text>
                        <TouchableOpacity style={styles.fdRow}>
                            <Text style={[styles.bold, { marginHorizontal: 5 }]}>+more </Text>
                            <Ionicons name='chevron-forward' size={10} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.normalText}>
                        10% instant Discount on HDFC Bank Credit Card TCA Min Spend Rs 4,000. Max Discount Rs 1,000
                    </Text>
                </>
                {/* emi options */}
                <>
                    <View style={styles.spaceBetweenHorizontal}>
                        <Text style={styles.bold}>EMI option available</Text>
                        <TouchableOpacity>
                            <Text style={[styles.bold, { color: "red" }]}>View Plan </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.normalText}>
                        EMI starting Rs 30/month
                    </Text>
                </>
                {/* select size */}
                <>
                    <View style={styles.spaceBetweenHorizontal}>
                        <Text style={styles.bold}>Select Size</Text>
                        <TouchableOpacity>
                            <Text style={[styles.bold, { color: "red" }]}>View Chart </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.fdRow, { flexWrap: "wrap", marginBottom: 15 }]}>
                        {
                            [34, 56, 78, 98, 56].map((o, i) => (
                                <TouchableOpacity key={i} style={styles.circle}>
                                    <Text style={styles.bold}>{o}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </>
                {/* devliery for */}
                <>
                    <Text style={styles.bold}>Delivery & Service for</Text>
                    <View style={{ padding: 5 }}>
                        <View style={[styles.spaceBetweenHorizontal, { marginTop: 5, borderColor: "#eee", borderWidth: 1, padding: 10, borderRadius: 5 }]}>
                            <Text style={styles.bold}>743368 (Indrajit Sikdar)</Text>
                            <TouchableOpacity>
                                <Text style={[styles.bold, { color: "red" }]}>Change </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.fdRow, { padding: 10 }]}>
                            <Ionicons name='bus-outline' size={18} color="#000" />
                            <Text style={[styles.bold, { marginHorizontal: 10 }]}>743368 (Indrajit Sikdar)</Text>
                        </View>

                        <View style={[styles.fdRow, { padding: 10 }]}>
                            <Ionicons name='wallet-outline' size={18} color="#000" />
                            <Text style={[styles.bold, { marginHorizontal: 10 }]}>Pay on delivery available</Text>
                        </View>

                        <View style={[styles.fdRow, { padding: 10 }]}>
                            <Ionicons name='swap-horizontal-outline' size={18} color="#000" />
                            <Text style={[styles.bold, { marginHorizontal: 10 }]}>Easy 30 days return & exchange available</Text>
                        </View>

                    </View>
                    {/* product property */}
                    <View style={[styles.fdRow, { flexWrap: 'wrap', marginVertical: 15 }]}>
                        {
                            productProperties.map((item) => (
                                <View key={item.id} style={{ width: "50%", paddingVertical: 10 }}>
                                    <Text style={styles.bold}>{item.title}</Text>
                                    <Text style={styles.normalText}>{item.desc}</Text>
                                </View>
                            ))
                        }
                    </View>
                </>
                {/* product details */}
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.bold}>Product Details</Text>
                    <Text style={styles.normalText}>
                        Pink Solid casual shirt,has a spread colloar ,long servies, carved ham, one patch packet
                    </Text>
                </View>

                {/* size & fit*/}
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.bold}>Size & Fit</Text>
                    <Text style={styles.normalText}>Slim Fit</Text>
                    <Text style={styles.normalText}>The Modal (Height 6) is wearing size of 40</Text>
                </View>
                {/* style notes*/}
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.bold}>Style Notes</Text>
                    <Text style={styles.normalText}>Expand your collectiuon of casual stapleswith this modish shirt
                        from denish lingo . you will love this pink piece with some trainers and chinos for the perfect outdoor
                        activity with your friend
                    </Text>
                </View>
            </View>
        </Container>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight
    },


    mainImageContainer: {
        height: 500,
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerBtn: {
        height: 30,
        aspectRatio: 1 / 1,
        backgroundColor: "#fff",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    },
    mainImageContainerFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8
    },
    footerBtn: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        padding: 5,
        borderRadius: 18,
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 6,
        margin: 5,
    },
    imageBtnText: {
        fontSize: 12
    },
    infoContainer: {
        padding: 15
    },
    fdRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    normalText: {
        opacity: 0.55,
        fontSize: 15,
        fontWeight: "500"
    },
    bold: {
        fontWeight: "bold",
        opacity: 1
    },
    diffColorContainer: {
        marginLeft: 10,
        alignItems: "center",
    },
    colorImage: {
        width: 55,
        height: 70
    },
    spaceBetweenHorizontal: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 10
    },
    circle: {
        width: 35,
        aspectRatio: 1 / 1,
        // backgroundColor: "red",
        marginRight: 10,
        marginVertical: 5,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#202020",
        borderWidth: 1
    }
})