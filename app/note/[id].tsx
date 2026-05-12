import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { useNotesStore } from "../../store/notes.store";

export default function NoteDetailScreen() {
  const { id, tittle } = useLocalSearchParams();
  const notes = useNotesStore((state) => state.notes);
  const note = notes.find((noteItem) => noteItem.id === id);

  if (!note) {
    return (
      <View style={styles.container}>
        <Text>Nota no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>
        {note.favorite ? "⭐" : "☆"} {note.title}
      </Text>

      <Text style={styles.text}>ID: {note.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  tittle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    color: "#f59e0b",
  },
});
