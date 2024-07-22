import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { addNotification, removeNotification } from "../reducers/notificationReducer"
import anecdotesService from "../services/anecdotes"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdotes = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''

        const newAnecdotes = await anecdotesService.createNew(content)
        dispatch(createAnecdote(newAnecdotes))
        dispatch(addNotification('Succesfully create anecdote: ' + content))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
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