import styled from "styled-components";

const Button = styled.a`
  width: 100%;
  background: ${props => props.color ? props.color : '#333'};
  padding: 0.5rem 2rem;
  color: white;
  text-align: center;
  font-size: 14px;
  opacity: 0.7;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    opacity: 1;
  }
`;

export default Button;
