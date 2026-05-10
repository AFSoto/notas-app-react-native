import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [note, setNote] = useState('');

  const [notes, setNotes] = useState([
    {
      id: '1',
      title: 'Comprar pan',
    },

    {
      id: '2',
      title: 'Estudiar React Native',
    },
  ]);

  function addNote() {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title: note,
    };

    setNotes([...notes, newNote]);

    setNote('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi App de Notas 📝</Text>

      <TextInput
        placeholder="Escribe una nota..."
        placeholderTextColor="#999"
        value={note}
        onChangeText={setNote}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={addNote}>
        <Text style={styles.buttonText}>Agregar Nota</Text>
      </Pressable>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
  },

  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  noteCard: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  noteText: {
    fontSize: 16,
  },
});