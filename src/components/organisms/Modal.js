import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
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

class Modal extends React.Component {

    state = {
        title: '',
        content: ''
    };

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handleChangeNote = (e) => {
        this.setState({
            content: e.target.value
        });
    };

    handleClick = () => {
        const { addNoteFn, closeModalFn } = this.props;
        addNoteFn(this.state);
        this.setState({
            title: '',
            content: ''
        });
        closeModalFn();
    };

    render() {
        const {closeModalFn} = this.props;

        const { title, note } = this.state;

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
                            <Input value={title} onChange={this.handleChangeTitle} />
                        </div>
                        <div>
                            <Title>Note</Title>
                            <TextArea onChange={this.handleChangeNote}>{note}</TextArea>
                        </div>
                        <ActionAdd>
                            <Button onClick={this.handleClick}>Add</Button>
                        </ActionAdd>
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}

export default Modal;