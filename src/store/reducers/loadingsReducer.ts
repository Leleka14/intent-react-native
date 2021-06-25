import {
  ILoadingsState,
  LoadingActions,
  LoadingsActionTypes,
} from '../../types/loadings'

const loadingsState = {loadings: []}

export const loadingsReducer = (
  state: ILoadingsState = loadingsState,
  action: LoadingActions,
): ILoadingsState => {
  switch (action.type) {
    case LoadingsActionTypes.START_LOADING:
      return {
        loadings: [...state.loadings, action.payload],
      }
    case LoadingsActionTypes.FINISH_LOADING:
      return {
        loadings: state.loadings.filter((el) => el !== action.payload),
      }
    case LoadingsActionTypes.REMOVE_LOADINGS:
      return {
        loadings: [],
      }
    default:
      return state
  }
}
