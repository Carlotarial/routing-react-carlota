import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/artists/2");
  };

  return (
    <div>
      <h1>Hola, aquí tienes la librería musical.</h1>
      <button onClick={handleSearch}>Buscar mi Artista Favorito (2)</button>
    </div>
  );
}

export default Home;
