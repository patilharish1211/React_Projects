import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../Redux/Counter/Action'

const CounterButtons = () => {

    const {counter} = useSelector((store) => store.counterReducer)
    const dispatch = useDispatch()

    return (
        <>
            <div className='counter-btns mt-2 '>
                <button className='me-4' onClick={ () => dispatch(incrementCount()) }>Increase</button>
                
                <button
                disabled={counter == 0}
                 onClick={ () => dispatch(decrementCount()) }>Decrease</button>
            </div>
        </>
    )
}

export default CounterButtons
