import { create } from "zustand";

export const useModalStore = create((set) => ({
  // State
  isOpen: false,
  mode: "add", // "add" or "edit"
  productData: null,

  // Actions
  openModal: (mode, productData = null) => set({ isOpen: true, mode, productData }),
  closeModal: () => set({ isOpen: false, mode: "add", productData: null }),
}));
