import "../assets/Header.css";

function TopHeader() {
    return (
         <div className="top-header">
      <div className="header-container">
        <div className="logo">
          <img src="./dc-logo.png" alt="DC Logo" className="logo-img" />
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">COMICS</a></li>
            <li><a href="#">MOVIES</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
          </ul>
        </nav>
      </div>
    </div>
    )
}

export default TopHeader