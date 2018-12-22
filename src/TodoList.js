import React, { Fragment, Component } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'aaa',
      list: [],
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div>
          {/*label标签用于扩大点击区域， jsx里面要使用htmlFor*/}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>

        <ul>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          content={item}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange (e) {
    const value = e.target.value  //因为setState是异步的，所以需要提前将value拿出来
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
    // console.log(this.state.inputValue)
  }

  handleBtnClick () {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: '',
    }))

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: '',
    // })
    // console.log(this.state.list)
  }

  handleItemDelete (index) {
    console.log('delete', index)
    // const list = [...this.state.list]
    // list.splice(index, 1)
    this.setState((preState) => {
      const list = [...preState.list]
      list.splice(index, 1)
      return {list}
    })

    // this.setState({
    //   list: list
    // })
  }
}

export default TodoList