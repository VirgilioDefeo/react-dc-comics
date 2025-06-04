
import './Main.css';
import NavStrip from "./NavStrip"
import comics from "../assets/dc-comics-2/comics"
function Main() {
  return (
    <main className='dc-card'>
      <div className="card-container">
        <div className="comics-grid">
          {comics.map((comic) => (
            <div key={comic.id} className="comic-card">
              <img src={comic.thumb} alt={comic.title} />
              <h3>{comic.title}</h3>
              <p>{comic.price}</p>
            </div>
          ))}
        </div>
      </div>
      <NavStrip />
    </main>
  );
};

export default Main;