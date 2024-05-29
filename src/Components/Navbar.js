function Navbar(){
    return(
      <div>
        <nav className="navbar">
          <div className="navbar__title">
              <h1>Udemy</h1>
          </div>
          <div className="navbar__search">
              <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="Search for anything... Arts, Science and Music etc"></input>
              </div>
          </div>
          <div className="navbar__menu">
              <p>Courses</p>
              <p className="menu__learnings">Learnings</p>
              <div className="nav__learnings">
                  <h5>You have purchased No Courses</h5>
              </div>
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-bell"></i>
              <i className="fa-solid fa-user"></i>
          </div>
          <div class="navbar__menu--mobileview">
              <i id="menubar" class="fa-solid fa-bars" style={{color: "#000000"}}></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-bell"></i>
          </div>
      </nav>
      </div>
    )
  }

  export default Navbar