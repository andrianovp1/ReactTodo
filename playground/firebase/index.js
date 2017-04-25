import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCh0rVWnSKP5o4bMpapy08lhjmfNI9ViL4",
    authDomain: "react-todo-app-34e33.firebaseapp.com",
    databaseURL: "https://react-todo-app-34e33.firebaseio.com",
    projectId: "react-todo-app-34e33",
    storageBucket: "react-todo-app-34e33.appspot.com",
    messagingSenderId: "657869530705"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

var newNoteRef = notesRef.push({
  text: 'Walk the dog'
});
