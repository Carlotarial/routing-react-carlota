import { Link } from "react-router-dom";

export const ARTIST_DATA = [
  { id: "1", name: "Extremoduro", genre: "Rock" },
  { id: "2", name: "Michael Jackson", genre: "Pop" },
  { id: "3", name: "Louis Amstrong", genre: "Jazz" },
];

function Artists() {
  return (
    <div>
      <h1>Lista de Artistas</h1>
      <ul>
        {ARTIST_DATA.map((artist) => (
          <li key={artist.id}>
            <Link to={`/artists/${artist.id}`}>
              {artist.name} - {artist.genre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Artists;
