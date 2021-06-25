import {
  FetchCountries,
  FetchCountriesFailed,
  FetchCountriesSuccess,
  ICountry,
  CountriesActionTypes,
} from '../../types/countries'

export const fetchCountries = (): FetchCountries => ({
  type: CountriesActionTypes.FETCH_COUNTRIES,
})

export const fetchCountriesSuccess = (payload: Array<ICountry>): FetchCountriesSuccess => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS,
  payload: payload,
})

export const fetchCountriesFailed = (payload: string): FetchCountriesFailed => ({
  type: CountriesActionTypes.FETCH_COUNTRIES_FAILED,
  payload: payload,
})
