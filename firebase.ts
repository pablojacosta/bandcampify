/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FB_APIKEY,
  FB_APP_ID,
  FB_AUTH_DOMAIN,
  FB_DB_URL,
  FB_MEASUREMENT_ID,
  FB_MESSAGING_SENDER_ID,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
} from "@constants/env";
import firebase from "firebase/app";

const config = {
  apiKey: FB_APIKEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DB_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID,
};

let instance: any = null;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(config);
    return instance;
  }

  return null;
}
