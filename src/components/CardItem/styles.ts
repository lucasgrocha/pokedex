import styled from "styled-components";

export const StyledDetails = styled.span`
  color: var(--primary);
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

export const Card = styled.div`
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
  flex: 1 0 18%;
  > img {
    width: 110px;
  }
`;

export const StyledName = styled.h5`
  text-transform: uppercase;
`
