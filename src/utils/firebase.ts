import { firebaseConfig } from "./firebaseconfig";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, serverTimestamp, query, orderBy, where, refEqual, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export const addPost = async (post: any) => {
  try{
    const postWithTimestamp = {
      ...post,
      createdAt: serverTimestamp(),
  };
  const where = collection(db, "posts");
  await addDoc(where, postWithTimestamp);
} catch (error) {
  console.error(error)
}
}

export const getPost = async () => {
  const q = query((collection(db, "posts")), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
      const data = doc.data();
      transformed.push({id: doc.id, ...data})
  });

  return transformed;
}

export const getProfile = async (id: string) => {

  const querySnapshot = await getDoc(doc(db, "users", id));

  return querySnapshot.data();
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


const editProfile = async (forms: any, id: string) => {
  try{
    const where = doc(db, "users", id);
    await updateDoc(where, {
      username: forms.username,
    pfp: forms.profilepicture,
    bio: forms.bio,
    pron: forms.pronouns,
    web: forms.website,
    birth: forms.birth
    })
    
} catch (error) {
    console.error(error)
}
}

const getPostProfile = async (id:string) => {
  const q = query((collection(db, "posts")), where("user", "==", id), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);

  const transformed: any = [];

  querySnapshot.forEach((doc: any) => {
      const data = doc.data();
      transformed.push({id: doc.id, ...data})
  });

  return transformed;
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

const getDetailsInfo = async (id:string) => {
  try {
    const where = doc(db, "posts", id);
    const details = await getDoc(where);

    console.log(details.data())
    
    return details.data();
  } catch (error) {
    console.error(error)
  }
}

export default {
  addPost, getPost, getProfile, uploadFile, getFile, editProfile, getPostProfile, logIn, createUser, getDetailsInfo
}