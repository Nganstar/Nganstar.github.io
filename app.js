(function(){
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDOCa5Of1-1g8fYG5sT4MP6OycL96_ZBJE",
    authDomain: "recipebookdatabase.firebaseapp.com",
    databaseURL: "https://recipebookdatabase.firebaseio.com",
    projectId: "recipebookdatabase",
    storageBucket: "recipebookdatabase.appspot.com",
    messagingSenderId: "291820315274"
  };
  firebase.initializeApp(config);
  const preObject = document.getElementbyId('object');
  const dbRefObject = firebase.database().ref().child('object');
  dbRefObject.on('value', snap => console.log(snap.val()));
}());
