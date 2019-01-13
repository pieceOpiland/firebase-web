import firebase from 'firebase';

import 'firebase/firestore';

import config from '../env/config.json';

firebase.initializeApp(config);

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
});

db.collection('elements').get().then(function(docs) {
    docs.forEach(function(doc) {
        console.log(doc.data());
    });
});