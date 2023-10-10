import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TextInput, View , Image, Alert} from 'react-native';
import { useState } from 'react';
export default function Figma1() {
    const datas = [
        { username: 'Thinh', password: '12345' },
        { username: 'Hung', password: '54321' },
        { username: 'Binh', password: '02468' },
    ]
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const checkValue = (data, user, pass) => {
        const check = data.some((item, index) => {
            if (item.username === user && item.password === pass) {
                return true;
            }
        })
        if(check === true){
            Alert.alert('True');
        }else{
            Alert.alert('False');
        }
    }
  return (
    <View style={{width: '100%', height: '100%', background: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)'}}>
        <View>
            <text style={styles.textlogin}>LOGIN</text>
        </View>
        <View style={styles.name}>
            <View style={styles.Image1}>
                <Image source={require('/assets/avatar_user 1.png')} style={{width: 32, height: 32}}/>
            </View>
            <TextInput value={user} onChangeText={setUser} placeholder='Name' style={styles.inputname}></TextInput>
        </View>
        <View style={styles.password}>
            <View style={styles.Image1}>
                <Image source={require('/assets/lock-152879 1.png')} style={{width: 32, height: 32}}/>
            </View>
            <TextInput value={password} onChangeText={setPassword} placeholder='Password' style={styles.inputpassword}></TextInput>
            <View style={styles.Image}>
                <Image source={require('/assets/eye 1.png')} style={{width: 30, height: 30}}/>
            </View>
        </View>
        <View style={{width: 360,height: 45,justifyContent: 'center',marginTop:30, marginLeft: 15}}>
            <Button onPress={() => checkValue(datas, user, password)} style={styles.buttonn} title='LOGIN' color="black"></Button>
        </View>
        <View>
            <text style={styles.text3}>CREATE ACCOUNT</text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    textlogin: {
        width: 95,
        height: 35,
        paddingTop: 82,
        paddingLeft: 30,
        paddingBottom: 75,
        color: 'black',
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word',
    },
    name:{
        marginLeft: 15,
        width: 360,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px #F2F2F2 solid'
    },
    password:{
        marginBottom: 59,
        marginTop: 20,
        marginLeft: 15,
        width: 360,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px #F2F2F2 solid'
    },
    inputpassword: {
        paddingLeft: 15,
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        width: 310,
        height: 54,
        fontSize: 20,
    },
    inputname:{
        paddingLeft: 15,
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        width: 350,
        height: 50,
        fontSize: 20,
    },
    buttonn:{
        color: 'white',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    },
    text3:{
        paddingTop: 45,
        textAlign: 'center', 
        color: 'black', 
        fontSize: 20, 
        fontFamily: 'Arial', 
        fontWeight: '700', 
        wordWrap: 'break-word',
        paddingBottom: 44
    },
    Image: {
        paddingRight: 40,
        width: 40, 
        height: 50, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'rgba(196, 196, 196, 0.30)',
    },
    Image1: {
        paddingLeft: 10,
        width: 40, 
        height: 50, 
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:'rgba(196, 196, 196, 0.30)',
    },
})