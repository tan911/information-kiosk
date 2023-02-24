import { View, Text, StatusBar, StyleSheet, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

import Colors from '../utils/colors';

function SplashScreen({ navigation }) {
  const headerHide = useNavigation();

  useLayoutEffect(() => {
    headerHide.setOptions({
      headerShown: false,
    });
  }, []);

  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

  return (
    <View style={styles.rootContainer}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.secondaryEx} />
      <Image
        source={require('../assets/brachesImages/cebucityseal.png')}
        style={styles.imageSeal}
      />
      <Text style={styles.text}>Cebu City Goverment Directory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondaryEx,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },
  imageSeal: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
