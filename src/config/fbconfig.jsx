import firebase from 'firebase';

var config = {
    //TODO add config val
};

firebase.initializeApp(config);

//firestore
export var db = firebase.firestore();
//storage //TODO set storage PATH
export var storage = firebase.app().storage("PATH");


