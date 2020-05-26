import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const addAnecdote = async (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      event.target.anecdote.value = ''
      dispatch(newAnecdote(content))
      dispatch(setNotification(`You created an anecdote: '${content}'.`, 5))
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
  export default AnecdoteForm