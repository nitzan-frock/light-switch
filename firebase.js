import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAISBJqYtIMYII3jRtgiFmB4nHUKkR0Lo",
    authDomain: "light-switch-634fe.firebaseapp.com",
    databaseURL: "https://light-switch-634fe.firebaseio.com",
    projectId: "light-switch-634fe",
    storageBucket: "light-switch-634fe.appspot.com",
    messagingSenderId: "649053599695"
};

const fire = firebase.initializeApp(config);

export default fire;