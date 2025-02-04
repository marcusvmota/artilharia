const firebaseConfig = {
  apiKey: "AIzaSyCQlqONtgIoqK8q35vU5ch4yWR2QsCPOj4",
  authDomain: "segundao-fc9f0.firebaseapp.com",
  databaseURL: "https://segundao-fc9f0-default-rtdb.firebaseio.com",
  projectId: "segundao-fc9f0",
  storageBucket: "segundao-fc9f0.firebasestorage.app",
  messagingSenderId: "857976654829",
  appId: "1:857976654829:web:b2786e802d9dc4007875e4"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

const ADMIN_EMAIL = "admin@segundao.com";
const AUTHORIZED_EMAILS = [
  "admin@segundao.com",
  "usuario1@email.com",
  "usuario2@email.com"
];

let currentUser = null;
let isAdmin = false;
let games = {};
