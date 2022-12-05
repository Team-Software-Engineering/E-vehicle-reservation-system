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

  const confirm = () => {
    const A = document.getElementById('mapbox-directions-origin-input').getElementsByClassName('mapboxgl-ctrl-geocoder')[0].getElementsByTagName('input')[0].value;
    const D = document.getElementById('mapbox-directions-destination-input').getElementsByClassName('mapboxgl-ctrl-geocoder')[0].getElementsByTagName('input')[0].value;

    console.log(A, B);

    database.collection("userData").add({
        A: A,
        D: D
    }).then((response)=>{
        console.log(response.id);
    }).catch((e)=>{
        alert(e.message);
    });
  }
