/* eslint-disable react-hooks/exhaustive-deps */
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useState } from "react";

const useGetLikes = () => {
  const [likes, setLikes] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyBYwzyRZ4Z7fmcPedMp6oPIBIFJZ6c4pT0",
    authDomain: "bandcampify-likes.firebaseapp.com",
    databaseURL: "https://bandcampify-likes-default-rtdb.firebaseio.com",
    projectId: "bandcampify-likes",
    storageBucket: "bandcampify-likes.appspot.com",
    messagingSenderId: "873714437831",
    appId: "1:873714437831:web:8caa0fcc4a356ec46378e2",
    measurementId: "G-RSD74DHELW",
  };

  const getLikes = () => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const query = ref(db, "projects");

    console.log("query", query);

    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log("data", data);

      if (snapshot.exists()) {
        console.log("values", Object.values(data));
        setLikes(Object.values(data));
        console.log("likes", likes);
      }
    });
  };

  return { getLikes };
};

export default useGetLikes;
