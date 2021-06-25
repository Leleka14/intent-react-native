import React, { useEffect, useRef, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'
import Home from './Home'
import { Transition } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/core'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

const HomeContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const { fetchCountries } = useActions()
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true)
  const searchIconRef: any = useRef(null)
  const debouncedSearchValue: string = useDebounce(searchValue, 800)
  const navigation = useNavigation()

  const { countries, error } = useTypedSelector(({ countriesReducer }) => ({
    countries: countriesReducer?.countries ? countriesReducer.countries : [],
    error: countriesReducer?.countriesError ? countriesReducer.countriesError : null,
  }))

  const transitionIcon = <Transition.Change durationMs={200} interpolation="easeInOut" />

  useEffect(() => {
    if (debouncedSearchValue) {
      fetchCountries()
    } else {
      fetchCountries()
    }
    setIsTyping(false)
  }, [debouncedSearchValue])

  useEffect(() => {
    if (searchValue.length > 0) {
      setDisplaySearchIcon(false)
      if (searchIconRef) {
        searchIconRef.current.animateNextTransition()
      }
    } else {
      setDisplaySearchIcon(true)
      if (searchIconRef) {
        searchIconRef.current.animateNextTransition()
      }
    }
    setIsTyping(debouncedSearchValue !== searchValue)
  }, [searchValue])

  const onSearch = (text: string) => {
    setSearchValue(text)
  }

  const onCountryPressed = (item: any) => {
    navigation.navigate('Country', {
      item: item,
    })
  }

  return (
    <Home
      searchValue={searchValue}
      onSearch={onSearch}
      displaySearchIcon={displaySearchIcon}
      isTyping={isTyping}
      searchIconRef={searchIconRef}
      transitionIcon={transitionIcon}
      countries={countries}
      onCountryPressed={onCountryPressed}
      error={error}
    />
  )
}

export default HomeContainer
