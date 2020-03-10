import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDCDr3irUArjtSrl4WnBVzt9qA2aCQd0Hg",
    authDomain: "fear-and-terror-e5b27.firebaseapp.com",
    databaseURL: "https://fear-and-terror-e5b27.firebaseio.com",
    projectId: "fear-and-terror-e5b27",
    storageBucket: "fear-and-terror-e5b27.appspot.com",
    messagingSenderId: "759291661785",
    appId: "1:759291661785:web:40d4a863190ce637c51dc8",
    measurementId: "G-KEPNYH0FH8"
  };
  // Initialize Firebase
  let fire;
  if (!firebase.apps.length) {
    fire = firebase.initializeApp(firebaseConfig);
}

  export default fire;