import { takeEvery, put } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import axios from 'axios'

function* mySage() {
  yield takeEvery(ActionTypes.GET_TEST_API, doGetTestApi)
}

// const doGetTestApi = () => {
//   return (dispatch) => {
//     let url = 'https://api.decentraland.org/v1/map?nw=25,136&se=53,118'
//     axios.get(url)
//       .then((res) => console.log(res.data))
//   }
// }

function* doGetTestApi() {
  let url = 'https://api.decentraland.org/v1/map?nw=25,136&se=53,118'
  try {
    const res = yield axios.get(url)
    console.log(res)
  } catch (e) {
    console.log(e)
  }


  // const action = xxx(res.data)
  // yield put(action)  //不能使用store.dispatch，需要使用put来发送action
}

export default mySage