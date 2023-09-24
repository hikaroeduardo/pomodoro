import { NavLink } from "react-router-dom";

import { Scroll, Timer } from "phosphor-react";
import { HeaderContainer, Logo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo>POMODORO</Logo>

      <nav>
        <NavLink to="/" title="Timer">
            <Timer size={35} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
            <Scroll size={35} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
