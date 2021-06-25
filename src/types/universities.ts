export enum UniversitiesActionTypes {
  FETCH_UNIVERSITIES = 'FETCH_UNIVERSITIES',
  FETCH_UNIVERSITIES_SUCCESS = 'FETCH_UNIVERSITIES_SUCCESS',
  FETCH_UNIVERSITIES_FAILED = 'FETCH_UNIVERSITIES_FAILED',
}

export interface IUniversitiesState {
  universities: null | Array<IUniversity>
  universitiesError: string | null
}

export interface IUniversity {
  title?: any
}

export interface FetchUniversities {
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES
}

export interface FetchUniversitiesSuccess {
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES_SUCCESS
  payload: Array<IUniversity>
}

export interface FetchUniversitiesFailed {
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES_FAILED
  payload: string
}
export type UniversitiesActions =
  | FetchUniversities
  | FetchUniversitiesSuccess
  | FetchUniversitiesFailed
