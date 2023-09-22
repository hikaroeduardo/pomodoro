import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 2rem;
  }

  a {
    width: 5rem;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme["gray-100"]};

    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;

    &:hover {
      border-bottom: 6px solid ${(props) => props.theme["green-500"]};
    }

    &.active {
      color: ${(props) => props.theme["green-500"]};
    }
  }
`;

export const Logo = styled.span`
  color: ${(props) => props.theme["green-500"]};
  font-size: 2.5rem;
  font-weight: bold;
`;
