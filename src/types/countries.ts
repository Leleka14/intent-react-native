export enum CountriesActionTypes {
  FETCH_COUNTRIES = 'FETCH_COUNTRIES',
  FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS',
  FETCH_COUNTRIES_FAILED = 'FETCH_COUNTRIES_FAILED',
}

export interface ICountriesState {
  countries: null | Array<ICountry>
  countriesError: string | null
}

export interface ICountry {
  title?: any
}

export interface FetchCountries {
  type: CountriesActionTypes.FETCH_COUNTRIES
}

export interface FetchCountriesSuccess {
  type: CountriesActionTypes.FETCH_COUNTRIES_SUCCESS
  payload: Array<ICountry>
}

export interface FetchCountriesFailed {
  type: CountriesActionTypes.FETCH_COUNTRIES_FAILED
  payload: string
}
export type CountriesActions = FetchCountries | FetchCountriesSuccess | FetchCountriesFailed
