
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, FlatList, View, Button,TouchableOpacity } from 'react-native';
import Cart from './CartScreen';


function Menu({navigation}) {
    const [cart, setCart] = useState([]);
    const [addedItems, setAddedItems] = useState({}); // Track added items
    const [place] = useState([
        { key: "1", image: require("./Image/koeksisters.jpg"), name: "Koeksisters", quantity: 1, price: 25 },
        { key: "2", image: require("./Image/mogodu.jpg"), name: "Mogodu", quantity: 1, price: 65 },
        { key: "3", image: require("./Image/bunny-chow.jpg"), name: "Bunny-chow", quantity: 1, price: 35 },
        { key: "4", image: require("./Image/pap&wors.jpg"), name: "Pap and Wors", quantity: 1, price: 45 },
        { key: "5", image: require("./Image/biltong.jpg"), name: "Biltong", quantity: 1, price: 25 },
        { key: "6", image: require("./Image/chicken-feet.jpg"), name: "Chicken Feet", quantity: 1, price: 30 }
    ]);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.key === item.key);
        if (existingItem) {
            setCart(cart.map(cartItem => 
                cartItem.key === item.key 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
            ));
        } else {
            setCart([...cart, { ...item }]);
        }
        setAddedItems(prev => ({ ...prev, [item.key]: true })); // Mark item as added
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.heading}>Traditional Menu:</Text>
            <FlatList
                data={place}
                keyExtractor={(item) => item.key}
                numColumns={2}  // Display items in 2 columns
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>R{item.price}</Text>
                        <Button 
                            title={addedItems[item.key] ? "Added to Cart" : "Add to Cart"} 
                            onPress={() => addToCart(item)} 
                        />
                    </View>
                )}
            />      
            <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.button}>
            <Button title="View cart" onPress={() => <Cart cart={cart} setCart={setAddedItems} />} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default Menu;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop:100,
    },
    image:{
        width:150,
        height:150,
        marginVertical:10,
        marginHorizontal:10,
    },
    heading:{
        fontSize:24,
        marginLeft:50,
    },
    itemContainer:{
        marginBottom:15,
        marginTop:15,
        justifyContent:"center",
        alignItems:"center",
    }
});
 
