import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const FruitSaleCard = ({ fruit }) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={[styles.fixImg]} onPress={() => navigation.navigate('product',{...fruit,color:fruit.color(0.5)})}>
                <Image source={fruit.image} style={{ width: 65, height: 50 }} />
            </TouchableOpacity>
            <View style={[styles.bottom, { backgroundColor: fruit.color(0.5) }]}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 500 }}>${fruit.price}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 80,
        height: 75,
        marginRight: 20,
        borderRadius: 10,
        padding: 8
    },
    fixImg: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -30,
        zIndex: 2,
        width: 80,
    },
})
export default FruitSaleCard