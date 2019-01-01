import ActionTypes from './actionTypes'
import axios from 'axios'

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

const getTestApi = () => {
  return (dispatch) => {
    let url = 'https://api.decentraland.org/v1/map?nw=25,136&se=53,118'
    axios.get(url)
      .then((res) => console.log(res.data))
  }
}

export default {
  getInputChangeAction,
  getAddItemAction,
  getDelItemAction,
  getTestApi,
}