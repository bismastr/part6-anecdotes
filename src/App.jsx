import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <Anecdotes />
      <AnecdoteForm />
      <Filter />
    </div>
  )
}

export default App