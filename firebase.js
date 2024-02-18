// firebaseFunctions.js

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx-O9aLTu0cjOArqnmWU7bx-LRKdoeJls",
  authDomain: "aqsa-a12ed.firebaseapp.com",
  projectId: "aqsa-a12ed",
  storageBucket: "aqsa-a12ed.appspot.com",
  messagingSenderId: "345392273813",
  appId: "1:345392273813:web:7102bbb54e319f322f7e9c",
  measurementId: "G-C5ESY68QD7"
};
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  var auth = firebase.auth();
  
  function signup() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Signed up 
        var user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error);
      });
  }
  
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });