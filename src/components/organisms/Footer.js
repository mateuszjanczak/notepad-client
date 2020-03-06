import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 5rem;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  color: white;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Text>Mateusz Janczak</Text>
        </Wrapper>
    );
};

export default Footer;