import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCU79wv807x2zrRTYQhD0s5OFZ86FnZzB4",
  authDomain: "devlinks-dc8c2.firebaseapp.com",
  projectId: "devlinks-dc8c2",
  storageBucket: "devlinks-dc8c2.appspot.com",
  messagingSenderId: "824899668873",
  appId: "1:824899668873:web:4eff73bc7fb3da2de4ef58",
  measurementId: "G-6V2H0Z3W9T"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export{db,auth};