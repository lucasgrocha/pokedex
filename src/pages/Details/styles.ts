import styled from "styled-components";
import { Star as StarSolid } from "@styled-icons/boxicons-solid";
import { Star as StarRegular } from "@styled-icons/boxicons-regular";

export const DetailBox = styled.div`
  margin: auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  height: 100vh;
  width: 100vw;
`;

export const PokemonImage = styled.img`
  width: 130px;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const StarFilled = styled(StarSolid)`
  width: 40px;
  cursor: pointer;
`;

export const StarOutline = styled(StarRegular)`
  width: 40px;
  cursor: pointer;
`;
