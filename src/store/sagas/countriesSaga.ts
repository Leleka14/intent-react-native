import { CountriesActionTypes } from '../../types/countries'
import { takeEvery, put, call, select, SagaReturnType } from 'redux-saga/effects'
import { fetchCountriesFailed, fetchCountriesSuccess } from '../actions/countriesActions'

function* workerFetchCountries() {
  try {
    console.log('here')
    let countries = [
      {
        title: 'country1',
      },
      {
        title: 'country2',
      },
    ]
    if (countries.length > 0) {
      yield put(fetchCountriesSuccess(countries))
    } else {
      throw new Error('Nothing was found(((')
    }
  } catch (e) {
    yield put(fetchCountriesFailed(e.message))
    console.log(e)
  }
}

export function* watchFetchCountries() {
  yield takeEvery(CountriesActionTypes.FETCH_COUNTRIES, workerFetchCountries)
}
