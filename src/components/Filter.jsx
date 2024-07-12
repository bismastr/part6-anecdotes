import { useDispatch, useSelector } from "react-redux"
import { filterWords } from "../reducers/filterReducer"

const handleOnChange = (event) => {

}

const Filter = () => {
    const state = useSelector(state => state.filter)
    const dispatch = useDispatch()

    return (
        <div>
            filter <input onChange={(event) => dispatch(filterWords(event.target.value))} value={state.filter}></input>
        </div>
    )
}

export default Filter