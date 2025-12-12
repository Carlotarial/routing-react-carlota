import { useParams } from "react-router-dom";
import { ARTIST_DATA } from "./Artists";

function ArtistDetail() {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = ARTIST_DATA.find((a) => a.id === artistId);

  if (!artist) {
    return <div>Artista no encontrado</div>;
  }

  return (
    <div>
      <h1>Detalle del Artista</h1>
      <h2>{artist.name}</h2>
      <p>Género: {artist.genre}</p>
    </div>
  );
}

export default ArtistDetail;
