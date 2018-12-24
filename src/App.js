import React, { Fragment, Component } from 'react'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  render () {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}
        >hello</div>

        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle () {
    this.setState((preState) => ({
      show: !preState.show,
    }))
  }
}

export default TodoList