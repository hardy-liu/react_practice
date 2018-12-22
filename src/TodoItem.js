import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    const { content, test } = this.props
    return (
      <li
        onClick={this.handleClick}
      >{test}-{content}</li>
    )
  }

  handleClick () {
    const { index, deleteItem } = this.props
    console.log(index)
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,  //test props 必须传，没有required就不检测
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  // index: PropTypes.string,
}

TodoItem.defaultProps = {
  test: 'hello world',  //test 属性默认值
}

export default TodoItem