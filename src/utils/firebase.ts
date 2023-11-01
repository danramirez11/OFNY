/*import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxeSrDMLo-tv-ZEVkVLLDGAAW_M93cRD0",
  authDomain: "dcalg-7b097.firebaseapp.com",
  projectId: "dcalg-7b097",
  storageBucket: "dcalg-7b097.appspot.com",
  messagingSenderId: "992054711155",
  appId: "1:992054711155:web:42bb2ea918af13e901eb06"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const addPost = async (post: any) => {
    try{
        const where = collection(db, "posts")
        await addDoc(where, post)
    } catch (error) {
        console.error(error)
    }
}

const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const transformed: any = [];

    querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        transformed.push({id: doc.id, ...data})
    });

    return transformed;
}

export default {
    addPost, getPost
}*/