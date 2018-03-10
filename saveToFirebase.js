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
        var firebaseRef = new Firebase('http://INSTANCE.firebaseio.com');
firebaseRef.child('.info/connected').on('value', function(connectedSnap) {
  if (connectedSnap.val() === true) {
    document.writeln("hello");
  } else {
    /* we're disconnected! */
  }
});
}

saveToFirebase(email);
