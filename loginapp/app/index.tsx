import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, Image, Button, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

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



export default function Welcome() {

  function signIn() {
      signInWithPopup(auth, provider).then(r=> {
        console.log(r.user);
      }).catch (e=> {
        console.warn("error", e);
      })
    }
    return(
        <View style={style.container}>
          <Image source={require('../assets/images/rocktitle.png')}/>
          <p style={style.ptext}>Have an existing account?</p>
          <Link href={'/signin'}>
          <Button title="Login" color="#FF086D"/>
          </Link>
          
          <p style={style.ptext}>New to Rock AR?</p>
          <Link href={'/signup'}>
          <Button title="Sign Up" color="#636AB1" />
          </Link>

          <TouchableOpacity style={style.gbutton} onPress={signIn}>
            <FontAwesome name="google" size={24} color="white" style={style.icon} />
            <Text style={style.text}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
    )
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
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  ptext: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: { 
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  gbutton: {
    flexDirection: 'row',
    backgroundColor: '#636AB1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})