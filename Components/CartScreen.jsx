import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { cartItems } from '../data';
import FruitCardCart from './FruitCardCart';


const CartScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff6e6' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 15 }}>
                <TouchableOpacity onPress={() => navigation.goBack('home')} style={styles.back}>
                    <ChevronLeftIcon size='30' color='black' />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 15,paddingTop:0 ,marginBottom: -20,}}>
                <Text style={{ fontSize: 35, color: '#404040' }}>Your <Text style={{ fontWeight: 600, fontSize: 35 }}>Cart</Text></Text>
            </View>
            <View style={{padding:15}}>
                <FlatList data={cartItems} renderItem={(fruit) => {
                    return (
                        <FruitCardCart fruit={fruit.item} />
                    )
                }}>
                </FlatList>
            </View>
            <View style={{flexDirection:'row', justifyContent: 'flex-end',padding:15,paddingBottom:0}}>
                <Text style={{fontWeight:600,fontSize:20}}>Total Price : $205.30</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', margin:50 }}>
                <TouchableOpacity  style={{
                    flex: 1, backgroundColor: 'orange', paddingTop: 15, paddingBottom: 15, borderRadius: 10, shadowColor: '#ff7b00', shadowRadius: 50, shadowOffset: {
                        width: 0, height: 15,
                    },
                    shadowOpacity: 1,
                    elevation: 20,
                    // overflow: 'visible',
                }}>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 'auto', marginRight: 'auto', }}>Pay Now</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    back: {
        backgroundColor: "rgba(255, 255, 255, 0.35)",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        // borderTopLeftRadius
    }
})
export default CartScreen