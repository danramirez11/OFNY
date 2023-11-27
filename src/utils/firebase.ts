import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

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

const uploadFile = async (file: File) => {
  const storageRef = ref(storage, `posts/${file.name}`);
  const res = await uploadBytes(storageRef, file);

  return res.metadata.fullPath;
  
};



const getFile = async (filename: string) => {
  const url = getDownloadURL(ref(storage, filename))

  return url
  }

/*export const createUser = (email: any, pass: any /other stuff lije username/) => {
  createUserWithEmailAndPassword(auth, email, pass)
  .then(async (userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    try{
      const where = collection(db, "users", user.uid)
      const data = {
        /*name: name,
        age: age,
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
}*/



export default {
  addPost, getPost, getProfile, uploadFile, getFile
}