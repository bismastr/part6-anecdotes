import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdotesService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    anecdotesService.getAll().then(a => dispatch(setAnecdotes(a)))
  }, [])

  return (
    <div>
      <Notification />
      <Anecdotes />
      <AnecdoteForm />
      <Filter />
    </div>
  )
}

export default App