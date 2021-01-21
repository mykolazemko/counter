import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCr6HHszOuhM7iyFTlzCsE3be_wb7re7i8",
    authDomain: "testtest-3083b.firebaseapp.com",
    databaseURL: "https://testtest-3083b.firebaseio.com",
    projectId: "testtest-3083b",
    storageBucket: "testtest-3083b.appspot.com",
    messagingSenderId: "84146685591",
    appId: "1:84146685591:web:faeae570c30466c89a0bd2"
  };
  const fire = firebase.initializeApp(config);
  export default fire;