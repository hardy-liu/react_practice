import ActionTypes from './actionTypes'

const getInputChangeAction = (value) => ({
  type: ActionTypes.CHANGE_INPUT_VALUE,
  value
})

const getAddItemAction = () => ({
  type: ActionTypes.ADD_TODO_ITEM,
})

const getDelItemAction = (index) => ({
  type: ActionTypes.DEL_TODO_ITEM,
  index
})

export default {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
}