// Product.jsx
import { useProductStore } from "../../store/ProductStore";
import { useModalStore } from "../../store/ModalStore";
import Card from "../fragments/Card";
import Button from "../elements/Button";
import Modal from "../fragments/Modal";

function Product() {
  const { product, deleteProduct } = useProductStore();
  const { openModal, isOpen } = useModalStore();

  return (
    <>
    <Button onClick={() => openModal("add")}>Add Product</Button>
    <div className="flex gap-4">
      {isOpen && <Modal />}
      {product.length > 0 ? (
        product.map((product) => (
          <Card 
          key={product.id} 
          {...product} 
          onEdit={() => openModal("edit", product)}
          onDelete={() => deleteProduct(product.id)} 
          />
        ))
      ) : (
        <h1>No Product</h1>
      )}
    </div>
      </>
  );
}

export default Product;
