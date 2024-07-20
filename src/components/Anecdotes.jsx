import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { addNotification, removeNotification } from "../reducers/notificationReducer"

const Anecdotes = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter != '') {
            return state.anecdote.filter((a) => a.content.toLowerCase().includes(state.filter.toLowerCase()))
        }

        return [...state.anecdote].sort((a, b) => b.votes - a.votes)
    })

    const vote = (anecdotes) => {
        dispatch(addVote(anecdotes.id))
        dispatch(addNotification('Succesfully vote ' + anecdotes.content))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(a =>
                <div key={a.id}>
                    <div>
                        {a.content}
                    </div>
                    <div>
                        has {a.votes}
                        <button onClick={() => vote(a)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Anecdotes