console.log("main.js loaded")

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdCAT8nHMkNgytFW2wfOR5uWjCuiOFJR0",
    authDomain: "west-jquery-auth.firebaseapp.com",
    databaseURL: "https://west-jquery-auth.firebaseio.com",
    storageBucket: "west-jquery-auth.appspot.com",
    messagingSenderId: "470197311277"
  };
  firebase.initializeApp(config);




// Check Auth state event listener
firebase.auth().onAuthStateChanged(() => {
    if (firebase.auth().currentUser !== null) {

        var email = firebase.auth().currentUser.email
        // logged in
        $('.login-page').addClass('hidden')
        $('.main-page').removeClass('hidden')
        $('.main-page h1').text(`Welcome ${email}`)
    } else {
        // logged out
        $('.login-page').removeClass('hidden')
        $('.main-page').addClass('hidden')
    }
})


// Event listener - submit listener works with click and enter

// $('form').submit(function(){
//     var email = $('input[type="email]').val()
// })

// Submit button - LOG-IN evenT listener
$('form').submit((event) => {

    event.preventDefault()

    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            // set to h1
            $('.main-page h1').text(`Welcome ${email}`)
            // hide login page
            $('.login-page').addClass('hidden')
            //show main-page
            $('.main-page').removeClass('hidden')
        })
})


// register button

$('button .register').click(() => {
    console.log("Register button clicked")

    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()

    if(firebase.auth().currentUser === null){
        firebase
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            // set to h1
            $('.main-page h1').text(`Welcome ${email}`)
            // hide login page
            $('.login-page').addClass('hidden')
            //show main-page
            $('.main-page').removeClass('hidden')
        })
    }
    else {
        console.log("Please log out before creating a new user")
    }

})
