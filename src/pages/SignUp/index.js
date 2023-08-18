/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {onChange} from 'react-native-reanimated';
import {icons, COLORS, SIZES, FONTS, images} from '@/constants';

const SignUp = ({
  isPassword: Boolean,
  inputStyle,
  placeholder,
  prependComponent,
  secureTextEntry,
  autoCapitalize = 'none',
  errorMsg = '',
  value,
  navigation,
}) => {
  const [Email, setEmil] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [saveMe, setSetMe] = React.useState(false);
  function mainHeader() {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: SIZES.padding,
          backgroundColor: COLORS.white,
        }}>
        {/*App Icon */}
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.h4,
              color: COLORS.black,
            }}>
            Chào mừng bạn đến với
          </Text>
          <Image
            source={require('@/assets/images/The-Coffee-House-Logo.png')}
            resizeMode="contain"
            style={{
              height: 200,
              width: 300,
            }}
          />
        </View>
        {/* Content  */}
        <View
          style={{
            marginLeft: SIZES.padding,
            marginRight: SIZES.padding,
          }}>
          {/*input Email */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.black, ...FONTS.body4}}>
                Email & Số điện thoại
              </Text>
              <Text style={{color: COLORS.red, ...FONTS.body4}}>
                {errorMsg}
              </Text>
            </View>
            {/*Input */}
            <View
              style={{
                flexDirection: 'row',
                height: 55,
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.base,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}>
              {prependComponent}
              <Image
                source={require('@/assets/icons/vietnam.png')}
                style={{
                  marginTop: SIZES.padding * 1.5,
                  height: 25,
                  width: 25,
                }}
              />
              <Text
                style={{
                  marginTop: SIZES.padding * 2,
                  height: 25,
                  width: 25,
                  color: COLORS.black,
                }}>
                +84
              </Text>
              <TextInput
                style={{flex: 1, ...inputStyle}}
                placeholder="Nhập Email & Số điện thoại"
                secureTextEntry={secureTextEntry}
                keyboardType="email-address"
                autoCapitalize={autoCapitalize}
                autoCompleteType="email"
              />
            </View>
          </View>
          {/*Input pass */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: COLORS.black, ...FONTS.body4}}>
                Password
              </Text>
            </View>
            {/*Input */}
            <View
              style={{
                flexDirection: 'row',
                height: 55,
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.base,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}>
              {prependComponent}
              <TextInput
                label="Password"
                placeholder="Nhập Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>
          {/*swith */}
          <View style={{paddingVertical: SIZES.padding * 2}}>
            <TouchableWithoutFeedback
              // onPress={() => onChange(!value)}
              value={saveMe}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                {/* */}
                <View
                  style={
                    value ? styles.switchOnContainer : styles.switchOffContainer
                  }>
                  <View
                    style={{
                      ...styles.dot,
                      backgroundColor: value ? COLORS.white : COLORS.black,
                    }}
                  />
                </View>
                {/*text */}
                <Text
                  style={{
                    color: value ? COLORS.primary : COLORS.gray,
                    marginLeft: SIZES.base,
                    ...FONTS.body4,
                  }}>
                  Save me
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: COLORS.primary,
                      textAlign: 'right',
                      marginLeft: SIZES.padding * 19,
                    }}
                    onPress={() => navigation.navigate('SignUp')}>
                    Quên mật khẩu?
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        {/*Button đăng nhập */}
        <View
          style={{
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 55,
              width: '95%',
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: 5,
              backgroundColor: COLORS.primary,
            }}>
            {/* onPress={() => navigation.navigate(' ')}> */}
            <Text
              style={{
                marginTop: 15,
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              Đăng Nhập
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: SIZES.padding, flexDirection: 'row'}}>
            <Text style={{color: COLORS.black, ...FONTS.body4}}>
              Bạn không có tài khoản?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignOut')}>
              <Text style={{color: COLORS.primary, ...FONTS.body4}}>
                {' '}
                Đăng ký
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Facebook & Google */}
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'blue',
            width: '95%',
            borderRadius: 5,
            marginLeft: SIZES.padding,
            marginTop: SIZES.padding,
          }}>
          {/*Facebook */}
          <TouchableOpacity
            style={{
              height: 55,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('@/assets/icons/facebook.png')}
                style={{width: 40, height: 40, alignItems: 'center'}}
              />
              <Text
                style={{
                  marginLeft: 12,
                  marginTop: 12,
                  color: COLORS.white,
                  ...FONTS.body3,
                }}>
                Đăng nhập bằng Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Facebook & Google */}
        <View
          style={{
            alignItems: 'center',
            backgroundColor: COLORS.white,
            width: '95%',
            borderRadius: 5,
            marginLeft: SIZES.padding,
            marginTop: SIZES.padding,
            borderWidth: 1,
          }}>
          {/*Facebook */}
          <TouchableOpacity
            style={{
              height: 55,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: 5,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('@/assets/icons/google.png')}
                style={{width: 40, height: 40, alignItems: 'center'}}
              />
              <Text
                style={{
                  marginLeft: 12,
                  marginTop: 12,
                  color: COLORS.black,
                  ...FONTS.body3,
                }}>
                Đăng nhập bằng Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return <SafeAreaView style={styles.container}>{mainHeader()}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  switchOffContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.gray,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default SignUp;
