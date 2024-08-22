import React, { useState ,createContext} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function Form3Screen({ navigation }) {
  const Context = createContext();
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    
    if (!cardNumber || !expirationMonth || !expirationYear || !cvv) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    if (!/^\d{16}$/.test(cardNumber)) {
      Alert.alert('Validation Error', 'Please enter a valid 16-digit card number.');
      return;
    }

    if (!/^\d{2}$/.test(expirationMonth) || !/^\d{4}$/.test(expirationYear)) {
      Alert.alert('Validation Error', 'Please enter a valid expiration date.');
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      Alert.alert('Validation Error', 'Please enter a valid 3-digit CVV.');
      return;
    }

    Alert.alert('Success', 'Payment details submitted successfully!')
    navigation.navigate("Home")
    
  };

  return (
    <Context.Provider value={{cardNumber,expirationMonth,expirationYear,cvv}}>
    <View style={styles.container}>
        
      <Text style={styles.title}>Payment Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Credit Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="numeric"
        maxLength={16}
      />
      <View style={styles.expirationContainer}>
        <TextInput
          style={[styles.input, styles.expirationInput]}
          placeholder="MM"
          value={expirationMonth}
          onChangeText={setExpirationMonth}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={[styles.input, styles.expirationInput]}
          placeholder="YYYY"
          value={expirationYear}
          onChangeText={setExpirationYear}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        keyboardType="numeric"
        maxLength={3}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </Context.Provider>
  );
}

export default Form3Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
   
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
  expirationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expirationInput: {
    flex: 1,
    marginRight: 10,
  },
});
