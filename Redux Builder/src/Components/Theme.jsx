import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../Redux/Theme/Action'

const Theme = () => {

    const dispatch = useDispatch()
    const { theme } = useSelector((store) => store.themeReducer)

    const handleTheme = (newTheme) => {
        dispatch(toggleTheme(newTheme))
    }

    return (
        <>
            <div className='theme-btns mb-4'>
                <button className='me-4'
                    disabled={theme === 'light'}
                    onClick={() => handleTheme('light')}
                >Switch to Light</button>
                <button
                    disabled={theme === 'dark'}
                    onClick={() => handleTheme('dark')}
                >Switch to Dark</button>
            </div>
        </>
    )
}

export default Theme