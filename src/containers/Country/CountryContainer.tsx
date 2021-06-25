import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { Transition } from 'react-native-reanimated'
import { useActions } from '../../hooks/useActions'
import useDebounce from '../../hooks/useDebounce'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Country from './Country'

const CountryContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const { fetchUniversities } = useActions()
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true)
  const searchIconRef: any = useRef(null)
  const debouncedSearchValue: string = useDebounce(searchValue, 800)
  const navigation = useNavigation()

  const { universities, error } = useTypedSelector(({ universitiesReducer }) => ({
    universities: universitiesReducer?.universities ? universitiesReducer.universities : [],
    error: universitiesReducer?.universitiesError ? universitiesReducer.universitiesError : null,
  }))

  const transitionIcon = <Transition.Change durationMs={200} interpolation="easeInOut" />

  useEffect(() => {
    if (debouncedSearchValue) {
      fetchUniversities()
    } else {
      fetchUniversities()
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
  return (
    <Country
      searchValue={searchValue}
      onSearch={onSearch}
      displaySearchIcon={displaySearchIcon}
      isTyping={isTyping}
      searchIconRef={searchIconRef}
      transitionIcon={transitionIcon}
      error={error}
      universities={universities}
    />
  )
}

export default CountryContainer
