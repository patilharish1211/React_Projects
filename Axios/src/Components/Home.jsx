import React from 'react';
import shopingpic from '../assets/Shopping_Pic.png'

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header" style={{display: 'flex', justifyContent: 'space-around', height: '500px'}}>
        <div className="img-div">
          <img src={shopingpic} alt="" style={{ height: '400px' }} />
        </div>
        <div className="para-div" style={{marginTop: '150px', color: '#d32f2f'}}>
          <h1>Welcome! Explore our website.</h1>
          <p style={{fontWeight: 'bold'}}>Your comprehensive solution for all your necessities. 🛠️🗝️</p>
        </div>
      </header>

      <footer className="home-footer">
        <p>© CopyRight | Harish Patil</p>
      </footer>
    </div>
  );
}

export default Home;