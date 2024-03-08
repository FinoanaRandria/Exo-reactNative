import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));


  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={{flexDirection:'row', gap:2}}>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>SUB</Text>
      </TouchableOpacity>
      </View>
      <Text>You clicked {count} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  countText: {
    fontSize: 48,
    marginBottom: 30,
  },
  button: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#0000FF',
  },
});

export default App