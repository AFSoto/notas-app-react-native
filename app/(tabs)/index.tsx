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
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#f9fafb",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#111827",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },

  button: {
    backgroundColor: "#111827",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
});
