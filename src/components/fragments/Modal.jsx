// Modal.jsx
import { useState, useEffect } from "react";
import { useProductStore } from "../../store/ProductStore";
import { useModalStore } from "../../store/ModalStore";
import Input from "../elements/Input";
import Button from "../elements/Button";

function Modal() {
  const { addProduct, updateProduct } = useProductStore();
  const { closeModal, mode, productData } = useModalStore();
  const [formData, setFormData] = useState({ title: "", description: "", price: "" });

  useEffect(() => {
    if (mode === "edit" && productData) {
      setFormData({
        title: productData.title,
        description: productData.description,
        price: productData.price,
        id: productData.id
      });
    }
  }, [mode, productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "add") {
      addProduct({ ...formData, id: Date.now() }); 
    } else if (mode === "edit") {
      updateProduct(formData)
    }
     closeModal();
  };

  return (
    <div className="absolute w-1/4 p-4 bg-white border-2 border-red-600 rounded-lg flex justify-center align-middle">
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
        <div>
          <h2 className="text-md text-red-600">{mode === "add" ? "Tambah Produk" : "Edit Produk"}</h2>
        </div>
        <div>
          <Input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={formData.title} 
            onChange={handleChange}
          />
          <Input 
            type="text" 
            name="description" 
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange}
          />
          <Input 
            type="text" 
            name="price" 
            placeholder="Price" 
            value={formData.price} 
            onChange={handleChange} 
          />
        </div>
        <div>
          <Button type="submit">{mode === "add" ? "Add" : "Save"}</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default Modal;