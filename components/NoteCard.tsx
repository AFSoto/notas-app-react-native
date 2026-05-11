import { Pressable, StyleSheet, Text, View } from "react-native";

interface NoteCardProps {
  item: {
    id: string;
    title: string;
    favorite: boolean;
  };

  onDelete: (id: string) => void;

  onEdit: (id: string) => void;

  onToggleFavorite: (id: string) => void;
}

export default function NoteCard({
  item,
  onDelete,
  onEdit,
  onToggleFavorite,
}: NoteCardProps) {
  return (
    <View style={styles.noteCard}>
      <Text style={styles.noteText}>
        {item.favorite ? "⭐" : "☆"} {item.title}
      </Text>

      <Pressable
        style={styles.favoriteButton}
        onPress={() => onToggleFavorite(item.id)}
      >
        <Text style={styles.favoriteButtonText}>
          {item.favorite ? "Quitar Favorita" : "Favorita"}
        </Text>
      </Pressable>

      <Pressable style={styles.editButton} onPress={() => onEdit(item.id)}>
        <Text style={styles.editButtonText}>Editar</Text>
      </Pressable>

      <Pressable style={styles.deleteButton} onPress={() => onDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: "#f3f4f6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  noteText: {
    fontSize: 16,
  },

  favoriteButton: {
    marginTop: 10,
    backgroundColor: "#f59e0b",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  favoriteButtonText: {
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
});
