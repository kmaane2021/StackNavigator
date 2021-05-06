

import * as React from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ImageBackground
} from 'react-native';

const FourthPage = ({ route, navigation }) => {
    const image = {
        uri:
          "https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg",
      };
      
      
        return (
       
        <SafeAreaView style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
          <Button color="black" title="Go to Screen N1 : Webpage" onPress={() => navigation.navigate("SecondPage")} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         
          <Button color="black" title="Go to Screen N4 : ImageBackground 2" onPress={() => navigation.navigate("FifthPage")} />
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Button color="black" title="Go to Main Page" onPress={() => navigation.navigate("FirstPage")} />
      </View>
      </ImageBackground>
          </SafeAreaView>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
         //paddingTop: StatusBar.currentHeight,
      
       
        },
        scrollView: {
          backgroundColor: 'pink',
          marginHorizontal: 20,
        },
        text: {
          fontSize: 42,
        },
        text5: {
          fontSize: 12,
          color: "white",
          marginLeft: 10,
        },
        text6: {
          fontSize: 12,
          color: "white",
          marginRight: 10,
        },
        container2: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        row: {
      flex: 1,
      margin: 3,
      
        },
        row1: {
          flex: 1,
          margin: 3,
          marginTop:7,
          
            },
            image: {
              
              height: "100%",
              width: "100%"
              
                       
            },
      });
export default FourthPage;