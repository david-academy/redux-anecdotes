import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.voteFor(anecdote.id)
    props.setNotification(`You voted for '${anecdote.content}'.`,10)
  }
 

  return (
    <div>
      {props.filteredAnecdotes.map(anecdote =>
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
const filteredAnecdotes = ({anecdotes, filter}) => {
  return anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = state => {
    return {
        filteredAnecdotes: filteredAnecdotes(state) 
    };
}

const mapDispatchToProps = {
    voteFor,
    setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);