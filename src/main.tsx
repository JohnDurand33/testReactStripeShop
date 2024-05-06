import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCqfvrUeodo3iurzV5ssbfc32BFk_-u_Z4",
    authDomain: "react-video-6-stripeshopapi.firebaseapp.com",
    projectId: "react-video-6-stripeshopapi",
    storageBucket: "react-video-6-stripeshopapi.appspot.com",
    messagingSenderId: "226829116506",
    appId: "1:226829116506:web:6b8945176ee316e60e6463"
};

initializeApp(firebaseConfig); // could save this expression to 'app' if you need to use it later

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App /> 
    </React.StrictMode>,
)
