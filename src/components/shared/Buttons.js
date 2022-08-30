import styled from 'styled-components'

export const Button = styled.button`
  color: #40303f;
  font-size: 20px;
  border: none;
  padding: 10px 15px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    backgroundcolor: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    color: gray;
    opacity: 0.7;
    cursor: default;
  }
`
