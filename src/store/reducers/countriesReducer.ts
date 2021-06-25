import { ICountriesState, CountriesActions, CountriesActionTypes } from '../../types/countries'

const countries = {
  countries: null,
  countriesError: null,
}

export const countriesReducer = (
  state: ICountriesState = countries,
  action: CountriesActions,
): ICountriesState => {
  switch (action.type) {
    case CountriesActionTypes.FETCH_COUNTRIES:
      return {
        ...state,
      }
    case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        countriesError: null,
      }
    case CountriesActionTypes.FETCH_COUNTRIES_FAILED:
      return {
        ...state,
        countriesError: action.payload,
      }

    default:
      return state
  }
}
