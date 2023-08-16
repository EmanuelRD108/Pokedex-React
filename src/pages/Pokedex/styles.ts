import styled, { css } from "styled-components";
import img from "../../assets/pokedex.png";

interface styledbutton {
  variante: "button1" | "button2";
}
const buttonmodifi = {
  button1: css`
    background-color: #444;
  `,
  button2: css`
    background-color: orange;
  `,
};
export const Center = styled.div`
  background: linear-gradient(to bottom, #4eeb26, #808080);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Button = styled.button<styledbutton>`
  width: 80px;
  padding: 12px;
  border: 2px solid #000;
  border-radius: 5px;
  font-size: clamp(5px, 5vw, 1rem);
  font-weight: 600;
  color: white;
  ${({ variante }) => buttonmodifi[variante]}
  box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;

  &:active {
    box-shadow: inset -4px 4px 0 #222;
    font-size: 0.9rem;
  }
`;

export const Pokedex = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Sprit = styled.img`
  height: 20%;
  margin-right: 40px;
  margin-top: 150px;
`;

export const Wrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.span`
  color: #3a444d;
  text-transform: capitalize;
  font-weight: 600;
  font-size: clamp(8px, 5vw, 25px);
`;

export const Number = styled.span`
  font-weight: 600;
  color: #aaa;
  font-size: clamp(8px, 5vw, 25px);
`;

export const Texto = styled.input`
  width: 60%;
  padding: 4%;
  outline: none;
  border: 2px solid #333;
  border-radius: 5px;
  font-weight: 600;
  color: #3a444d;
  font-size: clamp(8px, 5vw, 1rem);
  box-shadow: -3px 4px 0 #888, -5px 7px 0 #333;
  margin-right: 22px;
`;

export const Buttonwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 275px;
  margin-top: 40px;

`;
