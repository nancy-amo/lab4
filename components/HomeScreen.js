import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function HomeScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={{ height: 250, width: 300 }} source={require("./Image/mzansi.jpg")} />
      <Text style={styles.text}>
        South African Mzansi cuisine is a vibrant and diverse culinary experience that reflects the rich cultural heritage of the country. It features a fusion of traditional African dishes with influences from Dutch, Indian, Malay, and other global cuisines. Mzansi food offers a taste of authentic South African flavors that are hearty, flavorful, and deeply rooted in the country's history and traditions.
      </Text>
      <Button title='Explore the Traditional Food' onPress={() => navigation.navigate("User Details")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginLeft:25,
    marginRight:23,
    marginTop:30,
    marginBottom:30,
  }
});