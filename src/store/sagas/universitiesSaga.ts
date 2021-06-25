import { UniversitiesActionTypes } from '../../types/universities'
import { takeEvery, put, call, select, SagaReturnType } from 'redux-saga/effects'
import { fetchUniversitiesFailed, fetchUniversitiesSuccess } from '../actions/universitiesActions'

function* workerFetchUniversities() {
  try {
    console.log('here')
    let universities = [
      {
        title: 'university1',
      },
      {
        title: 'university2',
      },
    ]
    if (universities.length > 0) {
      yield put(fetchUniversitiesSuccess(universities))
    } else {
      throw new Error('Nothing was found(((')
    }
  } catch (e) {
    yield put(fetchUniversitiesFailed(e.message))
    console.log(e)
  }
}

export function* watchFetchUniversities() {
  yield takeEvery(UniversitiesActionTypes.FETCH_UNIVERSITIES, workerFetchUniversities)
}
