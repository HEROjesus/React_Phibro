import { React } from "react-dom";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <div className="container">
      <div className="logo">
        <img src="https://www.phibrosaudeanimal.com/wp-content/uploads/2021/09/favicon_64x64.png" alt="Phibro logo" />
      </div>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Meus Documentos</a>
            </li>
            <li>
              <a href="/">Analises</a>
            </li>
            <li>
              <a href="/">Base de dados</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="auxiliar">
        <ul>
          <li><a href="/">Ajuda</a></li>
          <li><a href="/">Sair</a></li>
        </ul>
      </div>
    </div>
  );
}
