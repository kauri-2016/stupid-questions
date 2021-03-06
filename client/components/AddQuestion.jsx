import React from 'react'
import { Link, browserHistory } from 'react-router'

export default React.createClass({
  propTypes: {
    addQuestion: React.PropTypes.func
  },
  render () {
    let textInput = ''
    return (
      <div>
      <h1>Giz us a question</h1>
        <form onSubmit= {e => {
          e.preventDefault()
          if (textInput.value.trim()) {
            let question = textInput.value
            this.props.addQuestion(question)
            browserHistory.push('/')
          } }}>
           <input ref={input => { textInput = input } } />
           <button type='submit'>Submit</button>
          </form>
       </div>
      )
  }
})
