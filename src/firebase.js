import * as firebase from "firebase";
import "firebase/database";

let config = {
    databaseURL: "https://livechat-a6e59-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyATzJvRHFp3GbMsuB6-J9Ukzc9s30Hod9s",
    authDomain: "livechat-a6e59.firebaseapp.com",
    projectId: "livechat-a6e59",
    storageBucket: "livechat-a6e59.appspot.com",
    messagingSenderId: "591019817410",
    appId: "1:591019817410:web:6be6e5fa71bd5c933e7e5b",
    measurementId: "G-GYBSCVBG45",
};


firebase.initializeApp(config);

export default firebase.database();
