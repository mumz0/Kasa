import {NavLink} from "react-router-dom"
import Logo from "../../assets/logo/Logo.svg"

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <nav>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/About">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;