// src/app/view-products/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import styles from './ViewProduct.module.css';
import ProtectedRoute from '../../components/ProtectedRoute';
import { Product } from '../../types';

export default function ViewProductsPage() {
    return (
        <ProtectedRoute>
            <div className={styles.viewProductsContainer}>
                <h2>Product Inventory</h2>
                <ViewProducts />
            </div>
        </ProtectedRoute>
    );
}

function ViewProducts() {
    const [products, setProducts] = useState<Product[]>([]); // State to store the list of products

    useEffect(() => {
        // Fetch products from Firestore
        const fetchProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "products"));
                const productsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                })) as Product[];
                setProducts(productsList);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts(); // Call the fetch function
    }, []);

    return (
        <div>
            {products.length > 0 ? (
                <ul className={styles.productList}>
                    {products.map((product) => (
                        <li key={product.id} className={styles.productItem}>
                            <h3>{product.name}</h3>
                            <p>Quantity: {product.quantity}</p>
                            {/* Add more details if needed */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}