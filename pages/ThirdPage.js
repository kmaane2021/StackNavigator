

import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  SafeAreaView
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
   
  <View style={{ flex: .1, justifyContent: 'center', alignItems: 'center' }}>
  <Button color="black" title="Go to SCREEN n3 : ImageBackground 1" onPress={() => navigation.navigate("FourthPage")} />
</View>
<View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center' }}>
  <ScrollView>
    <View>
<Text style={styles.p} >Main.js it is the main screen where contains all 5 screens</Text>

<Text style={styles.p} > Screen N1 is the WebPage screen where contains the webpage provided</Text>
<Text style={styles.p} > Screen N2 is the Description screen </Text>
<Text style={styles.p} > Screen N3 is ImageBackground1 using the image1"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg" provided in the webpage </Text>
<Text style={styles.p} > Screen N4 is ImageBackground1 using the image2"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg" provided in the webpage </Text>
<Text style={styles.p} > Screen N5 is ImageBackground1 using the image3"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg" provided in the webpage </Text>
</View>
</ScrollView>
</View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#e6e6ff"
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: "white",
  },
  p: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 25,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 15


  },
});

export default ThirdPage;