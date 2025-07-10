import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDarkMode } from "react-icons/md";
import { SiWolframmathematica } from "react-icons/si";
import { IoReloadCircle } from "react-icons/io5";
import $ from 'jquery';

function MainPage() {

    useEffect(() => {
        // jQuery code for the text animation
        const words = $(".cd-words-wrapper b");
        let wordIndex = 0;
        words.eq(wordIndex).addClass("is-visible");
    
        setInterval(() => {
          words.eq(wordIndex).removeClass("is-visible");
          wordIndex = (wordIndex + 1) % words.length;
          words.eq(wordIndex).addClass("is-visible");
        }, 2000);
      }, []);
    


    const white=()=>{
        let left= document.getElementById("leftside")
        left.style.backgroundColor ="rgba(33, 34, 34, 0.846)"
        left.style.color ="white"
        
        let right= document.getElementById("rightside")
        right.style.backgroundColor ="rgb(33, 33, 33)"
        right.style.color ="white"
    }

    const bgg=()=>{
        let right= document.getElementById("rightside")
        right.style.backgroundImage  = "url('https://c4.wallpaperflare.com/wallpaper/622/625/95/himalayas-prayer-flags-wallpaper-preview.jpg')";
        right.style.backgroundRepeat = "no-repeat";
        right.style.backgroundSize = "cover";
        
    }


    const Red=()=>{
        let Name= document.getElementById("Name")
        Name.style.color ="red"
        

     }
    
    const green=()=>{
        let Name= document.getElementById("Name")
        Name.style.color ="lawngreen"
        
     }

     const yellow=()=>{
        let Name= document.getElementById("Name")
        Name.style.color ="yellow"
        Name.strokeText(10,20)
        
     }
     const pink=()=>{
        let Name= document.getElementById("Name")
        Name.style.color ="rgb(255, 0, 179)"
        
     }


     
  return (
    <>
        <div className="main-div  ">
            <div className="row d-flex  flex-column  flex-sm-column  flex-md-row  flex-lg-row">
            <div className="left col-12 col-sm-12 col-md-2 col-lg-2 p-0 " id="leftside">
                <h1 className='logo' ><span className='Niks' id='N' >N</span>iks</h1>
                <br />
                <ul>
                    <li><a href="" className='nav-hov' >Home</a></li>
                    <li><a href="" className='nav-hov' >About</a></li>
                    <li><a href="" className='nav-hov' >Service</a></li>
                    <li><a href="" className='nav-hov' >Contect Us</a></li>
                </ul>
            </div>
            <div className="right col-12 col-sm-12 col-md-10 col-lg-10 p-0 "  id="rightside">
                <div className="main-con">
                    <h1>Hello My Name Is <span className='Name' id="Name">Niks Nimje</span></h1>
                   

                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Eum voluptatum accusantium <br />obcaecati animi quos repellat, quam <br />laboriosam alias perspiciatis amet molestiae dolore totam. </p>
                        <br /><br />
                    <a href="" className='view-a' id='Viewaa'>View More</a> <br /><br />

                    <button onClick={white} className='Sunn' ><MdDarkMode /></button>
                    <button onClick={bgg} className='bgg' ><SiWolframmathematica /></button>

                    <br /><br />    
                    <button onClick={Red} className='red' >Red </button> 
                    <button onClick={green} className='green' >Green</button>
                    <button onClick={yellow} className='yellow' >yellow</button>
                    <button onClick={pink} className='pink' >pink</button>
                    <a href='' className='reload' ><IoReloadCircle /></a>
                </div>
                <div className="img-div d-none d-sm-none d-md-none d-lg-block ">
                    
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default MainPage