import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Todo() {
  return (
    <Text style={styles.todoText}>
      Todo-Komponente implementieren
    </Text>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>Einkaufen</Text>
      <Text style={styles.todoText}>Sport</Text>
      <Text style={styles.todoText}>React Native lernen</Text>
      <Todo />
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
  todoText: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
