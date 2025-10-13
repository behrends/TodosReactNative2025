import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Todo({ children }) {
  const [done, setDone] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={done}
        onValueChange={setDone}
      />
      <Text style={styles.todoText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkbox: {
    marginLeft: 10,
  },
  todoText: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
