import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../utils/colors';

function PositionGridTile({ position, onPress, branch }) {
  let primary, secondary, branchImage;

  switch (branch) {
    case 'EXECUTIVE':
      (primary = Colors.primaryEx),
        (secondary = Colors.secondaryEx),
        (branchImage = '../assets/brachesImages/executive.png');
      break;
    case 'LEGISLATIVE':
      (primary = Colors.primaryLeg), (secondary = Colors.secondaryLeg);
      break;
    case 'REMOTE OFFICES':
      (primary = Colors.primaryRem), (secondary = Colors.secondaryRem);
      break;
    default:
      (primary = ''), (secondary = ''), (branchImage = '');
  }

  return (
    <LinearGradient style={styles.gridPosition} colors={[primary, secondary]}>
      <ImageBackground
        source={require('../assets/brachesImages/executive.png')}
        resizeMode="stretch"
        style={styles.innerContainer}
        imageStyle={styles.backgroundImage}>
        <Pressable style={styles.buttonBox} onPress={onPress}>
          <View style={styles.innerContainer}>
            <Text>{position}</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </LinearGradient>
  );
}

export default PositionGridTile;

const styles = StyleSheet.create({
  gridPosition: {
    flex: 1,
    margin: 16,
    height: 100,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonBox: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
