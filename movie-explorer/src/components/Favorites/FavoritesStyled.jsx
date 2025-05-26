import styled from "styled-components";
import bgImage from "../../img/bg.jpeg";

export const CardInfo = styled.div`
  height: 50px;
`;

export const FavoriteButton = styled.button`
  border-radius: 60px;
  height: 56px;
  color: white;
  background: rgb(225, 60, 82);

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 150px;
  &:hover {
    border: 1px solid white;
    transition: border 0.3s ease;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
`;
