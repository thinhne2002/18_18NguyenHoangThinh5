import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

export default function Figma1() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image source={require('/assets/usb.png')} style={{width: 70,height: 70,marginTop: 13,marginLeft:16,marginBottom:22}}></Image>
        <Text style={styles.textusb}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Cực kỳ hài lòng</Text>
        <View style={styles.star}>
          <Image source={require('/assets/star 1.png')} style={{width: 39, height: 39}}/>
          <Image source={require('/assets/star 1.png')} style={{width: 39, height: 39}}/>
          <Image source={require('/assets/star 1.png')} style={{width: 39, height: 39}}/>
          <Image source={require('/assets/star 1.png')} style={{width: 39, height: 39}}/>
          <Image source={require('/assets/star 1.png')} style={{width: 39, height: 39}}/>
        </View>
        <View style={styles.camera}>
          <Image source={require('/assets/camera.png')} style={{width: 39, height: 32, marginLeft: 45, marginRight: 10 }}/>
          <Text style={styles.text2}>Thêm hình ảnh</Text>
        </View>
        <View style={styles.feedback}>
          <Text style={styles.text3}>Hãy chi sẻ những điều mà bạn thích về sản phẩm</Text>
          <Text style={styles.text4}>https://meet.google.com/nsj-ojwi-xpp</Text>
        </View>
        <View style={styles.send}>
          <Text style={{color: 'white', fontSize: 20, fontFamily: 'Arial', fontWeight: '700', wordWrap: 'break-word',}}> Gửi</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', 
    height: '100%', 
  },
  container1:{
    width: '100%',
    height: 105,
    flexDirection: 'row',
  },
  textusb:{
    marginTop: 19,
    marginLeft: 10,
    width: 259,
    height: 21,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  container2:{
    marginTop: 8,
    width: '100%',
    height: 527,
    alignItems: 'center'
  },
  text1:{
    textAlign: 'center',
    marginTop: 31,
    width: 259,
    height: 21,
    color: 'black',
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  star:{
    marginTop: 18,
    width: 293,
    height: 39,
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  camera:{
    marginTop: 30,
    width: 320,
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5, 
    border: '1px #1511EB solid'
  },
  text2:{
    textAlign: 'center', 
    color: 'black', 
    fontSize: 18, 
    fontFamily: 'Arial', 
    fontWeight: '700', 
    wordWrap: 'break-word',
  },
  feedback:{
    marginTop: 15,
    width: 320,
    height: 222,
    borderRadius: 5, 
    border: '1px #C4C4C4 solid',
  },
  text3:{
    marginLeft: 19,
    color: '#C4C4C4', 
    fontSize: 18, 
    fontFamily: 'Arial', 
    fontWeight: '700', 
    wordWrap: 'break-word',
  },
  text4:{
    marginTop: 162,
    marginLeft: 100,
    color: 'black',
    fontSize: 12,
    fontFamily: 'Arial',
    fontWeight: '700',
    wordWrap: 'break-word'
  },
  send:{
    marginTop: 25,
    width: 320,
    height: 41,
    backgroundColor: '#0D5DB6', 
    borderRadius: 5, 
    border: '1px #1511EB solid',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


