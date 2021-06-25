import {
  FetchUniversities,
  FetchUniversitiesFailed,
  FetchUniversitiesSuccess,
  IUniversity,
  UniversitiesActionTypes,
} from '../../types/universities'

export const fetchUniversities = (): FetchUniversities => ({
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES,
})

export const fetchUniversitiesSuccess = (
  payload: Array<IUniversity>,
): FetchUniversitiesSuccess => ({
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES_SUCCESS,
  payload: payload,
})

export const fetchUniversitiesFailed = (payload: string): FetchUniversitiesFailed => ({
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES_FAILED,
  payload: payload,
})
