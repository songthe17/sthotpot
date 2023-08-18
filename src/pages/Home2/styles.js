import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '@/constants/';
export default StyleSheet.create({
  viewhead: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: COLORS.white,
  },
  viewhead_icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 150,
  },
  viewhead_icon2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textheader: {
    fontSize: SIZES.body2,
    marginTop: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    color: COLORS.black,
  },
  imageHeader1: {
    borderRadius: 10,
    width: 30,
    height: 30,
    color: COLORS.primary,
    marginTop: 10,
  },
  iconHeader1: {
    borderRadius: 10,
    width: 25,
    height: 25,
    color: COLORS.primary,
    marginLeft: 15,
    marginTop: 5,
  },
  avatarbutton: {
    paddingLeft: SIZES.padding * 1,
    flexDirection: 'row',
  },
  buttoncoupon: {
    width: 55,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  Image1: {
    width: 170,
    height: 170,
    borderRadius: SIZES.radius,
  },
  image_icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  textimage: {
    fontSize: SIZES.body2 * 1,
    fontWeight: 'bold',
    color: COLORS.black,
    width: 180,
  },
  //MainLayout
  textheader1: {
    fontSize: SIZES.body3 * 1.5,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  // renderRestaurantList
  view_list: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  safeareaview: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  renderRestaurantList: {
    paddingHorizontal: 20,
    paddingRight: 25,
    paddingBottom: 30,
    alignItems: 'flex-start',
  },
  tagView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box: {
    marginBottom: SIZES.padding * 2,
    marginRight: 25,
  },
});
