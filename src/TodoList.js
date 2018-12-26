import React, { Component } from 'react'
// import { Button, Input, List } from 'antd'
import store from './store'
// import ActionTypes from './store/actionTypes'
import ActionCreator from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleListClick = this.handleListClick.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  handleInputChange (e) {
    // console.log(e.target.value)
    // const action = {    //action 的type属性是必须的
    //   type: ActionTypes.CHANGE_INPUT_VALUE,
    //   value: e.target.value,
    // }
    const action = ActionCreator.getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange () {
    console.log('store change')
    this.setState(store.getState())
  }

  handleBtnClick () {
    // const action = {
    //   type: ActionTypes.ADD_TODO_ITEM,
    // }
    const action = ActionCreator.getAddItemAction()
    store.dispatch(action)
  }

  handleListClick (index) {
    // console.log(index)
    // const action = {
    //   type: ActionTypes.DEL_TODO_ITEM,
    //   index,
    // }
    const action = ActionCreator.getDelItemAction(index)
    store.dispatch(action)
  }

  render () {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleListClick={this.handleListClick}
      />
    )
  }
}

export default TodoList