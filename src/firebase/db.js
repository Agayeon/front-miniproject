import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyAFMoJ-ZJWuYJeucJfA6Fr66InDmrmxNAs",
    authDomain: "my-todo1-9e369.firebaseapp.com",
    projectId: "my-todo1-9e369",
    storageBucket: "my-todo1-9e369.appspot.com",
    messagingSenderId: "160675350942",
    appId: "1:160675350942:web:b2e9fff90c6f852dde2e8f"
  };

  export const db = firebase.initializeApp(firebaseConfig).firestore();