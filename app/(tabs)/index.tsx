import { FlatList, Pressable, StyleSheet, Text, TextInput } from "react-native";
import NoteCard from "../../components/NoteCard";
import { useNotes } from "../../hooks/useNotes";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const {
    note,
    setNote,

    search,
    setSearch,

    editingId,

    filteredNotes,

    addNote,
    deleteNote,
    editNote,
    updateNote,
    toggleFavorite,
  } = useNotes();

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
