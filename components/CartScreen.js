import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, FlatList, View, Button, Alert } from 'react-native';

function Cart({ cart=[], setCart }) {


    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    
    const updateQuantity = (key, newQuantity) => {
        setCart(cart.map(item => item.key === key ? { ...item, quantity: newQuantity } : item));
    };

   
    const removeItem = (key) => {
        setCart(cart.filter(item => item.key !== key));
    };

    const handleCheckout = () => {
        Alert.alert("Checkout", "Are you sure you want to proceed to checkout?", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Confirm",
                onPress: () => setCart([],Alert.alert('Success', 'Payment successfully!'))
              
            }
        ]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Your Cart:</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.image} />

                        <View style={styles.column}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>R{item.price}</Text>
                        </View>

                        <View style={styles.column2}> 
                        <View style={styles.quantityContainer}>
                            <Button title="-" onPress={() => updateQuantity(item.key, item.quantity - 1)} disabled={item.quantity <= 1} />
                            <Text style={styles.quantity}>{item.quantity}</Text>
                            <Button title="+" onPress={() => updateQuantity(item.key, item.quantity + 1)} />
                        </View>
                        <Button title="Remove" onPress={() => removeItem(item.key)} />
                        </View>

                    </View>
                )}
            />
            <Text style={styles.total}>Total: R{calculateTotal()}</Text>
            <Button title="Proceed to Checkout" onPress={handleCheckout} />
        </SafeAreaView>
    );
}

export default Cart;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginTop:70,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    column:{
        marginLeft:20,
        flexDirection:"column",
        marginTop:30,
    },
    column2:{
        marginLeft:30,
        flexDirection:"column",
        marginTop:25,
        
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    quantity: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        marginBottom:20,
    },
});

