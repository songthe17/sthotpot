import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '@/constants/';
export default StyleSheet.create({
  ViewHead: {
    flexDirection: 'row',
  },
  TextHeader: {
    fontSize: SIZES.body2,
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: COLORS.black,
  },
  touchable: {
    flexDirection: 'row',
    marginBottom: SIZES.padding * 2,
    marginTop: 10,
  },
  image_menu: {
    width: 100,
    height: 100,
    borderRadius: SIZES.radius,
  },
  text_name: {
    fontWeight: 'bold',
    fontSize: SIZES.body3,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'flex-end',
    color: COLORS.black,
  },
  view_bottom: {
    width: 200,
  },
});
