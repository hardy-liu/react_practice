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

  //在组件即将被挂载到页面的时刻自动执行
  componentWillMount () {
    console.log('component will mount.')
  }

  render () {
    console.log('render.')
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
            ref={(input) => (this.input = input)}
          />
          <button onClick={this.handleBtnClick}>submit</button>
        </div>

        <ul
          ref={(ul) => this.ul = ul}
        >
          { this.getTodoItem() }
        </ul>
      </Fragment>
    )
  }

  //在组件被挂载到页面之后的时刻自动执行
  componentDidMount () {
    console.log('component did mount.')
  }

  //组件更新之前，它会自动被执行
  shouldComponentUpdate (nextProps, nextState, nextContext) {
    console.log('should component update.', nextProps, nextState, nextContext)
    return true
  }

  //组件更新之前，它会自动执行，但是他在shouldComponent之后被执行
  //如果shouldComponentUpdate返回true它才执行
  //如果返回false则之后的生命周期函数都不会执行
  componentWillUpdate (nextProps, nextState, nextContext) {
    console.log('component will update.')
  }

  //组件更新完成之后它会执行
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('component did update.')
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
    // const value = e.target.value  //因为setState是异步的，所以需要提前将value拿出来
    const value = this.input.value
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
    }), () => { //setState的第二个参数为回调函数
      console.log(this.ul.querySelectorAll('li').length)
    })

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