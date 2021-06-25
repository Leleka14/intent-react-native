import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './styles'

interface IProps {
  item: any
  onPress(item: any): void
}

const UniversityCard: React.FC<IProps> = ({ item, onPress }) => {
  const s = styles

  return (
    <View style={s.container}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => onPress(item.name)}>
        <Text style={s.title}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UniversityCard
