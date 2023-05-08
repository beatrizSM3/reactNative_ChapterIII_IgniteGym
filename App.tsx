
import { StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes/index';
import { Home } from '@screens/Home';


export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold 
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={THEME}>
        {fontsLoaded ?
        <Routes/>: <Loading/>
        }
        <StatusBar barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

