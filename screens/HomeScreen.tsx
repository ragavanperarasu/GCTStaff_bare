import React from 'react';
import {View, StatusBar, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, Avatar} from 'react-native-paper';
import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation();

  const cache = new Cache({
    namespace: 'myapp',
    policy: {
      maxEntries: 50000,
      stdTTL: 0,
    },
    backend: AsyncStorage,
  });

  function handleClick() {
    const store = async () => {
      console.log('button clik');
      //await cache.remove("name");
      const name = await cache.get('name');

      if (name === undefined) {
        navigation.navigate('StaffLogin');
      } else {
        navigation.navigate('StaffHome');
      }
    };
    store();
  }

  return (
    <View style={styles.maincontainer}>
      <StatusBar
        hidden={false}
        backgroundColor="black"
        animated={false}
        barStyle={'default'}
        showHideTransition={'fade'}
      />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/GCT.png')}
          style={styles.image}
        />
      </View>

      <View style={{flex: 4, justifyContent: 'top', alignItems: 'center'}}>
        <Avatar.Icon
          size={170}
          icon="account"
          style={{backgroundColor: 'black'}}
        />

        <Text style={{fontSize: 20, marginBottom: 10}}>Select User</Text>

        <Button
          mode="contained"
          onPress={handleClick}
          style={styles.but}
          labelStyle={styles.butlab}>
          B.E. Lecturer
        </Button>

        <Button
          mode="contained"
          onPress={handleClick}
          style={styles.but}
          labelStyle={styles.butlab}>
          M.E. Lecturer
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'black',
    height: '100%',
  },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '300',
    height: '300',
    resizeMode: 'contain',
  },
  but: {
    backgroundColor: '#007FFF',
    borderRadius: 5,
    margin: 10,
    width: '60%',
  },
  butlab: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
});
