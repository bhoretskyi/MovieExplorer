import styled from "styled-components";
import bgImage from "../../img/bg.jpeg";

export const MovieListStyled = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;
export const BunnerContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 46px;
  font-weight: 400;
  line-height: 90px;
  letter-spacing: 0%;
  padding-left: 10px;
  padding-right: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
`;
export const MovieCard = styled.div`
  display: flex;
  gap:10px;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5%;
  width: 350px;
  padding-top: 10px;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  background-color: var(--bg-color);
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding-top: 50px;
  padding-bottom: 50px;

`;
export const Button = styled.button`
  border-radius: 60px;
color: white;
  background: rgb(225, 60, 82);
  width: 126px;


  padding: 10px 34px 10px 34px;
`;
export const FavoriteButton = styled.button`
  border-radius: 60px;
  color: white;
    background: rgb(225, 60, 82);

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;

`
export const CardInfo = styled.div`
    height: 100px;
    /* color: var(--text-color); */

`