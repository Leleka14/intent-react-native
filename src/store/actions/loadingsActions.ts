import {
  FinishLoading,
  RemoveLoadings,
  LoadingsActionTypes,
  StartLoading,
} from '../../types/loadings'

export const startLoading = (target: LoadingsActionTypes): StartLoading => ({
  type: LoadingsActionTypes.START_LOADING,
  payload: target,
})

export const finishLoading = (target: LoadingsActionTypes): FinishLoading => ({
  type: LoadingsActionTypes.FINISH_LOADING,
  payload: target,
})

export const removeLoadings = (): RemoveLoadings => ({
  type: LoadingsActionTypes.REMOVE_LOADINGS,
})
