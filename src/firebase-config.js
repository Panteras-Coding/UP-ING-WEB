import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDF9S_uBGbMVMa6sPAB9H5ZUN85UU9Z9sg",
    authDomain: "novedades-11532.firebaseapp.com",
    projectId: "novedades-11532",
    storageBucket: "novedades-11532.appspot.com",
    messagingSenderId: "958910423123",
    appId: "1:958910423123:web:8eda1ad09700e90a3626a6"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)