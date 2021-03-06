import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { universitiesReducer } from './reducers/universitiesReducer'
import { loadingsReducer } from './reducers/loadingsReducer'

import { watchFetchUniversities } from './sagas/universitiesSaga'

const saga = createSagaMiddleware()
export const rootReducer = combineReducers({
  universitiesReducer,
  loadingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(watchFetchUniversities)
