import { useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { Transition } from 'react-native-reanimated'
import { useActions } from '../../hooks/useActions'
import useDebounce from '../../hooks/useDebounce'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { LoadingsActionTypes } from '../../types/loadings'
import Country from './Country'

const CountryContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const { fetchUniversities } = useActions()
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true)
  const searchIconRef: any = useRef(null)
  const debouncedSearchValue: string = useDebounce(searchValue, 800)
  const navigation = useNavigation<any>()
  const { params } = useRoute<any>()
  const name = params.name

  const { universities, error, isLoading } = useTypedSelector(
    ({ universitiesReducer, loadingsReducer }) => ({
      universities: universitiesReducer?.universities ? universitiesReducer.universities : [],
      error: universitiesReducer?.universitiesError ? universitiesReducer.universitiesError : null,
      isLoading: loadingsReducer.loadings.includes(LoadingsActionTypes.LOADING_UNIVERSITY),
    }),
  )

  const transitionIcon = <Transition.Change durationMs={200} interpolation="easeInOut" />

  useEffect(() => {
    fetchUniversities(name)
  }, [])

  useEffect(() => {
    if (debouncedSearchValue !== null) {
      fetchUniversities(name, debouncedSearchValue)
    }
    // else {
    //   fetchUniversities()
    // }
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
      isLoading={isLoading}
    />
  )
}

export default CountryContainer
