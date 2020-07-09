import React from "react";
import {Switch, Route, withRouter} from "react-router-dom";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Button from "components/atoms/Button";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {routes} from "routes";
import {connect} from "react-redux";

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

const Action = styled.div`
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

    componentDidMount() {
        const { notes } = this.props;
        const { id } = this.props.match.params;
        const note = notes.find(note=>note.id === id);
        this.setState({
            ...note
        })
    }

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

    afterHandle = () => {
        const { closeModalFn } = this.props;
        this.setState({
            title: '',
            content: ''
        });
        closeModalFn();
    };

    handleClickAdd = () => {
        const { addNoteFn } = this.props;
        addNoteFn(this.state);
        this.afterHandle();
    };

    handleClickEdit = () => {
        const { editNoteFn } = this.props;
        const { id } = this.props.match.params;
        editNoteFn(id, this.state);
        this.afterHandle();
    };

    render() {
        const {closeModalFn} = this.props;
        const { title, content } = this.state;

        const actionAdd = () => {
            return (
                <Action>
                    <Button onClick={this.handleClickAdd}>Add</Button>
                </Action>
            )
        };

        const actionEdit = () => {
            return (
                <Action>
                    <Button onClick={this.handleClickEdit}>Edit</Button>
                </Action>
            )
        };


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
                            <TextArea value={content} onChange={this.handleChangeNote}/>
                        </div>

                        <Switch>
                            <Route path={routes.singleNote} component={actionEdit}/>
                            <Route path={routes.notes} component={actionAdd}/>
                        </Switch>
                    </Form>
                </Container>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({notes}) => ({notes});

export default withRouter(connect(mapStateToProps, null)(Modal));