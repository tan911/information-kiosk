import { Pressable, View, Text, StyleSheet } from 'react-native';

function PositionGridTile({ position, onPress }) {
  return (
    <View style={styles.gridPosition}>
      <Pressable style={styles.buttonBox} onPress={onPress}>
        <View style={styles.innerContainer}>
          <Text>{position}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PositionGridTile;

const styles = StyleSheet.create({
  gridPosition: {
    flex: 1,
    margin: 16,
    height: 100,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 8,
  },
  buttonBox: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
