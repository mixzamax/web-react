import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA7C4xsKLWQyyS35YVoXo72cM8fVzaxsmU",
    authDomain: "todo-d0f85.firebaseapp.com",
    databaseURL: "https://todo-d0f85.firebaseio.com",
    projectId: "todo-d0f85",
    storageBucket: "",
    messagingSenderId: "270427370045",
    appId: "1:270427370045:web:523399d9fe024584787054"
};
firebase.initializeApp(config);

export default firebase;