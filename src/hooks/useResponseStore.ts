import { create } from "zustand";

interface ResponseStore {
  response: string;
  isLoading: boolean;
  setResponse: (response: string) => void;
  resetResponse: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useResponseStore = create<ResponseStore>((set) => ({
  response: "",
  isLoading: false,
  setResponse: (response) => set({ response }),
  resetResponse: () => set({ response: "" }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
