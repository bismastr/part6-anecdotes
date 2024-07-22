import { createSlice } from "@reduxjs/toolkit"
import anecdotesServices from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    addVote(state, action) {
      return state.map(a => a.id != action.payload.id ? a : action.payload)
    },
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, addVote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions

export const getAll = () => async dispatch => {
  const response = await anecdotesServices.getAll()
  dispatch(setAnecdotes(response))
}

export const createNewAnecdote = (content) => async dispatch => {
  const response = await anecdotesServices.createNew(content)
  dispatch(createAnecdote(response))
}

export const voteAnecdote = (object) => async (dispatch, state) => {
  const anecdotesVoted = {
    ...object,
    votes: object.votes + 1
  }

  const response = await anecdotesServices.updateAnecdote(anecdotesVoted)
  dispatch(addVote(response))
}

export default anecdoteSlice.reducer