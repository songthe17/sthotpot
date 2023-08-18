import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@/constants/';

export default StyleSheet.create({
  // header
  viewhear: {
    paddingVertical: SIZES.padding,
  },
  imageheader: {
    width: '80%',
    height: 250,
  },
  textheader: {
    textAlign: 'center',
    ...FONTS.h4,
    color: COLORS.black,
    marginTop: 5,
  },
  buttonback: {
    height: 25,
    width: 25,
    marginLeft: '90%',
    marginTop: 15,
  },
  //button
  textinput: {
    flex: 1,
    fontSize: SIZES.body2,
    marginLeft: 10,
    width: '85%',
  },
  viewbutton: {
    flexDirection: 'row',
    height: 55,
    borderWidth: 1,
    borderRadius: SIZES.base,
    marginTop: 10,
  },
  textbutton: {
    marginLeft: 10,
    marginTop: SIZES.padding * 1.5,
    color: COLORS.black,
    fontSize: SIZES.body2,
  },
  TouchaLogin: {
    height: 55,
    borderWidth: 1,
    borderRadius: SIZES.base,
    marginTop: SIZES.padding * 1.5,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: '80%',
  },
  TouchID: {
    marginTop: 5,
    marginLeft: 5,
    height: 55,
    width: 55,
  },
  SafeAreaView: {
    flex: 1,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  TouchaRequert: {
    marginTop: SIZES.padding,
    flexDirection: 'row-reverse',
  },
  // Center
  textcenter: {
    fontSize: SIZES.body2,
  },
  viewcenter: {
    alignItems: 'center',
    marginTop: SIZES.padding * 1.5,
  },
  textlogin: {
    marginTop: 15,
    fontSize: SIZES.body3,
  },
  // footer
  textface: {
    fontSize: SIZES.body3,
    color: COLORS.white,
  },
  textgoogle: {
    fontSize: SIZES.body3,
    color: COLORS.black,
  },
  imageicon: {
    width: 25,
    height: 25,
    flexDirection: 'row',
  },
  viewall: {
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  viewall2: {
    alignItems: 'center',
    width: '100%',
  },
  touchface: {
    height: 55,
    borderWidth: 1,
    borderRadius: SIZES.base,
    marginTop: SIZES.padding * 1.5,
    alignItems: 'center',
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  touchgoogle: {
    height: 55,
    borderWidth: 1,
    borderRadius: SIZES.base,
    marginTop: SIZES.padding * 1.5,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});
