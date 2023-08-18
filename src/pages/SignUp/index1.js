/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import {SIZES} from '@/constants';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';

const SignUp2 = ({navigation, placeholder, keyboardType, Alert}) => {
  const [supported, setSupported] = useState(null);
  const [nome, setNome] = useState('hello');

  const [number, setNumber] = React.useState({number: ''});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const onChangedNumber = value => {
    setNumber(value);
  };

  useEffect(() => {
      const getCredentials = async () => {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setNumber(credentials.username);
          // setPassword(credentials.password);
        }
      }
      getCredentials();
  }, []);
  const handleLogin = async () => {
      if (number.length !== 10 || isNaN(number) || password === '') {
        setErrorMessage('Số điện thoại không được để trống hoặc không chính xác');
      } else {
        try {
          await Keychain.setGenericPassword(number, 'password');
          navigation.navigate('Home');
          // Perform login
        } catch (error) {
          console.log("Keychain couldn't be accessed!", error);
        }
      }
  };
  const handleTouchIdLogin = async () => {
    const configs = {
      title: 'Đăng nhập',
      color: 'red',
      sensorErrorDescription: 'vân tay không đúng',
    };
    if (number.length !== 10 || isNaN(number) && password === 'password') {
      setErrorMessage('Số điện thoại không được để trống hoặc không chính xác');
    } else {
      try {
        await Keychain.setGenericPassword(number, 'password');
        TouchID.authenticate('',configs)
        .then(() => {
          console.log('xin chao ', {number});
          navigation.navigate('Home');
        })
        .catch(() => {
          console.log('xác thực đã thất bại!');
        });
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    }
  }
  function Header() {
    return (
      <View>
        <View style={styles.viewhear}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('@/assets/icons/x-mark.png')}
              style={styles.buttonback}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textheader}>Chào mừng bạn đến với</Text>
            <Image
              source={require('@/assets/images/logoicon.png')}
              style={styles.imageheader}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  }
  function Buttons() {
    return (
      <View style={styles.viewall}>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <View style={styles.viewbutton}>
          <Image
            source={require('@/assets/icons/vietnam.png')}
            style={{
              marginTop: SIZES.padding * 1.5,
              height: 25,
              width: 25,
              marginLeft: 10,
            }}
          />
          <Text style={styles.textbutton}>+84</Text>
          <TextInput
            value={number}
            style={styles.textinput}
            placeholder="Số điện thoại"
            keyboardType="numeric"
            autoCompleteType="munber"
            maxLength={10}
            onChangeText={onChangedNumber}
            onChanged={number => this.setState({number})}
          />
           <Text>{}</Text>
        </View>
       <View style={styles.viewbutton}>
       <TextInput
            style={styles.textinput}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
       </View>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.TouchaLogin} onPress={handleLogin}>
            <Text style={styles.textlogin}> Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.TouchID} onPress={handleTouchIdLogin}>
            <View>
            <Image
                source={require('@/assets/icons/fingerprint.png')}
                style={styles.TouchID}
              />  
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function Center() {
    return (
      <View style={styles.viewcenter}>
        <Text style={styles.textcenter}>Hoặc</Text>
      </View>
    );
  }
  function Footer() {
    return (
      <View style={styles.viewall2}>
        <View style={styles.viewall}>
          <TouchableOpacity style={styles.touchface}>
            <View style={styles.viewall2}>
              <Image
                source={require('@/assets/icons/facebook.png')}
                style={styles.imageicon}
              />
              <Text style={styles.textface}>Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewall}>
          <TouchableOpacity style={styles.touchgoogle}>
            <View style={styles.viewall2}>
              <Image
                source={require('@/assets/icons/google.png')}
                style={styles.imageicon}
              />
              <Text style={styles.textgoogle}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {Header()}
      {Buttons()}
      {Center()}
      {Footer()}
    </SafeAreaView>
  );
};

export default SignUp2;
