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

$('')
