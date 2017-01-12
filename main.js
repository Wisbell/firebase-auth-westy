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
        $('.logout').removeClass('hidden')
    } else {
        // logged out
        $('.login-page').removeClass('hidden')
        $('.main-page').addClass('hidden')
        $('.logout').addClass('hidden')
    }
})


// Event listener - submit listener works with click and enter

// $('form').submit(function(){
//     var email = $('input[type="email]').val()
// })

// Submit button - LOG-IN evenT listener
// was $('form')
$('.login-page-form').submit((event) => {

    event.preventDefault()

    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            // // hide login page
            // $('.login-page').addClass('hidden')
            // //show main-page
            // $('.main-page').removeClass('hidden')
            // $('input[type="email"]').val()
            // var$('input[type="password"]').val()
            $('form')[0].reset()
        })
})


// register button

$('.register').click(() => {
    console.log("Register button clicked")

    var email = $('input[type="email"]').val()
    var password = $('input[type="password"]').val()

    if(firebase.auth().currentUser === null){
        firebase
        .auth()
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

})

// create log out button that logs you out
$('.logout').click(() => {
    console.log("logout button clicked")
    firebase.auth().signOut()
})

// Make register button work

// if any errors in log in or register, pop out an alert
    // remember error is in catch error callback



$('.main-page form').submit((event) => {
    event.preventDefault()

    var task = $('.main-page input[type="text"]').val()
    var uid = firebase.auth().currentUser.uid
    $.post('https://west-jquery-auth.firebaseio.com/' + uid + '.json',
        // the first task is always a string - can use 'task'   instead
        JSON.stringify({task: task})
    ).then(console.log)

})
