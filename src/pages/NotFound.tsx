import "../app.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <div className="notfound-image">
        <img
          src="https://64.media.tumblr.com/2b3ace485aa1454cd9044eefb9d50263/7636f3c5bf432393-ca/s400x600/0620add09c2e18f0f4eea244f431e074a7f59a75.gifv"
          alt="Not Found GIF"
        />
      </div>
    </div>
  );
}

export default NotFound;
