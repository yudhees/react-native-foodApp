import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import {COLORS, FONTS, images, SIZES} from '../constants'
import { LinearGradient } from 'expo-linear-gradient';
import {LoginButton} from '../components'
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  return (
    <View style={styles.container}>
     <StatusBar barStyle='light-content'></StatusBar>
     <RenderHeader/>
     <RenderDetails/>
    </View>
  )
}
const RenderHeader=()=>{
    return (
        <View style={{
            height:SIZES.height>700?'65%':"60%"
        }}>
            <ImageBackground source={images.loginBackground} resizeMode='cover' style={{ flex:1, justifyContent:"flex-end" }}>
                <LinearGradient start={{ x:0,y:0 }} end={{ x:0,y:1 }} colors={[COLORS.transparent,COLORS.black]} style={styles.headerGradient}>
                    <Text style={styles.headerText}>Cooking a Delicious Food Family</Text>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}
const RenderDetails=()=>{
    const navigation=useNavigation()
    return (
        <View style={{ flex:1,paddingHorizontal:SIZES.padding }}>
            <Text style={styles.btmTxt}>Discover more than 1200 food recipes in your hands and cooking it easily</Text>
            <View>
                <LoginButton
                 text="Login"
                 colors={[COLORS.darkGreen,COLORS.lime]}
                 containerStyle={{ 
                    paddingVertical:21,
                    borderRadius:20,
                }}
                onPress={()=>navigation.navigate('Home')}
                />
                <LoginButton
                 text="Singup"
                 colors={[]}
                 containerStyle={{ 
                    paddingVertical:21,
                    borderRadius:20,
                    marginTop:SIZES.radius,
                    borderColor:COLORS.darkLime,
                    borderWidth:1,
                }}
                onPress={()=>navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}
export default Login

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.black
    },
    headerGradient:{
        height:200,
        justifyContent:"flex-end",
        paddingHorizontal:SIZES.padding
    },
    headerText:{
        width:"80%",
        color:COLORS.white,
        ...FONTS.largeTitle
    },
    btmTxt:{
      color:COLORS.gray,
      marginTop:SIZES.radius,
      ...FONTS.body3,
      width:"70%"
    }
})