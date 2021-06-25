import {useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreators from '../store/actions/index'

export const useActions = () => {
  const dispatch = useDispatch()
  const actionCreators = useMemo(
    () => bindActionCreators(ActionCreators, dispatch),
    [dispatch],
  )

  return actionCreators
}
