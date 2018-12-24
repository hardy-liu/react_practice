import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  //当一个组件从父组件接受了参数
  //只要父组件的render函数重新执行了，子组件的这个生命周期函数就会被执行
  //如果这个组件第一次存在与父组件中，此函数不会执行
  //如果这个组件之前已经存在与父组件中，才会执行
  componentWillReceiveProps (nextProps, nextContext) {
    console.log('child component will receive props.')
  }

  render () {
    const { content, test } = this.props
    return (
      <li
        onClick={this.handleClick}
      >{test}-{content}</li>
    )
  }

  //当这个组件即将从页面中被移除时
  componentWillUnmount () {
    console.log('child component will unmount.')
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