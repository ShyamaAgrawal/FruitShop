import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import {HeartIcon} from 'react-native-heroicons/solid'

const FruitCard = ({ fruit }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <View style={[styles.imgOuter, { backgroundColor: fruit.item.color(1)}]}>
            <View style={styles.heart}>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={{ backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 50, padding: 15, borderColor:'rgba(255,255,255,0.5)',borderWidth:1 }}>
                    <HeartIcon size={25} color={isLiked ? fruit.item.shadow : 'white'} />
                </TouchableOpacity>
            </View>
            <View style={[{ shadowColor: fruit.item.shadow },styles.imgBox,styles.shadow]}>
                <Image source={fruit.item.image} style={{ width: 200, height: 160 }} />
            </View>
            <View>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 500 }}>{fruit.item.name}</Text>
                <Text style={{ color: 'white', fontSize: 20 }}>${fruit.item.price}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    imgBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:20
    },
    imgOuter: {
        width: 270,
        borderRadius: 20,
        marginRight: 20,
        marginTop: 20,
        padding: 20,
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 1,
        overflow: 'hidden',
    },
    shadow: {
        
        shadowRadius: 40,
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 50 },
        elevation: 80,
        // backgroundColor:'black'
    },
    heart: {
        flexDirection: 'row',
        justifyContent:'flex-end'
    }
})

export default FruitCard