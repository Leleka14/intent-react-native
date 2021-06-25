import {
  IUniversitiesState,
  UniversitiesActions,
  UniversitiesActionTypes,
} from '../../types/universities'

const universities = {
  universities: null,
  universitiesError: null,
}

export const universitiesReducer = (
  state: IUniversitiesState = universities,
  action: UniversitiesActions,
): IUniversitiesState => {
  switch (action.type) {
    case UniversitiesActionTypes.FETCH_UNIVERSITIES:
      return {
        ...state,
      }
    case UniversitiesActionTypes.FETCH_UNIVERSITIES_SUCCESS:
      return {
        ...state,
        universities: action.payload,
        universitiesError: null,
      }
    case UniversitiesActionTypes.FETCH_UNIVERSITIES_FAILED:
      return {
        ...state,
        universitiesError: action.payload,
      }

    default:
      return state
  }
}
