import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCjMvL9TMW9AwwmxsVpF3E6agzLailpCUk",
  authDomain: "reactapp-e02fe.firebaseapp.com",
  databaseURL: "https://reactapp-e02fe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactapp-e02fe",
  storageBucket: "reactapp-e02fe.appspot.com",
  messagingSenderId: "203177212898",
  appId: "1:203177212898:web:145675b89848c7bd2c17bb",
  measurementId: "G-49CT9D3DZF"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }