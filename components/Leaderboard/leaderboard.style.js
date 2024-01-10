import {StyleSheet} from 'react-native';
import responsive from '../../constants/responsive';

const styles = StyleSheet.create({
  king:{
   height:60,
   width:60,
   alignItems:"flex-end",
   justifyContent:"flex-end"
  },
  leaderboardContainer:{
    marginTop: 30,
    marginBottom:10,
    paddingRight:10,
    flex:1,
    paddingLeft:10,
    overflow:"hidden",
    display:"flex",
    alignItems: 'flex-end',
    flexDirection:"row",
},
leaderboardImage:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:0,
    padding:0
},
leaderboards:{
    flex:1,
    overflow:"hidden",
  
},
firstImage:{
    resizeMode: 'cover',
    borderColor:"#ff7816",
    borderWidth:4,
    borderRadius:60,
    width:100,
    height:100,
    zIndex:1
},
nameText: {
    color:"black",
    fontSize: responsive.subheadingFontSize,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  point1:{
    color:"#ff7816",
    fontSize:responsive.bodyFontSize,
    fontWeight:"bold"
  },
  point2:{
    color:"#12dced",
    fontSize:responsive.bodyFontSize,
    fontWeight:"bold"
  },
  point3:{
    color:"#ffa1a1",
    fontSize:responsive.bodyFontSize,
    fontWeight:"bold"
  },
  person:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:5,
    paddingRight:5
  },
  secondImage:{
    borderColor:"#c1e9dc",
    borderWidth:3,
    borderRadius:60,
    width:85,
    height:85,
    zIndex:1
},
thirdImage:{
    borderColor:"#ffa1a1",
    borderWidth:2,
    borderRadius:60,
    width:75,
    height:75,
    zIndex:1
},
secondPosition:{
    borderTopLeftRadius: 80, 
    borderTopRightRadius: 80,
    height:165,
    marginTop:-50
},
firstPosition:{
    marginTop:-10,
      height: 190,
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
},
  thirdPosition: {
    height: 145,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    marginTop:-75
}
});

export default styles;
