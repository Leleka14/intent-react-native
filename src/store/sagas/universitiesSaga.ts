import { FetchUniversities, UniversitiesActionTypes } from '../../types/universities'
import { takeEvery, put, call, SagaReturnType, select } from 'redux-saga/effects'
import { fetchUniversitiesFailed, fetchUniversitiesSuccess } from '../actions/universitiesActions'
import { DataProvider, ISearchUniversityQueryParams } from '../../api/ApiClient'
import { RootState } from '..'
import { finishLoading, startLoading } from '../actions/loadingsActions'
import { LoadingsActionTypes } from '../../types/loadings'

function* workerFetchUniversities({ payload }: FetchUniversities) {
  const loadings: ReturnType<typeof getLoadings> = yield select(getLoadings)
  if (!loadings.includes(LoadingsActionTypes.LOADING_UNIVERSITY))
    try {
      yield put(startLoading(LoadingsActionTypes.LOADING_UNIVERSITY))
      const params: ISearchUniversityQueryParams = {
        country: payload.country,
        name: payload.name,
      }
      const response: SagaReturnType<typeof DataProvider.getUniversitiesByCountryOrSearch> =
        yield call(() => DataProvider.getUniversitiesByCountryOrSearch(params))
      const universities = response.data

      if (universities.length > 0) {
        yield put(fetchUniversitiesSuccess(universities))
      } else {
        throw new Error('Nothing was found(((')
      }
    } catch (e) {
      yield put(fetchUniversitiesFailed(e.message))
      console.log(e)
    } finally {
      yield put(finishLoading(LoadingsActionTypes.LOADING_UNIVERSITY))
    }
}

export function* watchFetchUniversities() {
  yield takeEvery(UniversitiesActionTypes.FETCH_UNIVERSITIES, workerFetchUniversities)
}

export const getUniversitiesByCountryOrSearch = ({ universitiesReducer }: RootState) =>
  universitiesReducer.universities ? universitiesReducer.universities : null

export const getLoadings = ({ loadingsReducer }: RootState) => loadingsReducer.loadings
