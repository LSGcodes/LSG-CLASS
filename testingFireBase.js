// Import the Firebase SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCViCfNGDWd2KSB_Nj8biyqv5hZu9iL2xY",
  authDomain: "lsg-classes.firebaseapp.com",
  projectId: "lsg-classes",
  storageBucket: "lsg-classes.appspot.com", // ✅ fixed typo here
  messagingSenderId: "1093995720258",
  appId: "1:1093995720258:web:981bf80c569a8a5ae487db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-up button
const sign = document.getElementById('submit');

sign.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('enteremail').value;
  const password = document.getElementById('thepassword').value;
  const confirmPassword = document.getElementById('confirmpassword').value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully for: " + user.email);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});