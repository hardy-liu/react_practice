import React, { Fragment, Component } from 'react'
import './style.css'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'aaa',
      list: [],
    }
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
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >submit</button>
        </div>

        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <TodoItem key={index} content={item}/>
                // <li
                //   key={index}
                //   onClick={this.handleItemDelete.bind(this, index)}
                //   dangerouslySetInnerHTML={{__html: item}}
                // ></li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
    // console.log(this.state.inputValue)
  }

  handleBtnClick (e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
    // console.log(this.state.list)
  }

  handleItemDelete (index) {
    console.log('delete', index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList