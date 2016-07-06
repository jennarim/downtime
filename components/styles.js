import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#232323',
    marginTop: 60,
    marginBottom: 49
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#232323',
    marginTop: 60,
    marginBottom: 48,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  segmentControl: {
    marginTop: 10,
    marginHorizontal: 10
  },
  navBar: {
    height: 60,
    backgroundColor: '#969494', // 969494
    borderBottomColor: '#232323', // 404040
    borderBottomWidth: 1,
    shadowColor: '#232323',
    shadowRadius: 10,
    shadowOpacity: 5,
    shadowOffset: {
      height: -3
    }
  },
  logContainer: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
  },
  leftNavButtonText: {
    color: '#393A3A',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 8,
    fontWeight: '400'
  },
  rightNavButtonText: {
    color: '#393A3A',
    fontSize: 16,
    marginRight: 10,
    marginTop: 8,
    fontWeight: '400'
  },
  NavBarTitle: {
    flex: 3,
    fontSize: 20,
    fontWeight: '700',
    color: '#393A3A', //232323
    marginTop: 5
  },
  banner: {
    flex: 1,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    textShadowColor: '#999999',
    textShadowOffset: {
      width: 3,
      height: 3
    },
    textShadowRadius: 6,
    padding: 6
  },
  logButton: {
    height: 450,
    width: 325,
    backgroundColor: '#48BBEC',
    borderRightColor: '#23A9E3',
    borderBottomColor: '#23A9E3',
    borderLeftColor: '#48BBEC',
    borderTopColor: '#48BBEC',
    borderWidth: 1,
    shadowColor: '#636363',
    shadowOpacity: 90,
    shadowRadius: 50,
    shadowOffset: {
      height: 7
    },
    borderRadius: 25,
    borderWidth: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  optionsText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    textShadowColor: '#999999',
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 3,
    padding: 3
  },
  optionsButton: {
    height: 50,
    width: 325,
    backgroundColor: '#FFD3A1',
    borderRightColor: '#FFBB6F',
    borderBottomColor: '#FFBB6F',
    borderLeftColor: '#FFA745',
    borderTopColor: '#FFA745',
    borderWidth: 1,
    shadowColor: '#FF8700',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 1
    },
    borderRadius: 25,
    borderWidth: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  stopButton: {
    height: 450,
    width: 325,
    backgroundColor: '#D84727',
    borderRightColor: '#B93C22',
    borderBottomColor: '#B93C22',
    borderLeftColor: '#D84727',
    borderTopColor: '#D84727',
    borderWidth: 1,
    shadowColor: '#636363',
    shadowOpacity: 90,
    shadowRadius: 50,
    shadowOffset: {
      height: 7
    },
    borderRadius: 25,
    borderWidth: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  logsOption: {
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
  },
  map: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 48,
  },
  mapButton: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    height: 40,
    width: 40,
    right: 7,
    bottom: 57,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    backgroundColor: 'rgba(35, 35, 35, 0.5)'
  },
  bar: {
    alignSelf: 'center',
    borderRadius: 3,
    height: 15,
    position: 'absolute',
    top: 40,
    left: 20,
    right: 0
  },
  barText: {
    fontSize: 10,
    fontWeight: '700',
    left: 5,
    backgroundColor: 'transparent'
  },
  lessThan1: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
    backgroundColor: 'transparent'
  },
  chartTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#48BBEC',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 3,
    position: 'absolute',
    top: 75,
    left: 0,
    right: 0,
  },
  chartText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    left: 10
  },
  chartRow: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    backgroundColor: 'transparent',
  },
  inline: {
    flex: 1,
    flexDirection: 'row'
  },
  rowStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderTopColor: '#929292',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#929292',
    backgroundColor: 'transparent',
    borderWidth: 1
  },
  rowContent: {
    color: 'white',
    fontWeight: '700'
  },
  detailViewTitle: {
    color: '#48BBEC',
    fontSize: 30,
    paddingBottom: 10,
    fontWeight: '800',
    marginBottom: 30,
  },
  detailViewBodyHeader: {
    fontWeight: '800',
    color: 'white',
    fontSize: 14,
    marginVertical: 10,
    borderBottomColor: '#929292'
  },
  detailViewBody: {
    color: 'white',
    fontSize: 14,
    marginVertical: 10,
    borderBottomColor: '#929292'
  },
  editViewBody: {
    color: '#48BBEC',
    fontSize: 14,
    marginVertical: 10,
    borderBottomColor: '#929292'
  },
  modal: {
    position: 'absolute',
    top: 80,
    left: 45,
    bottom: 300,
    right: 45,
    borderRadius: 15,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    opacity: 0.75,
  },
  autocomplete: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
    borderRadius: 15
  }
});

module.exports = styles;
