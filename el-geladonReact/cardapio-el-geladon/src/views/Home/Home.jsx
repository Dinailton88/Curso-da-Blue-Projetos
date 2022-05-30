import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import Navbar from "components/Navbar/Navbar"

function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>     
      <div className="Home__container">
        <PaletaLista></PaletaLista>
      </div>
    </div>
  );
}

export default Home;
