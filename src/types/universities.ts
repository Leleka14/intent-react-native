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
  name: string
  domains: Array<string>
  web_pages: Array<string>
  alpha_two_code: string
  country: string
}

export interface FetchUniversities {
  type: UniversitiesActionTypes.FETCH_UNIVERSITIES
  payload: {
    country?: string
    name?: string
  }
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
