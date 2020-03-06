import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid #ffeb3b;
  color: black;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
`;

const Text = styled.div`
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;  
`;

const Note = (props) => {
    const {user, content} = props.notes;
    return (
        <Wrapper>
            <Title>{user}</Title>
            <Text>{content}</Text>
        </Wrapper>
    )
};

export default Note;
