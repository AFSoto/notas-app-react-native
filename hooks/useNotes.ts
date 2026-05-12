import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNotesStore } from "../store/notes.store";

export interface Note {
  id: string;
  title: string;
  favorite: boolean;
}

export function useNotes() {
  const [note, setNote] = useState("");

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);

  const notes = useNotesStore((state) => state.notes);

  const setNotes = useNotesStore((state) => state.setNotes);

  const filteredNotes = notes.filter((noteItem) =>
    noteItem.title.toLowerCase().includes(search.toLowerCase()),
  );

  function addNote() {
    if (!note.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: note,
      favorite: false,
    };

    setNotes([...notes, newNote]);

    setNote("");
  }

  function deleteNote(id: string) {
    const filtered = notes.filter((noteItem) => noteItem.id !== id);

    setNotes(filtered);
  }

  function editNote(id: string) {
    const selected = notes.find((noteItem) => noteItem.id === id);

    if (!selected) return;

    setNote(selected.title);

    setEditingId(id);
  }

  function updateNote() {
    const updated = notes.map((noteItem) => {
      if (noteItem.id === editingId) {
        return {
          ...noteItem,
          title: note,
        };
      }

      return noteItem;
    });

    setNotes(updated);

    setEditingId(null);

    setNote("");
  }

  function toggleFavorite(id: string) {
    const updated = notes.map((noteItem) => {
      if (noteItem.id === id) {
        return {
          ...noteItem,
          favorite: !noteItem.favorite,
        };
      }

      return noteItem;
    });

    setNotes(updated);
  }

  async function saveNotes(notesToSave: Note[]) {
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

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return {
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
  };
}
