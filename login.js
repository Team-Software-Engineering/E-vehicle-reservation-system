const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKfHTA2iulOO2F6scwExlEnYhwHHGSeK4",
  authDomain: "cab-book-f9ef0.firebaseapp.com",
  databaseURL: "https://cab-book-f9ef0-default-rtdb.firebaseio.com",
  projectId: "cab-book-f9ef0",
  storageBucket: "cab-book-f9ef0.appspot.com",
  messagingSenderId: "786372737775",
  appId: "1:786372737775:web:4179a526ae4e960419f91a"
 });

const database = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('remail').value;
    const password = document.getElementById('rpwd').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        if(error) alert(error.message);
    });
}

const login = () => {
    const email = document.getElementById('lemail').value;
    const password = document.getElementById('lpwd').value;

    auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
        console.log(response);
        window.location.href = 'landing.html';
    })
    .catch((error) => {
        if(error) alert(error.message);
    });
}
