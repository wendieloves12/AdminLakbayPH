const auth = firebase.auth();

function loginUser(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function()
    {
        window.location="AVGdash.html";
    }).catch(function(error) {
        var errorMessage = error.message;
        alert(errorMessage);
    });
}
