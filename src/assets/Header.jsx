import TopHeader from './TopHeader';
import NavStrip from './NavStrip';
import './Header.css';
import comics from "./dc-comics-2/comics.js"

const Header = () => {
  return (
    <header className="header">
      <div className="dc-header">
         <TopHeader />
      </div>
      <div className="content">

      </div>
    
    </header>
  );
};

export default Header;