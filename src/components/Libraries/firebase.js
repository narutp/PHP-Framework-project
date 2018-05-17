import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyA0gug47BwS-YZlxwqog8wLhJ1H2R9ULPQ",
  authDomain: "web-dev-project-ske.firebaseapp.com",
  databaseURL: "https://web-dev-project-ske.firebaseio.com",
  projectId: "web-dev-project-ske",
  storageBucket: "web-dev-project-ske.appspot.com",
  messagingSenderId: "373934757646"
};
firebase.initializeApp(config);

const firebaseInstance = firebase
export default firebaseInstance