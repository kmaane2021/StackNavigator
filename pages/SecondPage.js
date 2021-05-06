// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  Button,
  View,
  ScrollView,
  Linking,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image
} from 'react-native';

const SecondPage = ({ navigation }) => {
  const image1 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg",
  };
  const image2 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg",
  };
  const image3 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg",
  };

  return (


    <SafeAreaView>
      <ScrollView>
        <View style={styles.buttons} >
        
         <View style={styles.butt1}><Button   title="Description" onPress={() => navigation.navigate("ThirdPage")} /></View> 
         <View style={styles.butt2}><Button  title="ImageBackground N1" onPress={() => navigation.navigate("FourthPage")} /></View> 
        </View>

        <View>

        <View style={styles.container2}>
        <View style={styles.title}><Text style={styles.titleText}>Landscape<Text style={styles.span}>Title</Text></Text></View>
        <ScrollView style={styles.links} horizontal={true} showsHorizontalScrollIndicator={false}>
       

          <View style={styles.navButton}>
            <Text style={styles.navBtnTxt }>Home</Text>
          </View>

          <View style={styles.navButton} >
            <Text style={styles.navBtnTxt }>About</Text>
          </View>

          <View style={styles.navButton} onPress={() => Linking.openURL('')}>
            <Text style={styles.navBtnTxt }>Products</Text>
          </View>


          <View style={styles.navButton} onPress={() => Linking.openURL('')}>
            <Text style={styles.navBtnTxt }>Services</Text>
          </View>

          <View style={styles.navButton} onPress={() => Linking.openURL('')}>
            <Text style={styles.navBtnTxt }>Portfolio</Text>
          </View>


          <View style={styles.navButton} onPress={() => Linking.openURL('')}>
            <Text style={styles.navBtnTxt }>Contact</Text>
          </View>

        </ScrollView>

        </View>
        </View>
        <View>

          <Image style={styles.image1} source={image1} />
          <Text style={styles.h}>Template Information</Text>
          <Text style={styles.p}><Text>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text></Text>

        </View>

        <View>

          <Image style={styles.image2} source={image2} />
          <Text style={styles.h}>Template Information</Text>
          <Text style={styles.p}><Text>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text></Text>

        </View>

        <View>

          <Image style={styles.image3} source={image3} />
          <Text style={styles.h}>Template Information</Text>
          <Text style={styles.p}><Text>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text></Text>

        </View>

        <View>

          <Image style={styles.image1} source={image1} />
          <Text style={styles.h}>Template Information</Text>
          <Text style={styles.p}><Text>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text></Text>

        </View>

        <View>

          <Image style={styles.image2} source={image2} />
          <Text style={styles.h}>Template Information</Text>
          <Text style={styles.p}><Text>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text></Text>

        </View>

        <View>

          <Image style={styles.image3} source={image3} />
          <Text style={styles.h}>Template Information</Text>
          <Text style={styles.p}><Text>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text></Text>

        </View>

        <View>

          <Text style={styles.footer} onPress={() => Linking.openURL('http://www.bryantsmith.com')}>web development by bryant smith</Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "blue"
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20
  },
  container2:{
flexDirection:'row',
flex:1,

  },

  links:{

    marginLeft:50,
    flex:0.5

  },
  title:{
flex:.5
  },

  titleText:{
fontSize:22,
color:'#1652B4',
  },

  span:{
color:'#0A2645'
  },
  text: {
    fontSize: 42,
  },
  text2: {
    color: "white",
  },
  image1: {
    width: '100%',
    height: 200
  },
  image2: {
    width: '100%',
    height: 200
  },
  image3: {
    width: '100%',
    height: 200
  },
  p: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 25,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 15


  },
  h: {
    marginBottom: 10,
    fontSize: 20,
    color: '#123F83',
    marginLeft: 15,
    marginTop: 10
  },
  footer: {
    color: 'black',
    marginTop: 15,
    fontSize: 10,
    textAlign: 'center'
  },
  navBtnTxt: {
    
    color: '#1652B4',
    fontWeight: 'bold',
    lineHeight: 30,
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    textDecorationColor: '#000000',
    paddingLeft: 15
    
    },

    title:{

      fontSize:20,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:10

    },
    navBtnTxt2: {
    color: '#fff3e6',
    fontWeight: 'bold',
    lineHeight: 40,
    fontSize: 20,
    textDecorationLine: 'underline',
    textDecorationColor: '#000000',
    paddingLeft: 35
    },
    
    navButton: {
    flex: 1,
    alignItems: "center",
    paddingTop:10,
    paddingBottom:10
    },
    buttons:{
      flexDirection:'row',
      flex:1,
      borderBottomWidth:2,
      borderStyle:'solid',
      borderBottomColor:'#0000cc'
    },

    butt1:{
     flex:.5,
     fontWeight:'bold',
     borderColor:'#000066',
     borderWidth:2,
     padding:2

    },
    butt2:{
      flex:.5,
      fontWeight:'bold',
      borderColor:'#000066',
      borderWidth:2,
      padding:2
    
    
     }
});


export default SecondPage;