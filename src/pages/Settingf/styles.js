import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '@/constants/';

export default StyleSheet.create({
  view: {
    flex: 0,
    marginLeft: 10,
  },
  viewcon: {
    marginBottom: 10,
    marginLeft: 10,
  },
  viewcon2: {
    marginBottom: 10,
    textAlign: 'right',
    marginLeft: SIZES.padding * 19,
  },
  text: {
    ...FONTS.h2,
    color: COLORS.black,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  textcon: {
    color: COLORS.black,
    ...FONTS.body3,
    marginLeft: 15,
    marginTop: 15,
  },
  textcon1: {
    color: COLORS.black,
    ...FONTS.body3,
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
  textcon2: {
    color: COLORS.black,
    ...FONTS.body3,
    marginTop: 15,
    alignItems: 'flex-end',
  },
  touchtientich: {
    borderRadius: 5,
    width: '45%',
    height: 80,
    backgroundColor: COLORS.white,
    marginBottom: 15,
  },
  touchtientich1: {
    borderRadius: 5,
    width: '47%',
    height: 80,
    backgroundColor: COLORS.white,
    marginLeft: 10,
    textAlign: 'right',
    marginRight: 10,
  },
  touchtientich2: {
    borderRadius: 5,
    width: '95%',
    height: 80,
    backgroundColor: COLORS.white,
    marginBottom: 10,
  },
  touch: {
    flexDirection: 'row',
    borderRadius: 5,
    width: '95%',
    height: 50,
    backgroundColor: COLORS.white,
    marginBottom: 10,
  },
  icons: {
    width: 20,
    height: 20,
    marginLeft: 15,
    marginTop: 15,
  },
  icons2: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginTop: 10,
  },
});
