import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0vAvw7fG5kb7Kj62ufiEb7os-ouZaKJk",
  authDomain: "chessers-3d7ba.firebaseapp.com",
  projectId: "chessers-3d7ba",
  storageBucket: "chessers-3d7ba.appspot.com",
  messagingSenderId: "178256934715",
  appId: "1:178256934715:web:0183a1dd4a0b12e908e91e",
  measurementId: "G-K2BVHBHS7V"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
