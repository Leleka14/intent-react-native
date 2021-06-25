import {
  FetchUniversities,
  FetchUniversitiesFailed,
  FetchUniversitiesSuccess,
  IUniversity,
  UniversitiesActionTypes,
} from '../../types/universities'

export const fetchUniversities = (country?: string, name?: string): FetchUniversities => ({
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES,
  payload: {
    country: country,
    name: name,
  },
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
