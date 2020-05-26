const initialNotification = ''

export const setNotification = (message, seconds) => {
  console.log(message)
  return dispatch => {
    dispatch({
      type: 'SET',
      data: message
    })
    setTimeout(() => {
      dispatch({
        type: 'REMOVE'
      })
    }, seconds * 1000)
  }
}

const notificationReducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'SET':
      return action.data
    case 'REMOVE':
      return initialNotification
    default:
      return state
  }
}

export default notificationReducer