const firebaseConfig = {
    apiKey: "AIzaSyABOo37a53WpF8jRRgCsr5Bsh2lOVhICbk",
    authDomain: "kwitter-6ac43.firebaseapp.com",
    databaseURL: "https://kwitter-6ac43-default-rtdb.firebaseio.com",
    projectId: "kwitter-6ac43",
    storageBucket: "kwitter-6ac43.appspot.com",
    messagingSenderId: "97581094312",
    appId: "1:97581094312:web:fc9e9a6cf44bc2339ff99d",
    measurementId: "G-J8QFXZ3MM3"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }