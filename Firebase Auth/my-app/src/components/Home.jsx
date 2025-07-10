import React from 'react'
import './Homepage.css'


function Home() {

    var btn = document.getElementById("btn");
        var light = document.getElementById("light");
        const toggleBtn=()=>{
            btn.classList.toggle("active");
            light.classList.toggle("on");
        }
  return (
    <>
        <div class="hero">
        <nav>
            <ul>
                <li>Press ME !! </li>

            </ul>
            <button type="button" onClick={toggleBtn} id="btn" className='btn-1'><span></span></button>
        </nav>

        <div class="lamp-container">
            <img src="https://i.postimg.cc/yYz5Nnqw/lamp.png" alt="" class="lamp" />
            <img src="https://i.postimg.cc/SxgtDhXh/light.png" alt="" class="light" id="light" />
        </div>

        <div class="text-container">
            <h1>Latest <br /> in Lightning</h1>
            <p>This is the first lamp from our company. We're makinga huge collection of modern lamps in all categories from home use to office use.</p>
            <a href="">Check All Collections</a>
            
        </div>
    </div>
    
    </>
  )
}

export default Home