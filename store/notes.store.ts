import { create } from 'zustand';

export interface Note {
  id: string;
  title: string;
  favorite: boolean;
}

interface NotesStore {
  notes: Note[];

  setNotes: (notes: Note[]) => void;
}

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],

  setNotes: (notes) => set({ notes }),
}));