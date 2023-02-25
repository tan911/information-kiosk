import { View, Text, Pressable, StyleSheet } from 'react-native'; 

function DisplayedDepartment({ title }) {
  return (
    <View style={styles.container}>
      <Pressable android_ripple={{color: '#ccc'}} style={(({pressed}) => 
        pressed ? styles.buttonPressed : null
      )}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default DisplayedDepartment;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 0.5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    overflow: 'hidden'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5
  }
});
