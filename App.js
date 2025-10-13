import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Todo(props) {
  return <Text style={styles.todoText}>{props.text}</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Todo text="Einkaufen" />
      <Todo text="Sport" />
      <Todo text="React Native lernen" />
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
