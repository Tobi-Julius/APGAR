import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyClGGVptx4DAMY2EHcIzACbHFHkeY5Kwkg",
  // authDomain: "apgar-f18f9.firebaseapp.com",
  // projectId: "apgar-f18f9",
  // storageBucket: "apgar-f18f9.appspot.com",
  // messagingSenderId: "390973047184",
  // appId: "1:390973047184:web:661fcc260abb5f55843315",

  apiKey: "AIzaSyARddggsczeSJzF9aP1PHoUjMVTBDke3X0",
  authDomain: "apgar2-4a5e1.firebaseapp.com",
  projectId: "apgar2-4a5e1",
  storageBucket: "apgar2-4a5e1.appspot.com",
  messagingSenderId: "460782706304",
  appId: "1:460782706304:web:a8a53217143a1c5d5a1065",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
