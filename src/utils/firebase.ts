import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage"

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

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

const uploadFile = async (file: File) => {
  const storageRef = ref(storage, file.name);
  const res = await uploadBytes(storageRef, file);
  console.log("subio img", res)

}

const createUser = async (username: string,email: string,password: string, confirmpassword: string) => {
  //Primer paso: Crear usuario con auth
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    console.log(userCredential.user);
    //Segundo paso: Agregar la info restante a la db con el id del usuario
    const where = doc(db, "users", userCredential.user.uid);
    const data = {
      username: username,
      email: email,
    }
    await setDoc(where, data);
    //Tercer paso: Retornar true para dejarlo pasar de pantalla
    return true;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    alert("Vuelve a intentarlo");
    return false;
  }
}

const logIn = async (email: string, password: string) => {
  setPersistence(auth,browserLocalPersistence).then(() =>{
    console.log("uwuwuwu")
    return signInWithEmailAndPassword(auth,email,password);
  }).catch((error)=> {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode,errorMessage);
  })
}

export default {
  addPost, getPost, getProfile, uploadFile, logIn, createUser, 
}