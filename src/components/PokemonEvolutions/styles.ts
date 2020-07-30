import styled from "styled-components";
import { RightArrowAlt } from "@styled-icons/boxicons-solid";
import { Link } from "react-router-dom";

export const Arrow = styled(RightArrowAlt)`
  fill: black;
  width: 40px;

  @media screen and (max-width: 767px) {
    transform: rotate(90deg);
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f57d7d;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    min-height: 160px;
    max-height: 200px;
  }
`;

export const Circle = styled(Link)`
  border-radius: 50%;
  margin: auto 15px;
  background-color: #ffff83;
`;

export const Image = styled.img`
  transform: scale(1.5);
  transition: 0.2s;
  &:hover {
    transform: scale(1.7);
  }
`;
