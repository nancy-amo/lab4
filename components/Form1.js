import React, { useState } from 'react';
import { View, TextInput, Button, Text,Pressable, StyleSheet, Alert } from 'react-native';
import Profile from './ProfileScreen';



function Form1Screen({ navigation }){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const validateForm = () => {
    
    if (name.trim().length === 0) {
        Alert.alert('Validation Error', 'Please enter your name.');
          return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Validation Error', 'Please enter a valid 10-digit phone number.');
      return false;
    }

    return true;
    };




  const handleNext = () => {
    if (validateForm()) {
         navigation.navigate("Menu");
        <Profile name={name} email={email} phoneNumber={phoneNumber}/>
    }};

  return (
    <View style={styles.container}>

    <Text>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

    <Text>Email Addresss:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

    <Text>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default Form1Screen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    
  },
  input: {
    height: 40,
    width:300,
    marginTop:10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom:17,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
