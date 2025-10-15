import { Button, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Details() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Button title="Zurück" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
