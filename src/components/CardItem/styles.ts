import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledDetails = styled.span`
  color: var(--primary);
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const Card = styled(Link)`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 250px;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
  color: black;
  flex: 1 0 18%;
  > img {
    width: 110px;
    transition: transform 0.2s;
  }
  &:hover {
    text-decoration: none;
    color: black;
    > img {
      transform: scale(1.2);
    }
  }
`;

export const StyledName = styled.h5`
  text-transform: uppercase;
  margin-top: 10px;
`;
