import { Div, Header, Menu } from "./styled";
import Logo from "./../../Img/logo.png";

export const Head = () => {
  return (
    <Header>
      <Div>
        <img src={Logo} />
        <p>
          SAPÉ <span>4</span> PATAS
        </p>
      </Div>
      <Menu>
        <ul>
          <li>
            <a href="default">Início</a>
          </li>
          <li>
            <a href="about">Animais</a>
          </li>
          <li>
            <a href="contact.asp">Sobre nós</a>
          </li>
          <li>
            <a href="about.asp">Contato</a>
          </li>
        </ul>
      </Menu>
    </Header>
  );
};
