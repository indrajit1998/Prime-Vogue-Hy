import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-stock-star-rating'
import { Ionicons } from '@expo/vector-icons'
export default function ProductCard({ width, height }: any) {
    return (
        <View style={[styles.container, { height, width }]}>
            <View>
                <Ionicons name='heart-outline' size={24} color="black" style={styles.heartIcon} />
                <Image source={{ uri: "https://i.pinimg.com/736x/51/2b/4b/512b4b870390fac58da5206e88d228d6.jpg" }}
                    resizeMode="cover"
                    style={styles.img}
                />
                <Text style={styles.name}>Nike Shoe</Text>
                <Text style={styles.tagline}>Deals you cannot miss</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.name}>Rs 520 </Text>
                    <Text style={styles.offAmount}>823</Text>
                    <Text style={styles.offAmount}>15%OFF </Text>
                </View>
                <Rating stars={3.5} maxStars={5} size={23} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 5,
        padding: 8,
        margin: 3,
        alignItems: "center",
        elevation: 5
    },
    img: {
        height: 90
    },
    name: {
        fontWeight: "800",
        fontSize: 18,
        opacity: 0.8
    },
    tagline: {
        fontSize: 12,
        opacity: 0.8
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: -5
    },
    offAmount: {
        opacity: 0.7
    },
    heartIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1
    }
})