import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjr_Bf7zMJrvZecGmhYxi9ACMsycpeQ8A",
  authDomain: "nike-project-81edd.firebaseapp.com",
  projectId: "nike-project-81edd",
  storageBucket: "nike-project-81edd.appspot.com",
  messagingSenderId: "781659766548",
  appId: "1:781659766548:web:62063092d26e544d25cc01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
