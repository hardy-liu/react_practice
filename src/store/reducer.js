import ActionTypes from './actionTypes'

const defaultState = {
  inputValue: '',
  list: [],
}

//reducer 可以接收state，但绝不能修改state
export default (state = defaultState, action) => {  //第一个参数表示的是preState
  if (action.type === ActionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))  //必须要拷贝一份新的state出来
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ActionTypes.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === ActionTypes.DEL_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}