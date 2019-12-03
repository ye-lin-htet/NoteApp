import Firebase from 'firebase'
let config={
  apiKey: "AIzaSyC1vt4JxxTDbwsvnpjGcmdxA_PyPkJGY3k",
    authDomain: "noteapp-bfa3e.firebaseapp.com",
    databaseURL: "https://noteapp-bfa3e.firebaseio.com",
    projectId: "noteapp-bfa3e",
    storageBucket: "noteapp-bfa3e.appspot.com",
    messagingSenderId: "554005875912",
    appId: "1:554005875912:web:acea55a41c708c6fd569fd",
    measurementId: "G-Z1LGQVJ196"
};
let app = Firebase.initializeApp(config)
export const db=app.database()