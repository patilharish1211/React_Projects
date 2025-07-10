import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent() {
  
  return (
    <>
        <header>
            <div className="container-fluid bg-dark d-flex align-content-center align-items-center ">

                <div className="frist">
            <h1 style={{color:"white"}}>Logo</h1>
                </div>
                <div className="center m-auto ">
                    
                </div>
                <div className="last">
                <ul style={{listStyle:"none",display:"flex", }}>
                        <li className='p-2'><a href="" style={{textDecoration:"none"}}>Home</a></li>
                        <li className='p-2' ><a href="" style={{textDecoration:"none"}}>About</a></li>
                        <li className='p-2'><a href="" style={{textDecoration:"none"}}>Serveice</a></li>
                        <li className='p-2'><a href="" style={{textDecoration:"none"}}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  );
}

export default HeaderComponent;









