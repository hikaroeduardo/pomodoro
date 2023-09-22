import { NavLink } from "react-router-dom";

import { Scroll, Timer } from "phosphor-react";
import { HeaderContainer, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>POMODORO</Logo>

      <nav>
        <NavLink to="/" title="Timer">
            <Timer size={40} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
            <Scroll size={40} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
