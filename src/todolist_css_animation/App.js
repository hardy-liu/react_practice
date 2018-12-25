import React, { Fragment, Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
    }

    this.handleAddItem = this.handleAddItem.bind(this)
  }

  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  // in={this.state.show}
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEnter={(el) => {el.style.color='blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>

              )
            })
          }
        </TransitionGroup>

        <button onClick={this.handleAddItem}>Add</button>
      </Fragment>
    )
  }

  handleAddItem () {
    this.setState((preState) => ({
      list: [...preState.list, 'item']
    }))
  }
}

export default TodoList