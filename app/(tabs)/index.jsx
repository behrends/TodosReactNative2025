import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Button, StyleSheet, View } from 'react-native';
import TodoList from '../../components/TodoList';
import TodoModal from '../../components/TodoModal';

const data = [
  { id: 1, text: 'Einkaufen' },
  { id: 2, text: 'Sport' },
  { id: 3, text: 'React Native lernen' },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState(data);
  return (
    <View style={styles.container}>
      <TodoModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSave={(todo) => {
          setTodos([...todos, { text: todo, id: todos.length + 1 }]);
          setModalVisible(false);
        }}
      />
      <TodoList todos={todos} />
      {/* TODO safe area context einbauen */}
      <View style={{ marginBottom: 40 }}>
        <Button
          title="Todo hinzufügen"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
