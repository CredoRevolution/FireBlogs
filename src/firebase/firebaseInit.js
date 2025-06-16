import {initializeApp} from "firebase/app";
import {getFirestore, serverTimestamp} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB7YO9eQJ5BEambQFtS9f3uMRJ4_lxuGXY",
    authDomain: "fireblogs-453ea.firebaseapp.com",
    projectId: "fireblogs-453ea",
    storageBucket: "fireblogs-453ea.firebasestorage.app",
    messagingSenderId: "401212893530",
    appId: "1:401212893530:web:e6525a059d747aa14fab63"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const timestamp = serverTimestamp();

export {timestamp};

export default db
