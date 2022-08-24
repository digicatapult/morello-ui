import styled from 'styled-components'

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  maargin-left: 80px;
  border-radius: 5px;
  cursor: pointer;
  transmission: all 0.5;

  &:hover {
    background-color: gray;
  }

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
`;