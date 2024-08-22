import React, { useState , createContext} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';


function Form2Screen({ navigation }) {

  const UserContext = createContext();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

      const handleNext = () => {
          
          if (!address || !city || !state || !zipCode) {
            Alert.alert('Validation Error', 'Please fill in all fields.');
            return;
          }

          if (!/^\d{4}$/.test(zipCode)) {
            Alert.alert('Validation Error', 'Please enter a valid 5-digit zip code.');
            return;
          }

          navigation.navigate('Bank Details'); 
      };

      return (
      <UserContext.Provider value={{address,city,state,zipCode}}>
          <View style={styles.container}>

            <Text style={styles.title}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <Text style={styles.title}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <Text style={styles.title}>State</Text>
            <TextInput
              style={styles.input}
              placeholder="State"
              value={state}
              onChangeText={setState}
            />
            <Text style={styles.title}>Zip Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Zip Code"
              value={zipCode}
              onChangeText={setZipCode}
              keyboardType="numeric"
            />

            <Button title="Next" onPress={handleNext} />
          </View>
          </UserContext.Provider>
      );
}

export default  Form2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginBottom:10,
  },
  input: {
    height: 40,
    width:290,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 8,
  },
});
