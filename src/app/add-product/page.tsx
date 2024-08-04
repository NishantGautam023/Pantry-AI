// src/app/add-product/page.tsx
"use client"

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from './AddProductForm.module.css';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Product } from '../../types';

// Dynamically import the Camera component to avoid server-side rendering issues
const Camera = dynamic(() => import('react-camera-pro').then(mod => mod.Camera), { ssr: false });

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
    image: ''
  });
  const [cameraOpen, setCameraOpen] = useState(false);
  const cameraRef = useRef(null);

  const handleTakePhoto = () => {
    if (cameraRef.current) {
      const photo = cameraRef.current.takePhoto();
      setProduct(prev => ({ ...prev, image: photo }));
      setCameraOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle product addition logic here, such as adding to Firestore
    console.log(product);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add New Product</h2>
      <div className={styles.infoBox}>
        <h3>How to Add Products</h3>
        <p>Use the webcam or upload a picture to detect the product. Ensure the object is in good lighting for better accuracy. The system will identify the product and suggest a default quantity.</p>
      </div>
      {cameraOpen ? (
        <div className={styles.cameraWrapper}>
          <Camera ref={cameraRef} />
          <button onClick={handleTakePhoto}>Capture Photo</button>
          <button onClick={() => setCameraOpen(false)}>Cancel</button>
        </div>
      ) : (
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
      )}
    </div>
  );
}