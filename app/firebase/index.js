import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyCh0rVWnSKP5o4bMpapy08lhjmfNI9ViL4",
      authDomain: "react-todo-app-34e33.firebaseapp.com",
      databaseURL: "https://react-todo-app-34e33.firebaseio.com",
      projectId: "react-todo-app-34e33",
      storageBucket: "react-todo-app-34e33.appspot.com",
      messagingSenderId: "657869530705"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
