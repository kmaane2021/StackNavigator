// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar
} from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button color="#002db3"  title="Screen N1 : Webpage" onPress={() => navigation.navigate("SecondPage")} />
      </View>
      <View style={styles.button}>

        <Button color="#002db3" title="Screen N2 : Description"  onPress={() => navigation.navigate("ThirdPage")} />
      </View>
      <View style={styles.button}>

        <Button color="#002db3" title="Screen N3 : ImageBackground 1" onPress={() => navigation.navigate("FourthPage")} />
      </View>
      <View style={styles.button}>

        <Button color="#002db3" title="Screen N4 : ImageBackground 2" onPress={() => navigation.navigate("FifthPage")} />
      </View>

      <View style={styles.button}>

        <Button color="#002db3" title="Screen N4 : ImageBackground 3" onPress={() => navigation.navigate("SixthPage")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#e6e6ff'
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
    marginTop: 7,

  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:5,
    // borderColor:'black',
    // borderBottomLeftRadius:50,
    // borderBottomRightRadius:50,
    // borderTopLeftRadius:50,
    // borderTopRightRadius:50,

  },

  butt:{
  fontWeight:'bold',
     borderColor:'#000066',
     borderWidth:2,
     padding:2
    }

});


export default FirstPage;