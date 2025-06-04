import './ComicCard.css'; // se vuoi uno stile dedicato

function ComicCard({ comic }) {
  return (
    <div className="comic-card">
      <img src={comic.thumb} alt={comic.title} />
      <h3>{comic.title}</h3>
      <p>{comic.series}</p>
      <p className="price">{comic.price}</p>
    </div>
  );
}

export default ComicCard;