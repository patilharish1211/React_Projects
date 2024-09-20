import React from 'react'
import CounterButtons from './CounterButtons'
import { useSelector } from 'react-redux'

const Counter = () => {

    const {counter} = useSelector((store) => store.counterReducer)
    const {theme} = useSelector((store) => store.themeReducer)

    return (
        <>
            <div className={theme === 'light' ? 'light_theme col-4' : 'dark_theme col-4'}>
            <div className='counter d-flex align-items-center flex-column pt-5 pb-5'>
                <h1 className='mb-4'>Counter:-</h1>
                <h1 className='mb-4'>{counter}</h1>
                <CounterButtons />
            </div>
            </div>
        </>
    )
}

export default Counter