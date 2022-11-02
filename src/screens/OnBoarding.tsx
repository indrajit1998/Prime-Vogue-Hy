import { View, Text, FlatList, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import ImgA from '../../assets/a.png'
import ImgB from '../../assets/b.png'
import ImgC from '../../assets/c.png'
import theme from '../config/theme'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import { CONTAINER_OUTER_SPACING } from '../config/constants'
import Icon from '@expo/vector-icons/Ionicons'
const data = [
    {
        id: 1,
        image: ImgA,
        title: "Speak Up",
        description: "Find new opportunities to make your voice heard.\n Be loud and proud"
    },
    {
        id: 2,
        image: ImgB,
        title: "Stand Together",
        description: "We're stronger as a team join forces with like minded people"
    },
    {
        id: 3,
        image: ImgC,
        title: "Make a Difference",
        description: "Use our resources to make a meaningful impact in your community"
    }
]

const { width } = Dimensions.get("window")

export default function OnBoarding({ navigation }: any) {
    const renderItem = ({ item }: any) => (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <Image source={item.image} resizeMode="cover" style={styles.img} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableHighlight onPress={() => { navigation.navigate("Login") }} underlayColor="#FFD9D8" style={styles.btn}>
                <Icon name="chevron-forward" size={25} color="#fff" />
            </TouchableHighlight>
        </View>
    )


    return (
        <SwiperFlatList
            showPagination
            data={data}
            paginationActiveColor={theme.colors.btnColor}
            paginationStyleItem={{ height: 8, width: 8, margin: -120, marginLeft: 0 }}
            paginationStyleItemActive={{ width: 40, height: 8 }}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: CONTAINER_OUTER_SPACING,
        paddingTop: 50,
        backgroundColor: theme.colors.background
    },
    img: {
        marginTop: 20
    },
    title: {
        fontSize: 28,
        letterSpacing: 1,
        fontWeight: "600",
        opacity: 0.6,
        color: theme.colors.textColor,
        marginVertical: 20
    },
    description: {
        color: theme.colors.textColor,
        opacity: 0.3,
        fontWeight: "500",
        fontSize: 17,
        textAlign: "center",
        letterSpacing: 0.7,
        lineHeight: 23,
        marginHorizontal: 50
    },
    btn: {
        backgroundColor: "#FF9A9A",
        width: 55,
        aspectRatio: 1 / 1,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 24,
        right: 24
    }
})