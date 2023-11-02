import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxeSrDMLo-tv-ZEVkVLLDGAAW_M93cRD0",
  authDomain: "dcalg-7b097.firebaseapp.com",
  projectId: "dcalg-7b097",
  storageBucket: "dcalg-7b097.appspot.com",
  messagingSenderId: "992054711155",
  appId: "1:992054711155:web:42bb2ea918af13e901eb06"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const addPost = async (post: any) => {
  try{
      const where = collection(db, "posts")
      await addDoc(where, post)
  } catch (error) {
      console.error(error)
  }
}
export const getPost = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
      const data = doc.data();
      transformed.push({id: doc.id, ...data})
  });

  return transformed;
}

export const getProfile = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
      const data = doc.data();
      transformed.push({id: doc.id, ...data})
  });

  return transformed;
}

export const createUser = (email: any, pass: any /*other stuff lije username*/) => {
  createUserWithEmailAndPassword(auth, email, pass)
  .then(async (userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    try{
      const where = collection(db, "users", user.uid)
      const data = {
        /*name: name,
        age: age,*/
      }
      await addUser(where, data)
  } catch (error) {
      console.error(error)
  }
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export const addUser = (a: any, b: any) => {

}

const logIn = (email:any, pass: any) => {
  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}




export default {
  addPost, getPost, getProfile, logIn, createUser
}