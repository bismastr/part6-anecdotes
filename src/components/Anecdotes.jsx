import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const Anecdotes = () => {
    const anecdotes = useSelector(state => state).sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()

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