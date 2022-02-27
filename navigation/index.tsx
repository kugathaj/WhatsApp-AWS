import { AntDesign, FontAwesome5, MaterialIcons, Ionicons, Fontisto, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { ColorSchemeName, Pressable, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import CameraScreen from '../screens_&_components/screens/CameraScreen';
import StatusScreen from '../screens_&_components/screens/StatusScreen';
import CallsScreen from '../screens_&_components/screens/CallsScreen';
import ChatsScreen from '../screens_&_components/screens/ChatsScreen';

import ChatListItem from '../screens_&_components/components/ChatListItem'
import ChatRoomScreen from '../screens_&_components/components/ChatRoom';
import ContactScreen from '../screens_&_components/screens/ContactsScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { setStatusBarStyle } from 'expo-status-bar';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0c6157",
        },
        headerShadowVisible: false,
        headerTitleAlign: "left",
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        }
      }}>
      <Stack.Screen name="Root" component={BottomTabNavigator}
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 60, marginRight: -10 }}>
              <TouchableOpacity>
                <Octicons name="search" color={"white"} size={22} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name="dots-vertical" color={"white"} size={22} />
              </TouchableOpacity>
            </View>
          )
        }} />

      <Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 100, marginRight: -10 }}>
              <TouchableOpacity>
                <FontAwesome5 name="video" color={"white"} size={22} />
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialIcons name="call" color={"white"} size={22} />
              </TouchableOpacity>

              <TouchableOpacity>
                <MaterialCommunityIcons name="dots-vertical" color={"white"} size={22} />
              </TouchableOpacity>
            </View>
          )
        })}
      />

      <Stack.Screen name="Contacts" component={ContactScreen}
        options={{
          title: "Select Contact",
          headerRight: () => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: 60, marginRight: -10 }}>
              <TouchableOpacity>
                <Octicons name="search" color={"white"} size={22} />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons name="dots-vertical" color={"white"} size={22} />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </Stack.Navigator>
  );
}

//TOP TAB

const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: "white",
        tabBarStyle: { backgroundColor: '#0c6157' },
        tabBarItemStyle: { height: 50 },
        tabBarContentContainerStyle: { marginBottom: -5, marginTop: -5 },
        tabBarIndicatorStyle: { backgroundColor: "white", height: 2 },
        tabBarShowIcon: true
      }}

    >

      <TopTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color, }) => <Fontisto name="camera" color={color} size={20} />,
          tabBarLabel: () => null

        }}
      />

      <TopTab.Screen
        name="Chats"
        component={ChatsScreen}

        options={{
          title: 'CHATS',
          tabBarLabelStyle: { fontWeight: "bold" }
        }}
      />

      <TopTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'STATUS',
          tabBarLabelStyle: { fontWeight: "bold" }
        }}
      />

      <TopTab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          title: 'CALLS',
          tabBarLabelStyle: { fontWeight: "bold" }
        }}
      />



    </TopTab.Navigator>
  );
}

//BOTTOM TAB

// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         tabBarActiveTintColor: "black",
//         headerShown: false,
//       }
//       }>

//       <BottomTab.Screen
//         name="Home"
//         component={HomeScreen}

//         options={{
//           title: 'HOME',
//           tabBarIcon: ({ color, size }) => <AntDesign name="home" color={color} size={30} />
//         }}
//       />

//       <BottomTab.Screen
//         name="MovieDetails"
//         component={MovieDetailsScreen}
//         options={{
//           title: 'MOVIE DETAILS',
//           tabBarIcon: ({ color, size }) => <MaterialIcons name="video-library" color={color} size={30} />
//         }}
//       />



//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
