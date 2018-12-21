import React, { Component } from 'react'

class TodoItem extends Component {
  // constructor (props) {
  //   super(props)
  //
  //   this.state = {
  //     li: props.list
  //   }
  // }

  render () {
    return (
      <li>{this.props.content}</li>
    )
  }
}

export default TodoItem