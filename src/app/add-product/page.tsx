// src/app/add-product/page.tsx
"use client"

import { useState, useRef } from 'react';
import styles from './AddProductForm.module.css';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Product } from '../../types';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase"
import toast from 'react-hot-toast';


export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <AddProductForm />
    </ProtectedRoute>
  );
}

function AddProductForm() {
  const [product, setProduct] = useState<Product>({
    name: '',
    quantity: 1,

  });
  const [cameraOpen, setCameraOpen] = useState(false);
  const cameraRef = useRef(null);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Add a new document with a generated id to the "products" collection
      await addDoc(collection(db, "products"), {
        name: product.name,
        quantity: product.quantity,

      });

      // Trigger a toast notification
      toast.success('Product added successfully! Check it in the inventory.');
      // Optionally, reset the form after submission
      setProduct({ name: '', quantity: 1 });
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error('Failed to add product. Please try again.');
    }
  };



  return (
    <div className={styles.formContainer}>
      <h2>Add New Product</h2>
      <div className={styles.infoBox}>
        <h3>How to Add Products</h3>
        <p>Use the webcam to detect the product. Ensure the object is in good lighting for better accuracy.</p>
      </div>


      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={() => setCameraOpen(true)}>Use Webcam</button>
          {/* <button type="button" className={styles.button} onClick={() => alert('Upload Image Clicked')} disabled >Upload Image</button> */}
        </div>
        <input
          type="text"
          placeholder="Product Name*"
          value={product.name}
          onChange={(e) => setProduct(prev => ({ ...prev, name: e.target.value }))}
          required
          className={styles.input}
        />
        <input
          type="number"
          placeholder="Quantity*"
          value={product.quantity}
          onChange={(e) => setProduct(prev => ({ ...prev, quantity: Number(e.target.value) }))}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add Product</button>
      </form>

    </div>
  );
}