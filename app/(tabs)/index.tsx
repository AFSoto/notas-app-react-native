import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import NoteCard from "../../components/NoteCard";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [note, setNote] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const [search, setSearch] = useState("");

  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "Comprar pan",
      favorite: false,
    },

    {
      id: "2",
      title: "Estudiar React Native",
      favorite: false,
    },
  ]);

  function addNote() {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now().toString(),
      title: note,
      favorite: false,
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

  function toggleFavorite(id: string) {
    const updatedNotes = notes.map((noteItem) => {
      if (noteItem.id === id) {
        return {
          ...noteItem,
          favorite: !noteItem.favorite,
        };
      }

      return noteItem;
    });

    setNotes(updatedNotes);
  }

  async function saveNotes(notesToSave: any) {
    try {
      const jsonValue = JSON.stringify(notesToSave);

      await AsyncStorage.setItem("notes", jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadNotes() {
    try {
      const storedNotes = await AsyncStorage.getItem("notes");

      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const filteredNotes = notes.filter((noteItem) =>
    noteItem.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mi App de Notas 📝</Text>

      <TextInput
        placeholder="Buscar nota..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

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
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteCard
            item={item}
            onDelete={deleteNote}
            onEdit={editNote}
            onToggleFavorite={toggleFavorite}
          />
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
  
  searchInput: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f3f4f6",
  },
});
