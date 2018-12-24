import React, { Fragment, Component } from 'react'
import { CSSTransition } from 'react-transition-group'
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
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEnter={(el) => {el.style.color='blue'}}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>

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