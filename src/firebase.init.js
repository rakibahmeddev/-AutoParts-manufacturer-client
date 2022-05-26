import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAiuBCqXTzKAuKysbzdt7j59g0IxsX2hU",
  authDomain: "autoparts-52e03.firebaseapp.com",
  projectId: "autoparts-52e03",
  storageBucket: "autoparts-52e03.appspot.com",
  messagingSenderId: "1027966056956",
  appId: "1:1027966056956:web:ea15a84d15cfcaae6bda79",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
