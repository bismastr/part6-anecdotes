import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const Anecdotes = () => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        if (state.filter != '') {
            return state.anecdote.filter((a) => a.content.toLowerCase().includes(state.filter.toLowerCase()))
        }

        return state.anecdote.sort((a, b) => b.votes - a.votes)
    })

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
                        <button onClick={() => dispatch(addVote(a.id))}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Anecdotes