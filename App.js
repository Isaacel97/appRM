import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/components/navigation/RootNavigation';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import Colors from './src/constant/Color';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import{ AuthProvider } from './src/context/AuthContext';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.greenRM,
    secondary: 'yellow',
  },
};

export default function App() {

  const [fontLoaded, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <RootNavigation />
          {/* <StatusBar style="auto" /> */}
      </PaperProvider>
    </AuthProvider>
  );
}
