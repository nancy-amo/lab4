import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Form1Screen from './components/Form1';
import Form2Screen from './components/Form2';
import Form3Screen from './components/Form3';
import Menu from './components/MenuScreen';
import Cart from './components/CartScreen';

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="User Details" component={Form1Screen} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="User Address Details" component={Form2Screen} />
          <Stack.Screen name="Bank Details" component={Form3Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
