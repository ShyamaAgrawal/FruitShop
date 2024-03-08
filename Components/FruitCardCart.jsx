import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { PlusIcon, MinusIcon } from "react-native-heroicons/solid";

const FruitCardCart = ({ fruit }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
            <View style={{ marginLeft: 30, }}>
                <TouchableOpacity style={[styles.fixImg]} >
                    <Image source={fruit.image} style={{ width: 65, height: 50 }} />
                </TouchableOpacity>
                <View style={[styles.bottom, { backgroundColor: fruit.color(0.5) }]}>
                    {/* <Text style={{ color: 'black', fontSize: 20, fontWeight: 500 }}>${fruit.price}</Text> */}
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 500, fontSize: 18 }}>
                    {fruit.name}
                </Text>
                <Text style={{ color: 'orange', fontSize: 15 }}>${fruit.price}</Text>
            </View>
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ backgroundColor: 'lightgray', padding: 5, borderRadius: 5 }}>
                    <MinusIcon size="15" color="white" />
                </TouchableOpacity>
                <Text style={{marginHorizontal:10,}}>{fruit.qty}</Text>
                <TouchableOpacity style={{backgroundColor:'lightgray',padding:5,borderRadius:5}}>
                    <PlusIcon size="15" color="white"/>
                </TouchableOpacity>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 60,
        height: 60,
        marginRight: 20,
        borderRadius: 25,
        padding: 8
    },
    fixImg: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -30,
        marginLeft: -25,
        marginTop: 10,
        zIndex: 2,
        width: 80,

    }
})

export default FruitCardCart