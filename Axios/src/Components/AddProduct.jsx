import React from 'react';
import vector from '../assets/Addproject_Vector.png'


const AddProduct = () => {
  return (
    <div className="AddProduct">
      <header className="AddProduct-header" style={{display: 'flex', justifyContent: 'space-around', height: '600px', backgroundColor: '#4CAF50'}}>
        <div className="img-div">
          <img src={vector} alt="" style={{ height: '400px' }} />
          <h3 style={{marginLeft: '130px', color: '#d32f2f'}}>We Working on It...</h3>
        </div>
        
      </header>

      <footer className="AddProduct-footer">
        <p style={{marginLeft: '582px'}}>© CopyRight | Harish Patil</p>
      </footer>
    </div>
  )
}

export default AddProduct
