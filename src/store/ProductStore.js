import { create } from "zustand";

export const useProductStore = create((set) => ({
  // STATE
  product: [],
  modal: false,

  // ACTION
  // Add Product
  addProduct: (newProduct) => {
    set((state) => ({
      product: [...state.product, newProduct]
    }))
  },

  // Delete Product
  deleteProduct: (id) => {
    set((state) => ({
      product: state.product.filter((product) => product.id !== id)
    }))
  },
  
  // Update Product
  updateProduct: (updatedProduct) => {
    set((state) => ({
      product: state.product.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      ),
    }));
  },
}))