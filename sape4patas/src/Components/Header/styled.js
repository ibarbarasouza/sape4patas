import styled from "styled-components";

export const Header = styled.div`
  height: 120px;
  width: 100%;
  background-color: #faf7e6;
  display: flex;
  justify-content: space-between;
  font-family: "Amatic SC";
  align-items: center;
  box-shadow: 0 0 1em gray, 0 0 1em white;
  position: fixed;
  z-index: 3;
`;
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  img {
    height: 110px;
  }
  p {
    font-family: "Amatic SC";
    color: #34190e;
    font-size: 60px;
  }

  span {
    font-family: "Amatic SC";
    color: #b67942;
  }
`;

export const Menu = styled.nav`
  display: flex;
  margin-right: 5%;

  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin: 14px;
    font-size: 30px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #34190e;
  }
  a:hover {
    color: #b67942;
  }
`;
