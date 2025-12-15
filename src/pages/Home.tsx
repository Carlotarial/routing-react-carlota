import { useNavigate } from "react-router-dom";
import "../app.css";

function Home() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/artists/2");
  };

  return (
    <div className="home-container">
      <h1>🎤 Bienvenida a tu librería musical 🎵</h1>
      <p>Descubre tus artistas favoritos y explora nuevos géneros.</p>
      <button onClick={handleSearch}>Buscar mi Artista Favorito (2)</button>

      <div className="home-image">
        <img src="https://i.redd.it/xmcldq048tvd1.gif" alt="Musical GIF" />
      </div>
    </div>
  );
}

export default Home;
