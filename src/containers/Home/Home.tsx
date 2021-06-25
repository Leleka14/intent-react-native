import React from 'react'
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native'
import { Transitioning } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CountryCard from '../../components/CountryCard/CountryCard'
import { SearchIcon, ErrorIcon } from '../../assets/icons/Icons'
import styles from './styles'

interface IProps {
  searchValue: string
  onSearch(text: string): void
  displaySearchIcon: boolean
  isTyping: boolean
  searchIconRef: any
  transitionIcon: any
  countries: any
  onCountryPressed(item: any): void
  error: string | null
}

const Home: React.FC<IProps> = ({
  searchValue,
  onSearch,
  displaySearchIcon,
  isTyping,
  searchIconRef,
  transitionIcon,
  countries,
  onCountryPressed,
  error,
}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)
  const renderItem = ({ item }: any) => {
    return <CountryCard item={item} onPress={onCountryPressed} />
  }
  return (
    <View style={s.container}>
      <Text style={s.header}>All Countries</Text>
      <Transitioning.View ref={searchIconRef} transition={transitionIcon} style={s.searchWrapper}>
        {displaySearchIcon ? <SearchIcon /> : null}
        <TextInput
          placeholder={'Find Country'}
          style={s.searchInput}
          onChangeText={text => onSearch(text)}
          defaultValue={searchValue}
          placeholderTextColor={'#828282'}
        />
      </Transitioning.View>
      {isTyping ? (
        <View style={s.spinnerWrapper}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : error || countries.length === 0 ? (
        <View style={s.errorWrapper}>
          <ErrorIcon />
          <Text style={s.errorText}>Ooops, nothing was found,{'\n'}please try again later...</Text>
        </View>
      ) : (
        <FlatList
          data={countries}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item: any) => item.title}
          style={s.list}
        />
      )}
    </View>
  )
}

export default Home
