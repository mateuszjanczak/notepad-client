import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 10rem);
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
