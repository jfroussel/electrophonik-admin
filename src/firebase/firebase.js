import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyCvdYTgdU-6DhV10i7eW7xS68IU2f3ioFo",
        authDomain: "myapp-a124d.firebaseapp.com",
        databaseURL: "https://myapp-a124d.firebaseio.com",
        projectId: "myapp-a124d",
        storageBucket: "myapp-a124d.appspot.com",
        messagingSenderId: "191396994975" 
}

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };