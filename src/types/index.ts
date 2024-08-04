export interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}


export interface Product {
    id?: string;
    name: string;
    quantity: number;
    image: string;
}