import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React ,{useState}from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { HeartIcon } from 'react-native-heroicons/solid'


const ProductScreen = (props) => {
    // console.log(props.route.params);
    const fruit = props.route.params;
    const navigation = useNavigation();
    const [isLiked, setIsLiked] = useState(false)

    return (
        <View style={{ backgroundColor: fruit.color, flex: 1 }}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 15 }}>
                    <TouchableOpacity onPress={() => navigation.goBack('home')} style={styles.back}>
                        <ChevronLeftIcon size='30' color='white' />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center', marginTop: 20, paddingBottom: 0, shadowColor: fruit.shadow, shadowRadius: 50, shadowOffset: {
                        width: 0, height: 50,
                    },
                    shadowOpacity: 0.7,
                    elevation: 10,
                    overflow: 'visible',
                    backgroundColor: fruit.color,
                    // width: 290,
                    // height: 290,
                    alignSelf: 'center',
                }}>
                    <Image source={fruit.image} style={{ width: 290, height: 290 }} />
                </View>
            </SafeAreaView>


            <View style={styles.heart}>
                <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={{ backgroundColor: isLiked ? 'rgba(255,255,255,1)' : fruit.shadow, borderRadius: 50, padding: 15, borderColor: isLiked?fruit.shadow:'rgba(255,255,255,0.5)', borderWidth: 1 }}>
                    <HeartIcon size={25} color={isLiked ? fruit.shadow : 'white'} />
                </TouchableOpacity>
            </View>


            <View style={{ flex: 1, backgroundColor: '#f6fff8', borderTopLeftRadius: 75, borderTopRightRadius: 0, padding: 20,zIndex:1 }}>
                <Text style={{ fontWeight: 800, fontSize: 35, color: '#404040',marginTop: 15, }}>{fruit.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15 }}>{fruit.desc}</Text>
                    <Text>Sold <Text style={{ fontWeight: 600, fontSize: 15 }}>250</Text></Text>
                </View>
                <View style={{ height: 165 }}>
                    <Text style={{ paddingTop: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum tempora dicta, omnis veritatis itaque deleniti enim incidunt placeat facere explicabo iure sint fugiat optio earum aliquam. Ipsum, adipisci voluptates! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cupiditate quo nisi voluptates vero reiciendis at laboriosam, veniam fugit dicta nostrum repellat necessitatibus? Iure, iste vel exercitationem obcaecati </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, alignItems: 'center', }}>
                    <Text style={{ fontSize: 30 }}>${fruit.price}</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('cart')} style={{
                        flex: 1, marginLeft: 20, backgroundColor: fruit.shadow, paddingTop: 15, paddingBottom: 15, borderRadius: 10, justifyContent: 'center', shadowColor: fruit.shadow, shadowRadius: 50, shadowOffset: {
                            width: 0, height: 15,
                        },
                        shadowOpacity: 0.7,
                        elevation: 10,
                        overflow: 'visible',
}}>
                        <Text style={{ fontSize: 20, color: 'white',marginLeft:'auto',marginRight: 'auto', }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    back: {
        backgroundColor: "rgba(255, 255, 255, 0.35)",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        // borderTopLeftRadius
    },
    heart: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 25,
        marginBottom: -30,
        marginTop: -30,
        zIndex:2,
    }
})
export default ProductScreen