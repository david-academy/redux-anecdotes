import anecdoteService from "../services/anecdotes"

export const newAnecdote = content => {
  return async dispatch => {
    const createAnecdote = await anecdoteService.createNew(content)
    dispatch({
    type: 'NEW_ANECDOTE',
    data: createAnecdote 
    })
    }
  }

export const voteFor = id => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes;
    const anecdoteToChange = anecdotes.find(anecdote => anecdote.id === id);
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes +1
    };
    const response = await anecdoteService.update(changedAnecdote);
    console.log(response)
    dispatch({
      type: 'VOTE',
      data: {
        anecdote: response
      }
    })
  }
}


const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
    case "VOTE":
      const anecdoteToChange = action.data.anecdote;
      return state.map(anecdote => {
        return anecdote.id === anecdoteToChange.id ? anecdoteToChange: anecdote;
      });
     
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
  default: return state
}
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes
  })
  }
}

export default anecdoteReducer