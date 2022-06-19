import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClGGVptx4DAMY2EHcIzACbHFHkeY5Kwkg",
  authDomain: "apgar-f18f9.firebaseapp.com",
  projectId: "apgar-f18f9",
  storageBucket: "apgar-f18f9.appspot.com",
  messagingSenderId: "390973047184",
  appId: "1:390973047184:web:661fcc260abb5f55843315",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
