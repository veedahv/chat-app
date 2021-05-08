import firebase from 'firebase/app';
//   import firestore from 'firebase/firestore';
  
  // Initialize Firebase
//   var config = {
//     apiKey: "...",
//     authDomain: "...",
//     databaseURL: "...",
//     projectId: "...",
//     storageBucket: "...",
//     messagingSenderId: "..."
//   };
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDVPFIh-kjoluKZHHSrO7B5jFiHlG1-4rk",
    authDomain: "chat-app-6d601.firebaseapp.com",
    databaseURL: "https://chat-app-6d601-default-rtdb.firebaseio.com",
    projectId: "chat-app-6d601",
    storageBucket: "chat-app-6d601.appspot.com",
    messagingSenderId: "452035853591",
    appId: "1:452035853591:web:14122ba966bafd5f0a4b52",
    measurementId: "G-NSJ176VCK5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//   const firebaseApp = firebase.initializeApp(config);
//   firebaseApp.firestore().settings({ timestampsInSnapshots: true });
//   export default firebaseApp.firestore();


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDVPFIh-kjoluKZHHSrO7B5jFiHlG1-4rk",
//     authDomain: "chat-app-6d601.firebaseapp.com",
//     databaseURL: "https://chat-app-6d601-default-rtdb.firebaseio.com",
//     projectId: "chat-app-6d601",
//     storageBucket: "chat-app-6d601.appspot.com",
//     messagingSenderId: "452035853591",
//     appId: "1:452035853591:web:14122ba966bafd5f0a4b52",
//     measurementId: "G-NSJ176VCK5"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
