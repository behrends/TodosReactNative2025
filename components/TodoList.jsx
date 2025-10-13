import { FlatList } from 'react-native';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Todo key={item.id}>{item.text}</Todo>
      )}
    />
  );
}
