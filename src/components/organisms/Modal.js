import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
  border: 1px solid black;
`;

const Form = styled.div`
  padding: 2.5rem 5rem;
  text-align: center;
  display: grid;
  grid-gap: 2rem;
`;

const Input = styled.input`
  width: 200px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 300px;
`;

const ActionAdd = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 5rem);
`;

const ActionClose = styled.div`
  display: grid;
  justify-content: right;
  grid-template-columns: repeat(auto-fit, 3rem);
  margin-bottom: -3rem;
`;

const Modal = ({closeModalFn}) => {
    return (
        <Wrapper>
            <Container>
                <ActionClose onClick={closeModalFn}>
                    <Button>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </ActionClose>
                <Form>
                    <div>
                        <Title>Title</Title>
                        <Input/>
                    </div>
                    <div>
                        <Title>Note</Title>
                        <TextArea/>
                    </div>
                    <ActionAdd>
                        <Button>Add</Button>
                    </ActionAdd>
                </Form>
            </Container>
        </Wrapper>
    )
};

export default Modal;