import React from 'react'
import {connect} from 'react-redux'

const TodoList = (props) => {
  const {inputValue, list, changeInputValue, handleClick} = props
  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
        />
        <button onClick={handleClick}>submit</button>

        <ul>
          {
            list.map((item, index) => {
              return <li key={index} onClick={() => props.handleDelete(index)}>{item}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

//定义store中数据到props的规则，state参数是store中的数据
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

//dispatch = store.dispatch
const mapDispatchToProps = (dispatch) => {
    return {
      changeInputValue (e) {
        const action = {
          type: 'change_input_value',
          value: e.target.value,
        }
        dispatch(action)
      },

      handleClick () {
        const action = {
          type: 'add_item',
        }
        dispatch(action)
      },

      handleDelete (index) {
        const action = {
          type: 'del_item',
          index: index,
        }
        dispatch(action)
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) //todo 这种写法的含义