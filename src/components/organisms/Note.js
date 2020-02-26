import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid black;
  color: black;
  background: limegreen;
  border-radius: 1rem;
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
