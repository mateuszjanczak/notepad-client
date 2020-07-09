import React from "react";
import { connect } from "react-redux";
import {Switch, Route, withRouter} from "react-router-dom";
import styled from "styled-components";
import Note from "components/organisms/Note";
import {addItem as addItemAction, editItem as editItemAction, fetchItems as fetchItemsAction} from "actions";
import Modal from "components/organisms/Modal";
import Button from "components/atoms/Button";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {routes} from "routes";

const Wrapper = styled.div`
  padding: 3rem;
`;

const List = styled.div`
  padding: 5rem;
  display: grid;
  grid-gap: 5rem;
  justify-items: center;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
    
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Action = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 4rem);
  justify-content: flex-end;
  margin-bottom: -2rem;
`;

const Element = styled.div`
  padding: 8rem;
`;

class Notes extends React.Component {

    state = {
        isModalOpen: false
    };

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    openModal = () => (
        this.setState({
            isModalOpen: true,
        })
    );

    componentDidMount() {
        const { fetchItems } = this.props;
        fetchItems();
    }

    render() {

        const { isModalOpen } = this.state;

        const { addItem, editItem } = this.props;

        const notesList = () => {
            const { notes } = this.props;

            const notesList = notes.length ? (
                notes.map((note) => {
                    return (
                        <Note key={note.id} note={note}/>
                    )
                })
            ) : (
                <span>No notes</span>
            );

            return (
                <>
                    {isModalOpen && <Modal addNoteFn={addItem} closeModalFn={this.closeModal} />}
                    <Action>
                        <Button onClick={this.openModal}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </Button>
                    </Action>
                    <List>
                        {notesList}
                    </List>
                </>
            )
        };

        const note = ({match}) => {
            const { notes } = this.props;

            const { id } = match.params;

            const note = notes.find(note=>note.id === id);

            const noteElement = note ? (
                <Note key={note.id} note={note} openModalFn={this.openModal}/>
            ) : (
                <span>Note not found</span>
            );


            return (
                <>
                {isModalOpen && <Modal editNoteFn={editItem} openModalFn={this.openModal} closeModalFn={this.closeModal} />}
                <Element>
                {noteElement}
                </Element>
                </>
            )
        };

        return (
            <Wrapper>
                <Switch>
                    <Route exact path={routes.singleNote} component={note}/>
                    <Route path={routes.notes} component={notesList}/>
                </Switch>
            </Wrapper>
        )
    }
}

const mapStateToProps = ({notes}) => ({notes});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItemsAction()),
    addItem: (itemContent) => dispatch(addItemAction(itemContent)),
    editItem: (id, itemContent) => dispatch(editItemAction(id, itemContent))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notes));