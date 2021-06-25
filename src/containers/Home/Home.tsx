import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CountryCard from '../../components/CountryCard/CountryCard'
import styles from './styles'

interface IProps {
  countries: any
  onCountryPressed(item: any): void
}

const Home: React.FC<IProps> = ({ countries, onCountryPressed }) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)
  const renderItem = ({ item }: any) => {
    return <CountryCard item={item} onPress={onCountryPressed} />
  }
  return (
    <View style={s.container}>
      <Text style={s.header}>Choose a country</Text>

      <FlatList
        data={countries}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={(item: any) => item.name}
        style={s.list}
      />
    </View>
  )
}

export default Home
