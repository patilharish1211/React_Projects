import React, { useContext, useState } from 'react';
import { theamcontext } from '../context/Theamcontext';

function Button() {
    const { Theamcheange } = useContext(theamcontext);
    const [isSun, setIsSun] = useState(true);

    const handleClick = () => {
        setIsSun(!isSun);
        Theamcheange();
    };

    return (
        <div>
            <button className={`btn-1 ${isSun ? 'sun' : 'moon'}`} onClick={handleClick}>
                {isSun ? '🌜' : '🌞'}
            </button>
        </div>
    );
}

export default Button;
