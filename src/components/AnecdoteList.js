import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  let sortedAnecdotes = [...anecdotes]
  sortedAnecdotes.sort((a,b) => b.votes - a.votes)
  
  const filteredAnecdotes = sortedAnecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
  
  const vote = (anecdote) => {
    dispatch(voteFor(anecdote.id))
    dispatch(setNotification(`You voted for '${anecdote.content}'.`,10))
  }


  return (
    <div>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      
    </div>
  )
}
export default AnecdoteList