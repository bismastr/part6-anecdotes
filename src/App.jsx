import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
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