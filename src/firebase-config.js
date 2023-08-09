import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuFPVn8g57C_bpRlUxw4JygIrRUAwyUN4",
  authDomain: "asp-mvc-with-andriod-fb45d.firebaseapp.com",
  projectId: "asp-mvc-with-andriod-fb45d",
  storageBucket: "asp-mvc-with-andriod-fb45d.appspot.com",
  messagingSenderId: "390502844957",
  appId: "1:390502844957:web:96b1f1eb838b7c7bced4f4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);