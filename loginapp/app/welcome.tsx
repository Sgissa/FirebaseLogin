import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";


export default function Welcome() {
    return(
        <View style={style.container}>
          <Image source={require('../assets/images/rocktitle.png')}/>
          <p>Have an existing account?</p>
          <Button title="Login" />
          <p>New to Rock AR?</p>
          <Button title="Sign Up" />
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
  }
})