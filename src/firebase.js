import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCITmWjMtosX6cFAfM8OznnA0a8JyPiBHY",
  authDomain: "disneyplus-clone-6f939.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-6f939-default-rtdb.firebaseio.com",
  projectId: "disneyplus-clone-6f939",
  storageBucket: "disneyplus-clone-6f939.appspot.com",
  messagingSenderId: "773251220319",
  appId: "1:773251220319:web:3fccd5a81635094a906cea"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
