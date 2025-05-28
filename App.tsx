import { useEffect, useState, useCallback } from 'react';
import Home from './src/screens/main';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import CustomSplash from './src/components/customSplash';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showCustomSplash, setShowCustomSplash] = useState(true);

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); 
        setTimeout(() => {
          setShowCustomSplash(false); 
        }, 3000);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded || showCustomSplash) {
    return <CustomSplash />;
  }

  return <Home />;
}
