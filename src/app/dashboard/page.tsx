import styles from './Dashboard.module.css'; // Import your CSS module
import Image from 'next/image';

import AddIcon from "../../../public/images/add.png"
import cartIcon from "../../../public/images/cart.png"
import analyticsIcon from "../../../public/images/analytics.png"
import alertIcon from "../../../public/images/alert.png"
import productIcon from "../../../public/images/product-icon.png"
import viewInventoryIcon from "../../../public/images/view_invnetory.png"
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <header className={styles.header}>
                <h1>Welcome to Pantry Manager</h1>
                <p>Organize your pantry effortlessly, cut down on waste, and keep your essentials well-stocked</p>
            </header>

            <section className={styles.inventoryOverview}>
                <h2>Inventory Overview</h2>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <Image src={productIcon} alt="Total Products" width={200} height={200} />
                        <h3>0</h3>
                        <p>Total Products</p>
                    </div>
                    <div className={styles.stat}>
                        <Image src={cartIcon} alt="Total Items" width={200} height={200} />
                        <h3>0</h3>
                        <p>Total Items</p>
                    </div>
                    <div className={styles.stat}>
                        <Image src={alertIcon} alt="Low Stock Items" width={200} height={200} />
                        <h3>0</h3>
                        <p>Low Stock Items</p>
                    </div>
                </div>
            </section>

            <section className={styles.actions}>
                <div className={styles.actionCard}>
                    <Image src={viewInventoryIcon} alt="View Inventory" width={200} height={200} />
                    <h3>View Inventory</h3>
                    <button>Go to Inventory</button>
                </div>
                <div className={styles.actionCard}>
                    <Image src={productIcon} alt="Add New Product" width={200} height={200} />
                    <h3>Add New Product</h3>
                    <Link href="/add-product">
                        <button>Add Product</button>
                    </Link>
                </div>
                <div className={styles.actionCard}>
                    <Image src={analyticsIcon} alt="View Analytics" height={200} width={200} />
                    <h3>View Analytics</h3>
                    <button disabled>Coming Soon</button>
                </div>

            </section>
        </div>
    );
}