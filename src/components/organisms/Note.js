import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen,  faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid #333;
  color: black;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
`;

const Text = styled.div`
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;  
  min-height: calc(6 * 1.8rem);
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Action = styled.div``;

const Line = styled.hr`
  border-top: 1px solid #333;
`;

const Colors = {
  remove: '#EF3E36'
};

const Note = (props) => {
    const {user, content} = props.notes;
    return (
        <Wrapper>
            <Title>{user}</Title>
            <Text>{content}</Text>
            <Line/>
            <Actions>
                <Action>
                    <Button>
                        <FontAwesomeIcon icon={faBookOpen} />
                    </Button>
                </Action>
                <Action>
                    <Button>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </Action>
                <Action>
                    <Button color={Colors.remove}>
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Action>
            </Actions>
        </Wrapper>
    )
};

export default Note;
