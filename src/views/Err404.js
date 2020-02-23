import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Error = styled.h1`

`;

const Err404 = () => {
    return (
        <Wrapper>
            <Error>Site not found</Error>
        </Wrapper>
    )
};

export default Err404;
