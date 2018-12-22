import React, { Component } from 'react'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { content } = this.props
    return (
      <li
        onClick={this.handleClick}
      >{content}</li>
    )
  }

  handleClick () {
    const { index, deleteItem } = this.props
    console.log(index)
    deleteItem(index)
  }
}

export default TodoItem