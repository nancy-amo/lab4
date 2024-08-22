
import {useContext} from "react";
import { StyleSheet,  View,Text,Image } from 'react-native';
import UserContext from "./Form2"
import Context from "./Form3"

export default function Profile({name,email,phoneNumber}) {
    const address = useContext(UserContext);
    const city = useContext(UserContext);
    const state = useContext(UserContext);
    const cardNumber = useContext(UserContext);
    const expirationMonth = Context(UserContext);
    const expirationYear = Context(UserContext);
    const cvv = Context(UserContext);

  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require("./Image/pic.jpg")} /> 
      <Text style={styles.space}>Name:{name}</Text>
      <Text style={styles.space}>Email:{email}</Text>
      <Text style={styles.space}>Phone Number:{phoneNumber}</Text>
      <Text style={styles.space}>Address:{address}</Text>
      <Text style={styles.space}>City:{city}</Text>
      <Text style={styles.space}>State:{state}</Text>
      <Text style={styles.space}>ZipCode:{zipCode}</Text>
      <Text style={styles.space}>Card number:{cardNumber}</Text>
      <Text style={styles.space}>exp. Year:{expirationYear}</Text>
      <Text style={styles.space}>exp. Month:{expirationMonth}</Text>
      <Text style={styles.space}>cvv:***</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:100,
  },
  image:{
    borderRadius:500,
  },
  space:{
    marginTop:20,
    marginBottom:20
  }
});