import React from 'react'
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  
    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      props.newAnecdote(content)
      props.setNotification(`You created an anecdote: '${content}'.`, 5)
    }
    
    return (
      <div>        
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div>
            <input name="anecdote" />
            <button>create</button>
            </div>
        </form>
      </div>
    )
  }

  const mapDispatchToProps = {
    newAnecdote,
    setNotification
  }
  export default connect(null, mapDispatchToProps)(AnecdoteForm)