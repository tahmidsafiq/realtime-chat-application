import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzi5zwrVa3xYV8ORSuIRbS9hqWDxwKLBk',
  authDomain: 'chat-aplication-abb90.firebaseapp.com',
  projectId: 'chat-aplication-abb90',
  storageBucket: 'chat-aplication-abb90.appspot.com',
  messagingSenderId: '555468762350',
  appId: '1:555468762350:web:4b7e6a81f039b4c378d7ff',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
