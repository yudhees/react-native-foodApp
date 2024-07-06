import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../constants'

export default function LoginButtons({
  text, containerStyle, colors, onPress
}) {
  if (colors?.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={colors}
          style={{ ...containerStyle }}>
          <Text style={{
            textAlign: 'center',
            color: COLORS.white,
            ...FONTS.h3
          }}>
            {text}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity onPress={onPress} style={{ ...containerStyle }}>
      <Text style={{
        textAlign: 'center',
        color: COLORS.white,
        ...FONTS.h3
      }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}