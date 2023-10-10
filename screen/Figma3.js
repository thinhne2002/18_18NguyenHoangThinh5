import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button,Pressable } from 'react-native';
import { TextInput, } from 'react-native-web';
import { useState } from 'react';
export default function Figma1() {
  const [check, setCheck] = useState(false)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [pass, setPass] = useState('')
  const generaterPass = (prop1, prop2, prop3, prop4) => {
      var notification = "";
      if (prop1 === true) {
        notification += 'abcdef'
          if (prop2 === true) {
            notification += 'A'
          } if (prop3 === true) {
            notification += '0'
          } if (prop4 === true) {
            notification += '%'
          }
      }
      else {
          console.log('choose 1');
      }
      setPass(notification)
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>PASSWORD GENERATOR</Text>
        <TextInput style={styles.input}></TextInput>
        <View style={styles.text1}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',marginLeft: 10,marginRight: 8.9}}>
                Password length
            </Text>
            <Text style={{width:118,height:33,backgroundColor:'white'}}></Text>
        </View>
        <Pressable onPress={() => setCheck(!check)}>
        <View style={styles.text2}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',marginLeft: 10,marginRight: 16}}>Include lower case letters</Text>
            <Text style={{width: 25, height: 25, backgroundColor: 'white', fontSize: 23, textAlign: 'center' }} >{check ? 'X' : ''}</Text>
        </View>
        </Pressable>
        <Pressable onPress={() => setCheck1(!check1)}>
        <View style={styles.text3}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',marginLeft: 10,marginRight: 51}}>Include upcase letters</Text>
            <Text style={{width: 25, height: 25, backgroundColor: 'white', fontSize: 23, textAlign: 'center' }} >{check1 ? 'X' : ''}</Text>
        </View>
        </Pressable>
        <Pressable onPress={() => setCheck2(!check2)}>
        <View style={styles.text3}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',marginLeft: 10,marginRight: 113}}>Include number</Text>
            <Text style={{width: 25, height: 25, backgroundColor: 'white', fontSize: 23, textAlign: 'center' }} >{check2 ? 'X' : ''}</Text>
        </View>
        </Pressable>
        <Pressable onPress={() => setCheck3(!check3)}>
        <View style={styles.text3}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',marginLeft: 10,marginRight: 43}}>Include special symbol</Text>
            <Text style={{width: 25, height: 25, backgroundColor: 'white', fontSize: 23, textAlign: 'center' }} >{check3 ? 'X' : ''}</Text>
        </View >
        </Pressable>
        <Pressable onPress={() => generaterPass(check, check1, check2, check3)}>
        <View style={styles.button}>
          <Button color='#3B3B98' title='GENERATE PASSWORD' ></Button>
        </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    height: '100%', 
    backgroundColor: '#9370DB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container1:{
    width: 322,
    height: 650,
    backgroundColor:'#23235B', 
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
    borderRadius: 15,
    alignItems:'center'
  },
  text:{
    marginTop: 40,
    width: 181,
    height: 64,
    textAlign:'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'Arial',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  input:{
    marginTop: 33,
    width: 297,
    height: 55,
    backgroundColor: '#151537'
  },
  text1:{
    marginTop:53,
    width: 297,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2:{
    width: 297,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  text3:{
    width: 297,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:5
  },
  button:{
    marginTop:27,
    textAlign:'center',
    paddingTop: 17,
    color: 'white', 
    fontSize: 18, 
    fontFamily: 'Arial', 
    fontWeight: '700', 
    wordWrap: 'break-word',
    width:269,
    height:55,
  }
})


