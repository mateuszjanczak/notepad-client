import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Note from "components/organisms/Note";
import {fetchItems as fetchItemsAction} from "actions";
import Modal from "components/organisms/Modal";
import Button from "components/atoms/Button";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  padding: 3rem;
`;

const List = styled.div`
  padding: 5rem;
  //border: 1px solid white;
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
        console.log(this.props)
    }

    render() {
        const { notes } = this.props;

        const { isModalOpen } = this.state;

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

            <Wrapper>
                {isModalOpen && <Modal closeModalFn={this.closeModal} />}
                <Action>
                    <Button onClick={this.openModal}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </Action>
                <List>
                    {notesList}
                </List>
            </Wrapper>
        )
    }
}

Notes.defaultProps= {
    notes: []
};

const mapStateToProps = ({notes}) => ({notes});

const mapDispatchToProps = dispatch => ({
    fetchItems: () => dispatch(fetchItemsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);