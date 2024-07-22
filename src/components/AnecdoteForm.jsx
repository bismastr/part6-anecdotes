import { useDispatch } from "react-redux"
import { setNotification } from "../reducers/notificationReducer"
import { createNewAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdotes = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createNewAnecdote(content))
        dispatch(setNotification(`You created note: ${content}`, 5000))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addNewAnecdotes}>
                <div><input name='anecdote' /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm