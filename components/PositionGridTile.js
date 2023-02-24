import { Pressable, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function PositionGridTile({ position, color, image, onPress }) {
  return (
    <LinearGradient style={styles.gridPosition} colors={color}>
      <ImageBackground
        source={image}
        resizeMode="stretch"
        style={styles.innerContainer}
        imageStyle={styles.backgroundImage}
      >
        <Pressable style={styles.buttonBox} onPress={onPress}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{position}</Text>
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
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.3,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
  },
});
