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
  var connectedRef = firebase.database().ref(".info/connected");
  sconnectedRef.on("value", function(snap){});
  //const preObject = document.getElementById('object');
  //const dbRefObject = firebase.database().ref().child('object');
  //dbRefObject.on('value', snap => console.log(snap.val()));
}());




function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
        var firebaseRef = new Firebase('https://recipebookdatabase.firebaseio.com');
//saveToFirebase(email);
}
