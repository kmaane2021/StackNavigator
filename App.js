
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import FifthPage from './pages/FifthPage';
import SixthPage from './pages/SixthPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Main Page', 
            headerRight: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#000066', 
            },
            headerTitleAlign: "center",
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerRight: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#000066', 
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'WebPage', 
          
        }}/>
     
    </Stack.Navigator>
  );
}


function ThirdScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="ThirdPage"
      screenOptions={{
        // headerRight: ()=>
        //   <NavigationDrawerStructure
        //     navigationProps={navigation}
        //   />,
        headerStyle: {
          backgroundColor: '#000066', 
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Description', 
          
        }}/>

     
    </Stack.Navigator>
  );
}



function FourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FourthPage"
      screenOptions={{
        // headerRight: ()=>
        //   <NavigationDrawerStructure
        //     navigationProps={navigation}
        //   />,
        headerStyle: {
          backgroundColor: '#000066', 
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
     
<Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          title: 'ImageBackground N1', 
          
        }}/>


     
    </Stack.Navigator>
  );
}




function FifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FifthPage"
      screenOptions={{
        // headerRight: ()=>
        //   <NavigationDrawerStructure
        //     navigationProps={navigation}
        //   />,
        headerStyle: {
          backgroundColor: '#000066', 
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
     
<Stack.Screen
        name="FifthPage"
        component={FifthPage}
        options={{
          title: 'ImageBackground N2', 
          
        }}/>


     
    </Stack.Navigator>
  );
}




function SixthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SixthPage"
      screenOptions={{
        // headerRight: ()=>
        //   <NavigationDrawerStructure
        //     navigationProps={navigation}
        //   />,
        headerStyle: {
          backgroundColor: '#000066', 
        },
        headerTitleAlign: "center",
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
     
<Stack.Screen
        name="SixthPage"
        component={SixthPage}
        options={{
          title: 'ImageBackground N3', 
          
        }}/>


     
    </Stack.Navigator>
  );
}



function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Main page' }}
          component={firstScreenStack} />

        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'WebPage' }}
          component={secondScreenStack} />
 <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'Description' }}
          component={ThirdScreenStack} />

<Drawer.Screen
          name="FourthPage"
          options={{ drawerLabel: 'ImageBackground N1' }}
          component={FourthScreenStack} />

<Drawer.Screen
          name="FifthPage"
          options={{ drawerLabel: 'ImageBackground N2' }}
          component={FifthScreenStack} />

<Drawer.Screen
          name="SixthPage"
          options={{ drawerLabel: 'ImageBackground N3' }}
          component={SixthScreenStack} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;