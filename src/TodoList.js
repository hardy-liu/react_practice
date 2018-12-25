import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'
import store from './store'
import ActionTypes from './store/actionTypes'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  handleInputChange (e) {
    // console.log(e.target.value)
    const action = {    //action 的type属性是必须的
      type: ActionTypes.CHANGE_INPUT_VALUE,
      value: e.target.value,
    }
    store.dispatch(action)
  }

  handleStoreChange () {
    console.log('store change')
    this.setState(store.getState())
  }

  handleBtnClick () {
    const action = {
      type: ActionTypes.ADD_TODO_ITEM,
    }
    store.dispatch(action)
  }

  handleListClick (index) {
    console.log(index)
    const action = {
      type: ActionTypes.DEL_TODO_ITEM,
      index,
    }
    store.dispatch(action)
  }

  render () {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder='todo list'
            style={{width: '300px', marginRight: '10px'}}
            onChange={this.handleInputChange}
          />
          <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleListClick.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}


export default TodoList