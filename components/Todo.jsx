import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function Todo({ children }) {
  const [done, setDone] = useState(false);
  const doneStyle = done
    ? { textDecorationLine: 'line-through' }
    : {};
  return (
    <Pressable onPress={() => setDone(!done)}>
      <View style={styles.container}>
        <Checkbox
          style={styles.checkbox}
          value={done}
          onValueChange={setDone}
        />
        <Text style={[styles.todoText, doneStyle]}>{children}</Text>
      </View>
    </Pressable>
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
