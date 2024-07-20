import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { addNotification, removeNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addNewAnecdotes = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
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