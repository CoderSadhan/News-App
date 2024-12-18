import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg  nav-top" >
      <div className="container-fluid">
        <div className="navbar-brand"><span className="badge bg-light text-dark fs-3">News-Dunia</span></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <div className="nav-link "  activeClass='active' spy={true}  onClick={() => setCategory("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" activeClass='active' spy={true}  onClick={() => setCategory("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" activeClass='active' spy={true}   onClick={() => setCategory("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link"activeClass='active' spy={true}   onClick={() => setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" activeClass='active' spy={true}  onClick={() => setCategory("entertainment")}>Entertainment</div>
            </li>


          </ul>
        </div>
        <style>
          {`
        .nav-top{
        background :rgba(53, 184, 83, 0.54);
          }

        .nav-link {
              font-weight:500;
              transition: 0.3s;
               cursor: pointer;
              
              }

               .nav-link:hover {
                 color: hsl(43, 100%, 68%);
                  border-bottom: 3px solid yellow;
                   }
       
          ` }
        </style>
      </div>
    </nav>
  )
}

export default Navbar
