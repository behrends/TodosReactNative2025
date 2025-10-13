import { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';

export default function TodoModal({ visible, onCancel, onSave }) {
  const [todo, setTodo] = useState('');
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Todo hinzufügen</Text>
          <TextInput
            style={styles.input}
            placeholder="Todo eingeben"
            value={todo}
            onChangeText={setTodo}
          />
          <View style={styles.buttons}>
            <Button title="Abbrechen" onPress={onCancel} />
            <Button title="Speichern" onPress={() => onSave(todo)} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  content: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 5,
    fontSize: 24,
    padding: 10,
    marginVertical: 20,
    width: '90%',
  },
});
