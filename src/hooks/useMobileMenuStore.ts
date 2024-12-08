import { create } from "zustand";

interface MobileMenuStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
