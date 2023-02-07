import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div id="navbar">
        <div id="max-width">
          <div id="logo">
            <a href="#">
              Port<span>fólio</span>
            </a>
          </div>
          <ul id="menu">
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#skills">Especialidades</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
          <div id="menu-btn"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
