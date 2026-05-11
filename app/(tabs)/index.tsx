import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [note, setNote] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "Comprar pan",
    },

    {
      id: "2",
      title: "Estudiar React Native",
    },
  ]);

  function addNote() {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title: note,
    };

    setNotes([...notes, newNote]);

    setNote("");
  }

  function deleteNote(id: string) {
    const filteredNotes = notes.filter((note) => note.id !== id);

    setNotes(filteredNotes);
  }

  function editNote(id: string) {
    const selectedNote = notes.find((note) => note.id === id);

    if (!selectedNote) return;

    setNote(selectedNote.title);

    setEditingId(id);
  }

  function updateNote() {
    const updatedNotes = notes.map((noteItem) => {
      if (noteItem.id === editingId) {
        return {
          ...noteItem,
          title: note,
        };
      }

      return noteItem;
    });

    setNotes(updatedNotes);

    setEditingId(null);

    setNote("");
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

      <Pressable
        style={styles.button}
        onPress={editingId ? updateNote : addNote}
      >
        <Text style={styles.buttonText}>
          {editingId ? "Guardar Cambios" : "Agregar Nota"}
        </Text>
      </Pressable>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <Text style={styles.noteText}>{item.title}</Text>

            <Pressable
              style={styles.editButton}
              onPress={() => editNote(item.id)}
            >
              <Text style={styles.editButtonText}>Editar</Text>
            </Pressable>

            <Pressable
              style={styles.deleteButton}
              onPress={() => deleteNote(item.id)}
            >
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </Pressable>
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
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    color: "#fff",
  },

  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  noteCard: {
    backgroundColor: "#f3f4f6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  noteText: {
    fontSize: 16,
  },

  deleteButton: {
    marginTop: 10,
    backgroundColor: "#dc2626",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  editButton: {
    marginTop: 10,
    backgroundColor: "#2563eb",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  editButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
