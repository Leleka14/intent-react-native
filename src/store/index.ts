import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { countriesReducer } from './reducers/countriesReducer'
import { watchFetchCountries } from './sagas/countriesSaga'

const saga = createSagaMiddleware()
export const rootReducer = combineReducers({
  countriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(watchFetchCountries)
