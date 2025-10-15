import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TodoList from '../../components/TodoList';
import AddTodo from '../../components/AddTodo';

const data = [
  { id: 1, text: 'Einkaufen' },
  { id: 2, text: 'Sport' },
  { id: 3, text: 'React Native lernen' },
];

export default function App() {
  const [todos, setTodos] = useState(data);
  return (
    <View style={styles.container}>
      <AddTodo
        onAddTodo={(text) => {
          if (!text || !text.trim()) return; // leere ignorieren
          const newTodo = {
            id: todos.length + 1,
            text: text,
          };
          setTodos([...todos, newTodo]);
        }}
      />
      <TodoList todos={todos} />
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
  },
});
