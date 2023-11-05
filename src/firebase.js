import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBAqFJ86rtEunGoiy-NZKugTYHNX77oNbE",
  authDomain: "tutorial-72236.firebaseapp.com",
  databaseURL: "https://tutorial-72236-default-rtdb.firebaseio.com",
  projectId: "tutorial-72236",
  storageBucket: "tutorial-72236.appspot.com",
  messagingSenderId: "794370293914",
  appId: "1:794370293914:web:b65acc1b82a5f645ec1f23",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const database = getDatabase(firebase);

if (!globalThis.EMULATION && import.meta.env.MODE === "development") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  signInWithCredential(
    auth,
    GoogleAuthProvider.credential(
      '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
    )
  );

  // set flag to avoid connecting twice, e.g., because of an editor hot-reload
  globalThis.EMULATION = true;
}
