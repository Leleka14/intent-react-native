export interface ILoadingsState {
  loadings: Array<LoadingsActionTypes>
}

export enum LoadingsActionTypes {
  LOADING = 'LOADING',
  START_LOADING = 'START_LOADING',
  LOADING_LOGIN = 'LOADING_LOGIN',
  REMOVE_LOADINGS = 'REMOVE_LOADINGS',
  FINISH_LOADING = 'FINISH_LOADING',
  LOADING_UNIVERSITY = 'LOADING_UNIVERSITIES',
}

export interface StartLoading {
  type: LoadingsActionTypes.START_LOADING
  payload: LoadingsActionTypes
}

export interface FinishLoading {
  type: LoadingsActionTypes.FINISH_LOADING
  payload: LoadingsActionTypes
}

export interface RemoveLoadings {
  type: LoadingsActionTypes.REMOVE_LOADINGS
}

export type LoadingActions = StartLoading | FinishLoading | RemoveLoadings
