import "./footer.css";
function Footer() {
  return (
    <div>
      <div id="footer">
        <div id="columns">
          <div id="columnone">
            <div id="Logo">
              <img src="../public/logo.png" alt="logolmg" />
            </div>
            <div id="text">
              <p>
                Todos os serviços de desenvolvimentos web e marketing
                <br />
                digital necessários para criar seu império na internet.
              </p>
            </div>
          </div>

          <div id="columntwo"></div>
          <div id="menurapido">
            <h2>Menu</h2>
            <div className="separacao">
              <span></span>
            </div>
            <div id="links">
              <ul>
                <li>
                  <a href="">Inicio</a>
                </li>
                <li>
                  <a href="">Serviços</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
                <li>
                  <a href="">Sobre nós</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="separacao">
            <span></span>
          </div>

          <div id="columnthree">
            <div id="newsletter">
              <div className="separacao">
                <span></span>
              </div>
              <p>Adicione seu e-mail abaixo!</p>

              <form>
                <div id="email">
                  <label>
                    <input
                      id="email"
                      type="email"
                      value={"Seu e-mail aqui..."}
                    />
                  </label>
                </div>

                <div id="button">
                  <input id="enviar" type={"submit"} value={"Enviar"} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="credits">
          <p>Agência LMG © Todos os Diretos Reservados 2021 - 2023</p>
          <br />
          <p>
            <a href="">Termos de Uso</a> -{" "}
            <a href="">Políticas de Privacidade</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
