
import './Main.css';
import NavStrip from "./NavStrip"
// import comics from "../assets/dc-comics-2/comics"
import ComicCard from './ComicCard';

function Main({ comics }) {
  return (
    <main className="main-comics">
      <div className="comics-grid">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
       <NavStrip />
    </main>
  );
}


    
export default Main;