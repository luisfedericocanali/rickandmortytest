import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  deadView: {
    height: hp(2),
    width: hp(2),
    borderRadius: hp(1),
    backgroundColor: 'red'
  },
  aliveView: {
    height: hp(2),
    width: hp(2),
    borderRadius: hp(1),
    backgroundColor: 'green'
  },
  unknownView: {
    height: hp(2),
    width: hp(2),
    borderRadius: hp(1),
    backgroundColor: 'grey'
  },
  characterCard: {
    alignSelf: 'center',
    width: wp(90),
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: hp(0.25),
    padding: wp(2),
    flexDirection: 'row'
  },
  imageCard: {
    height: hp(15),
    width: hp(15),
    resizeMode: 'contain',
    flexGrow: 1
  },
  informationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: hp(1)
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  textCard: { fontSize: 15 },
  viewBorderBlack: { alignSelf: 'auto', borderWidth: 1, borderColor: 'black' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(100),
    backgroundColor: 'red'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginVertical: hp(1),
    color: 'white'
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'red',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    left: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [{ rotate: '-90deg' }]
  },
  characterDetailsCard: {
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageCardDetails: {
    width: wp(60),
    height: hp(30),
    flexGrow: 1,
    resizeMode: 'contain'
  },
  informationDetailsCard: {
    width: wp(80),
    alignSelf: 'center'
  }
})
