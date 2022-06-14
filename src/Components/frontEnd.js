import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../Redux/Actions/Action";
import "./frontEnd.css";

function FrontEnd (){
const dispatch = useDispatch()
const count = useSelector(store => store.count)
// console.log("Data From Store", count);

    const increament = ()=>{
        dispatch(updateCount(count + 1))
    }
    const decreament = ()=>{
        dispatch(updateCount(count - 1))
    }
    const reset = ()=>{
        dispatch(updateCount(0))
    }
    return(
        <>
        <div id="background">
            <div id="mainBody">
                <button onClick={decreament} id="decrement">-</button>
                <h1 id="number">{count}</h1>
                <button onClick={increament} id="increment">+</button>
            </div>
        </div>
        <div id="resetDiv">
            <button onClick={reset} id="resetBtn">Reset</button>
        </div>
        </>
    )
}

export default FrontEnd;