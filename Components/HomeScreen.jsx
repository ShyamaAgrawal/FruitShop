import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Bars3CenterLeftIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';
import { categories, featuredFruits } from '../data';
import FruitCard from './FruitCard';
import FruitSaleCard from './FruitSaleCard';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";


const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState('Apple');
    const navigation = useNavigation();
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    })
    return (
        <View style={{ backgroundColor: '#fff6e6', height: '100%' }}>

            <LinearGradient
                colors={['#F97727', '#F2B723']}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={[styles.box, { borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }]} >


                {/* Top View */}
                <View style={styles.topView}>
                    <Bars3CenterLeftIcon color="black" size={30} />
                    <TouchableOpacity onPress={() => navigation.navigate('grad')} style={styles.cart}>
                        <ShoppingCartIcon size={25} color="orange" />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 15, }}>
                    <Text style={{ fontSize: 30, marginBottom: 10 }}>
                        Seasonal
                    </Text>
                    <Text style={{ fontSize: 40, fontWeight: 500, marginBottom: 20, color: '#fff' }}>
                        Fruits and Veggies
                    </Text>
                </View>
            </LinearGradient>
            {/* Main Content */}
            <View style={styles.main}>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {categories.map((category, index) => {
                            let isActive = category === activeCategory;
                            let isbold = isActive ? 600 : null;
                            return (
                                <TouchableOpacity key={index} onPress={() => setActiveCategory(category)}>
                                    <Text style={[styles.category, { fontWeight: isbold, color: '#404040' }]}>{category}</Text>
                                    {isActive && <Text style={{ fontWeight: 900, fontSize: 30, marginTop: -15, color: 'orange' }}>__ _</Text>}
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
                {/* Fruits Carousel */}
                <View>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} data={featuredFruits} renderItem={(fruit) => {
                        return (<TouchableOpacity>
                            {/* <Text>{fruit.item.name}</Text> */}
                            <FruitCard fruit={fruit} />
                        </TouchableOpacity>
                        )
                    }}>
                    </FlatList>
                </View>
                {/* Hot sales */}

                <View>
                    <Text style={{ fontWeight: 500, fontSize: 25, marginTop: 15, marginBottom: 10, color: '#404040' }}>Hot Sales</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overFlow: 'visible' }}>
                        {
                            [...featuredFruits].reverse().map((fruit, idx) => {
                                return (
                                    <FruitSaleCard key={idx} fruit={fruit} />
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    cart: {
        backgroundColor: '#ffeccc',
        padding: 10,
        borderRadius: 5,

    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        // marginTop: 5,
        padding: 15
    },
    category: {
        fontSize: 20,
        marginRight: 20
    },
    box: {
        width: '100%',
        height: 200,
    },
});

export default HomeScreen;
