import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModelStore {
  model: string;
  setModel: (model: string) => void;
}

// Make the store persist
export const useModelStore = create<ModelStore>()(
  persist(
    (set) => ({
      model: "",
      setModel: (model: string) => set({ model }),
    }),
    { name: "model-store" }
  )
);
