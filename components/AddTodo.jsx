import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function AddTodo({ addTodo }) {
  const [inEditMode, setEditMode] = useState(false);
  return (
    <View style={{ marginVertical: 20, width: '80%' }}>
      {inEditMode ? (
        <TextInput
          style={styles.input}
          autoFocus
          placeholder="Neues Todo eingeben"
          returnKeyType="done"
          onSubmitEditing={({ nativeEvent: { text } }) => {
            const value = text.trim();
            if (!value) return; // leere ignorieren
            addTodo(value);
            setEditMode(false);
          }}
          onBlur={() => setEditMode(false)} // Abbrechen bei Fokusverlust
        />
      ) : (
        <Button
          title="Todo hinzufügen"
          onPress={() => setEditMode(true)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
  },
});
