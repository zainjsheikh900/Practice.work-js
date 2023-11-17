// Import the functions you need from the SDKs you need
import {
    initializeApp,

} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

import {
  getFirestore, getDocs, doc,
  collection, addDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwd8-VkNSEJpBVVO5E3594x1jqiqEPcDA",
  authDomain: "blog-app-ead54.firebaseapp.com",
  projectId: "blog-app-ead54",
  storageBucket: "blog-app-ead54.appspot.com",
  messagingSenderId: "127655680320",
  appId: "1:127655680320:web:ad343a803d9c375f23c2a5",
  measurementId: "G-7ZK1C708HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const todosCollectionRef = collection(db, 'todos')


const logInForm = document.getElementById('LoginBtn')
const SignUpForm = document.getElementById('SignUpBtn')


SignUpForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('e+++' ,     e.target[0].value,
    )
    console.log(e.target.value)
    const auth = getAuth();
    const userInfo = {
      fullname: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value
    }
  createUserWithEmailAndPassword(auth, userInfo.email , userInfo.password)
    .then((userCredential) => {
      // Signed up 
      window.location.href = 'register.html'
      const user = userCredential.user;
      console.log('user->', user)
        })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      
      console.log(e);
    })

logInForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e.target[0].value)
    const userInfo = {
      email: e.target[0].value,
      password: e.target[1].value
    }
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        window.location.href = 'login.html'
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
})
    
    console.log(app);
    console.log(auth);
