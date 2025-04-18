import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "expo-router";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebaseConfig from "../../firebase-creds.json";

const firebaseConfig = {
  apiKey: "AIzaSyBggon2o3HVbcZUK1OtbWanV4VAPj0gsbc",
  authDomain: "loginapp-80ea7.firebaseapp.com",
  projectId: "loginapp-80ea7",
  storageBucket: "loginapp-80ea7.firebasestorage.app",
  messagingSenderId: "68604417218",
  appId: "1:68604417218:web:375310964b162f537ad75b",
  measurementId: "G-V1N8NVQ93W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);
const testGangCollection = collection(db, 'test-gang');

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSignIn() {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    console.log("signed in")
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log("signed in got messed up", error.message)
  });
  }

  return (
    <View
      style={style.container}
    >
      <Text style={style.title}>Login In</Text>
      <TextInput 
      style={style.input}
      placeholder="email"
      value={email}
      onChangeText={setEmail}
      />
       <TextInput 
      style={style.input}
      placeholder="password"
      value={password}
      onChangeText={setPassword}
      />
      <Button title="Sign in" onPress={handleSignIn}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#281543",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  title: {
    color: "#fff",
    fontSize: 50,
    marginBottom: 50,
    alignSelf: 'center',
  }
})