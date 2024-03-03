
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLwT86IJk8zX6WNH07NXA1Iub8DXUuZlw",
  authDomain: "food-order-1dc2b.firebaseapp.com",
  projectId: "food-order-1dc2b",
  storageBucket: "food-order-1dc2b.appspot.com",
  messagingSenderId: "956287741964",
  appId: "1:956287741964:web:66fd245a2c621eb9b47e29"
};

const app = initializeApp(firebaseConfig);
 const auth =  getAuth(app);
 export default auth;
