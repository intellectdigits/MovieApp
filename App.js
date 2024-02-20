import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import MovieScreen from './Components/MovieScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{tabBarShowLabel: false, headerShown: false,}}/>
        <Stack.Screen name="MovieScreen" component={MovieScreen}  options={{tabBarShowLabel: false, headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;