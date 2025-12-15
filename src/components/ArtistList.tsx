import { Link } from "react-router-dom";
import "../app.css";

export const ARTIST_DATA = [
  { id: "1", name: "Extremoduro", genre: "Rock" },
  { id: "2", name: "Michael Jackson", genre: "Pop" },
  { id: "3", name: "Louis Amstrong", genre: "Jazz" },
];

function ArtistList() {
  return (
    <ul className="artist-list">
      {ARTIST_DATA.map((artist) => (
        <li key={artist.id} className="artist-item">
          <Link className="artist-link" to={`/artists/${artist.id}`}>
            {artist.name} - {artist.genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;
