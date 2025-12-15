import { useParams } from "react-router-dom";
import { ARTIST_DATA } from "../components/ArtistList";
import "../app.css";

function ArtistDetail() {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = ARTIST_DATA.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <div className="notfound-container">
        <h1>Artista no encontrado</h1>
        <p>Lo sentimos, no hay información para este artista.</p>
        <div className="notfound-image">
          <img
            src="https://64.media.tumblr.com/2b3ace485aa1454cd9044eefb9d50263/7636f3c5bf432393-ca/s400x600/0620add09c2e18f0f4eea244f431e074a7f59a75.gifv"
            alt="Not Found GIF"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <h1>🎤 Detalle del Artista 🎤</h1>
      <h2>{artist.name}</h2>
      <p>Género: {artist.genre}</p>
    </div>
  );
}

export default ArtistDetail;
